import React, { useEffect, useState } from 'react';
import CardBalance from './CardBalance';
import NoPaymentBlock from './NoPaymentBlock';
import DailyPointsBlock from './DailyPointsBlock';
import TransactionItem from './TransactionItem';
import { Transaction } from '../types';
import rawData from '../data/transactions.json';

export default function TransactionsList() {
  const [txns, setTxns] = useState<Transaction[]>([]);

  useEffect(() => {
    setTxns(rawData as Transaction[]);
  }, []);

  const totalBalance = txns
    .filter(t => t.type === 'Credit')
    .reduce((sum, t) => sum + t.amount, 0);
  const maxLimit = 1500;

  return (
    <div className="container">
      <div className="cards-grid">
        <CardBalance balance={totalBalance} limit={maxLimit} />
        <NoPaymentBlock />
        <DailyPointsBlock />
      </div>
      <h3>Latest Transactions</h3>
      {txns.slice(0, 10).map(t => (
        <TransactionItem key={t.id} txn={t} />
      ))}
    </div>
  );
}
