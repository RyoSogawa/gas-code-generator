import { describe, expect, test } from '@jest/globals';

import { convertArrayToJsonCompatible } from '../src';

describe('utils/convertArrayToJsonCompatible', () => {
  const date = new Date();
  const result = convertArrayToJsonCompatible(['string', date, 123, true]);
  test('should not change primitives', () => {
    expect(result[0]).toBe('string');
    expect(result[2]).toBe(123);
    expect(result[3]).toBe(true);
  });
  test('should convert date to number', () => {
    expect(typeof result[1]).toBe('number');
  });
});
