#!/usr/bin/env node

import { resolve } from 'node:path';
import {
  checkEvidenceFreshness,
  loadFreshnessConfiguration,
} from './lib/workspace-gates.mjs';

const root = resolve(process.cwd());
const configuration = loadFreshnessConfiguration(root);
if (configuration.errors.length) {
  for (const error of configuration.errors) console.error(`${error.file}: ${error.reason}`);
  process.exit(1);
}
const result = checkEvidenceFreshness(root, configuration.entries);
for (const warning of result.warnings) console.warn(`WARNING ${warning.file}: ${warning.reason}`);
for (const error of result.errors) console.error(`ERROR ${error.file}: ${error.reason}`);
if (result.errors.length) process.exit(1);
console.log(`Evidence freshness metadata is valid with ${result.warnings.length} warning(s).`);
