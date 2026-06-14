import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getCountdownParts } from './useCountdown';

describe('getCountdownParts', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-17T10:00:00+03:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('counts down to the Sofia wedding target', () => {
    const targetMs = Date.parse('2026-09-18T16:00:00+03:00');

    expect(getCountdownParts(targetMs)).toEqual({
      days: 1,
      hours: 6,
      minutes: 0,
      seconds: 0,
      isComplete: false,
    });
  });

  it('returns zero when the target has passed', () => {
    const targetMs = Date.parse('2026-09-18T16:00:00+03:00');
    vi.setSystemTime(new Date('2026-09-19T10:00:00+03:00'));

    expect(getCountdownParts(targetMs)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    });
  });
});
