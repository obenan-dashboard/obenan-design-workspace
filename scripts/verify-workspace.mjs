#!/usr/bin/env node

import { resolve } from 'node:path';

import { runWorkspaceChecks } from './lib/workspace-gates.mjs';

function argument(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const root = resolve(argument('--root', process.cwd()));
const nowValue = argument('--now', null);
const now = nowValue ? new Date(nowValue) : new Date();

if (Number.isNaN(now.valueOf())) {
  console.error(`Invalid --now value: ${nowValue}`);
  process.exit(2);
}

const result = runWorkspaceChecks(root, now);

for (const warning of result.warnings) {
  const location = warning.line ? `:${warning.line}` : '';
  console.warn(`WARNING [${warning.gate}] ${warning.file}${location}: ${warning.reason}`);
  if (process.env.GITHUB_ACTIONS) {
    console.warn(`::warning file=${warning.file}${warning.line ? `,line=${warning.line}` : ''}::${warning.reason}`);
  }
}

for (const error of result.errors) {
  const location = error.line ? `:${error.line}` : '';
  console.error(`ERROR [${error.gate}] ${error.file}${location}: ${error.reason}`);
}

if (result.errors.length) process.exit(1);
console.log(`Workspace gates passed with ${result.warnings.length} freshness warning(s).`);
