# TypeScript Study Notes

An introductory TypeScript learning project containing basic TypeScript code examples and exercises.

## Features

- Basic TypeScript syntax examples
- Simple function definitions and usage
- Complete TypeScript compilation configuration

## Quick Start

### Environment Requirements

- Node.js (Version 14+ recommended)
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install
```

### Usage

#### Compile TypeScript

```bash
# Build project
pnpm build
# Or use Makefile
make build
```

#### Run

The compiled JavaScript files can be run directly in the Node.js environment.

## Project Structure

```
type-script-notes/
├── index.ts       # Entry file, contains core functionality
├── tsconfig.json  # TypeScript compilation configuration
├── package.json   # Project dependency configuration
├── makefile       # Build script
└── LICENSE        # Open Source License
```

## Main Features

### hello Function

The core of the project is a simple `hello` function:

```typescript
function hello(params: string)
```

**Parameter Description:**

| Parameter | Type | Description |
|-----------|------|-------------|
| params | string | Input string parameter |

**Example:**

```typescript
import { hello } from './index'

hello('World') // Output: Hello, World!
```

## License

This project is open sourced under the MIT License.