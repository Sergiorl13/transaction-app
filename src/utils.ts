export function formatDate(iso: string): string {
  const d = new Date(iso);
  const diffDays = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
  if (diffDays <= 7) {
    return d.toLocaleDateString(undefined, { weekday: 'long' });
  }
  return d.toLocaleDateString();
}

export function calculateDailyPoints(date: Date = new Date()): number | string {
  const m = date.getMonth();
  let seasonStartMonth: number;
  if (m >= 2 && m < 5) seasonStartMonth = 2;
  else if (m >= 5 && m < 8) seasonStartMonth = 5;
  else if (m >= 8 && m < 11) seasonStartMonth = 8;
  else seasonStartMonth = 11;

  let seasonStart = new Date(date.getFullYear(), seasonStartMonth, 1);
  if (seasonStartMonth === 11 && m < 2) {
    seasonStart = new Date(date.getFullYear() - 1, 11, 1);
  }

  const diffMs = date.getTime() - seasonStart.getTime();
  const dayOfSeason = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

  const ptsArr: number[] = [];
  for (let i = 1; i <= dayOfSeason; i++) {
    if (i === 1) ptsArr.push(2);
    else if (i === 2) ptsArr.push(3);
    else {
      const prev2 = ptsArr[i - 3];
      const prev1 = ptsArr[i - 2];
      ptsArr.push(Math.round(prev2 + 0.6 * prev1));
    }
  }

  let pts = ptsArr[ptsArr.length - 1];
  if (pts > 1000) {
    return `${Math.round(pts / 1000)}K`;
  }
  return pts;
}
