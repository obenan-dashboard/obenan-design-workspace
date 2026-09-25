#!/usr/bin/env node

import { resolve } from 'node:path';
import { verifyIntegrityManifest } from './lib/workspace-gates.mjs';

const errors = verifyIntegrityManifest(resolve(process.cwd()));
for (const error of errors) console.error(`${error.file}:${error.line}: ${error.reason}`);
if (errors.length) process.exit(1);
console.log('All integrity-manifest entries match.');
