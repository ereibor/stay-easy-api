import dayjs from 'dayjs';

export function isBeforeOrEqual(a: string, b: string) {
  return dayjs(a).isBefore(dayjs(b)) || dayjs(a).isSame(dayjs(b));
}

export function rangesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string) {
  return !(dayjs(aEnd).isBefore(dayjs(bStart)) || dayjs(bEnd).isBefore(dayjs(aStart)));
}

export function formatISO(date: Date | string) {
  return dayjs(date).format('YYYY-MM-DD');
}