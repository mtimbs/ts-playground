import { describe, expect, it } from 'vitest';
import { sum } from './index';

describe('Can run test', () => {
  it('can run test suite', () => {
    expect(sum(2, 3)).toStrictEqual(5);
  });
});
