#!/usr/bin/env node

import { resolve } from 'node:path';
import { checkRelativeMarkdownLinks } from './lib/workspace-gates.mjs';

const errors = checkRelativeMarkdownLinks(resolve(process.cwd()));
for (const error of errors) console.error(`${error.file}:${error.line}: ${error.reason}: ${error.target}`);
if (errors.length) process.exit(1);
console.log('All repository-local Markdown links resolve.');
