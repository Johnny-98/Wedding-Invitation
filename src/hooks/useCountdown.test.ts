import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useCountdown } from './useCountdown';
import { renderHook, act } from '@testing-library/react';

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-17T17:00:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('counts down before the target date', () => {
    const target = dayjs('2026-09-18T17:00:00');
    const { result } = renderHook(() => useCountdown(target));

    expect(result.current.isPast).toBe(false);
    expect(result.current.days).toBe(1);
    expect(result.current.hours).toBe(0);
  });

  it('counts up in negative after the target date', () => {
    vi.setSystemTime(new Date('2026-09-19T17:00:00'));
    const target = dayjs('2026-09-18T17:00:00');
    const { result } = renderHook(() => useCountdown(target));

    expect(result.current.isPast).toBe(true);
    expect(result.current.days).toBe(1);
  });

  it('updates every second', () => {
    const target = dayjs('2026-09-18T17:00:05');
    const { result } = renderHook(() => useCountdown(target));

    expect(result.current.seconds).toBe(5);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(4);
  });
});
