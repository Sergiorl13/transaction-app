import React from 'react';

interface Props { balance: number; limit: number; }

export default function CardBalance({ balance, limit }: Props) {
  const available = limit - balance;
  return (
    <div className="card">
      <h4>Card Balance</h4>
      <p style={{ fontSize: '1.5rem', margin: '4px 0' }}>
        ${balance.toFixed(2)}
      </p>
      <small>${available.toFixed(2)} Available</small>
    </div>
  );
}
