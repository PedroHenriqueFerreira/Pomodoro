import { zeroLeft } from './zero-left';

export function secondsToMinutes(seconds: number): string {
  const min = zeroLeft(seconds / 60);
  const seg = zeroLeft(seconds % 60);
  return `${min}:${seg}`;
}
