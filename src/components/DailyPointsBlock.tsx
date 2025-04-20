import React from 'react';
import { calculateDailyPoints } from '../utils';

export default function DailyPointsBlock() {
  const pts = calculateDailyPoints();
  return (
    <div className="card">
      <h4>Daily Points</h4>
      <small>{pts}</small>
    </div>
  );
}
