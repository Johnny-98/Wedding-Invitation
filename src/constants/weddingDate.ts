import dayjs from 'dayjs';
import type { TFunction } from 'i18next';

export const WEDDING_DATE = dayjs('2026-09-18T17:00:00');
export const WEDDING_DAY = WEDDING_DATE.date();
export const WEDDING_YEAR = WEDDING_DATE.year();
export const WEDDING_TIME = WEDDING_DATE.format('HH:mm');

export function formatCountdownDate(t: TFunction) {
  return `${WEDDING_DAY} ${t(
    'invitePaper.month',
  )} ${WEDDING_YEAR} · ${WEDDING_TIME}`;
}
