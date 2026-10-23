import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './app.js';

test('adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('adds negative numbers', () => {
  assert.strictEqual(add(-2, -3), -5);
});
