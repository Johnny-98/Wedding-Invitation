import type { TFunction } from 'i18next';

const WEDDING_TIMEZONE = 'Europe/Sofia';

/** 18 Sep 2026, 16:00 — church ceremony, Europe/Sofia (EEST, UTC+3). */
export const WEDDING_COUNTDOWN_TARGET_MS = Date.parse(
  '2026-09-18T16:00:00+03:00',
);

const weddingDayInSofia = new Intl.DateTimeFormat('en-CA', {
  timeZone: WEDDING_TIMEZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date(WEDDING_COUNTDOWN_TARGET_MS));

const WEDDING_YEAR = Number(weddingDayInSofia.slice(0, 4));
const WEDDING_DAY = Number(weddingDayInSofia.slice(8, 10));

export function formatHeroDate(t: TFunction) {
  return `${WEDDING_DAY} ${t('hero.month')} ${WEDDING_YEAR}`;
}

export function formatTimelineDate() {
  const [year, month, day] = weddingDayInSofia.split('-');
  return `${day}.${month}.${year}`;
}

export function formatCountdownDate(locale: string) {
  return new Intl.DateTimeFormat(locale === 'bg' ? 'bg-BG' : 'en-GB', {
    timeZone: WEDDING_TIMEZONE,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(WEDDING_COUNTDOWN_TARGET_MS));
}
