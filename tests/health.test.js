const { spawn } = require('child_process');
const http = require('http');

console.log('Starting Next.js server for testing...');
const server = spawn('npm', ['run', 'start', '--', '-p', '3001'], {
  env: { ...process.env, PORT: '3001', NODE_ENV: 'production' },
  shell: true
});

server.stdout.on('data', (data) => {
  // Option to print log
});
server.stderr.on('data', (data) => {
  console.error(data.toString());
});

// Wait for server to start
const checkInterval = setInterval(() => {
  http.get('http://localhost:3001/health', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      clearInterval(checkInterval);
      server.kill();
      try {
        const json = JSON.parse(data);
        console.log('Response Status:', res.statusCode);
        console.log('Response Body:', json);

        if (res.statusCode === 200 && json.status === 'ok') {
          console.log('✓ Health check test PASSED');
          process.exit(0);
        } else {
          console.error('✗ Health check test FAILED: Invalid response payload');
          process.exit(1);
        }
      } catch (err) {
        console.error('Failed to parse JSON response:', err);
        process.exit(1);
      }
    });
  }).on('error', (err) => {
    // Server not ready yet, will retry
  });
}, 1000);

// Timeout after 15 seconds
setTimeout(() => {
  clearInterval(checkInterval);
  server.kill();
  console.error('✗ Health check test TIMEOUT: Server did not respond within 15s');
  process.exit(1);
}, 15000);
