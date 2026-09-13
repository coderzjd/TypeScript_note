

# TypeScript 学习笔记

一个 TypeScript 入门学习项目，包含基础的 TypeScript 代码示例和练习。

## 功能特性

- 基础 TypeScript 语法示例
- 简单的函数定义和使用
- 完整的 TypeScript 编译配置

## 快速开始

### 环境要求

- Node.js (建议 14+ 版本)
- pnpm 包管理器

### 安装

```bash
# 安装依赖
pnpm install
```

### 使用

#### 编译 TypeScript

```bash
# 编译项目
pnpm build
# 或者使用 Makefile
make build
```

#### 运行

编译后的 JavaScript 文件可以直接在 Node.js 环境中运行。

## 项目结构

```
type-script-notes/
├── index.ts       # 入口文件，包含核心功能
├── tsconfig.json  # TypeScript 编译配置
├── package.json   # 项目依赖配置
├── makefile       # 构建脚本
└── LICENSE        # 开源协议
```

## 主要功能

### hello 函数

项目核心是一个简单的 `hello` 函数：

```typescript
function hello(params: string)
```

**参数说明：**

| 参数 | 类型 | 说明 |
|------|------|------|
| params | string | 输入的字符串参数 |

**示例：**

```typescript
import { hello } from './index'

hello('World') // 输出: Hello, World!
```

## 许可证

本项目基于 MIT 许可证开源。