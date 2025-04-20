import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import rawData from '../data/transactions.json';
import { Transaction } from '../types';

export default function TransactionDetail() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const txn = (rawData as Transaction[]).find(t => t.id === id);
  if (!txn) return <p style={{ padding: 16 }}>Transaction not found.</p>;

  const d = new Date(txn.date);
  const formattedDate =
    d.toLocaleDateString(undefined, {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit',
    }) +
    ', ' +
    d.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="container detail">
      <button className="back-button" onClick={() => nav(-1)}>
        ←
      </button>
      <p className="amount">
        {txn.type === 'Payment' ? '+' : ''}
        ${txn.amount.toFixed(2)}
      </p>
      <p className="name">{txn.name}</p>
      <p className="date">{formattedDate}</p>
      <div className="card detail-card">
        <p className="status">
          <strong>Status:</strong> {txn.pending ? 'Pending' : 'Approved'}
        </p>
        <p className="method">RBC Bank Debit Card</p>
        <hr />
        <div className="total-row">
          <span>Total</span>
          <span>${txn.amount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

