#!/bin/sh
echo "Setting up local development environment..."
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env file"
else
  echo ".env file already exists"
fi
