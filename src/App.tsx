import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TransactionsList from './components/TransactionList';
import TransactionDetail from './components/TransactionDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/transactions" replace />} />
      <Route path="/transactions" element={<TransactionsList />} />
      <Route path="/transactions/:id" element={<TransactionDetail />} />
    </Routes>
  );
}
