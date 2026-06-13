import dayjs from 'dayjs';
import type { TFunction } from 'i18next';

export const WEDDING_DATE = dayjs('2026-09-18T17:00:00');
export const WEDDING_DAY = WEDDING_DATE.date();
export const WEDDING_YEAR = WEDDING_DATE.year();

export function formatHeroDate(t: TFunction) {
  return `${t('hero.month')} ${WEDDING_DAY}, ${WEDDING_YEAR}`.toUpperCase();
}

export function formatTimelineDate() {
  return WEDDING_DATE.format('DD.MM.YY');
}
