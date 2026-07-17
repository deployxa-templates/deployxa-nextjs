# AI Agents Guide (Cursor, Claude Code, Copilot)

This document outlines the standard architecture, conventions, and workflows of this repository to optimize productivity for AI development assistants.

## Folder Conventions
- `src/app`: Follow Next.js App Router conventions. Place APIs, layout wrappers, page entrypoints directly inside.
- `config/`: Contains static settings. Keep it separate from source files to maintain clear configuration logic.
- `tests/`: Integration and unit test folder.

## Naming Standards
- Component folders: kebab-case
- Source components: camelCase or PascalCase
- APIs: keep them stateless, return standard JSON structures.
