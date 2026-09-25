#!/usr/bin/env node

import { resolve } from 'node:path';
import { checkPortability } from './lib/workspace-gates.mjs';

const errors = checkPortability(resolve(process.cwd()));
for (const error of errors) console.error(`${error.file}:${error.line}:${error.column}: ${error.reason}`);
if (errors.length) process.exit(1);
console.log('Tracked Markdown is portable outside the provenance allowlist.');
