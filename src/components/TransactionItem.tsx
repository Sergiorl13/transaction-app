import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Transaction } from '../types';
import { formatDate } from '../utils';

interface Props { txn: Transaction; }

export default function TransactionItem({ txn }: Props) {
  const nav = useNavigate();
  const bg = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

  return (
    <div className="list-item" onClick={() => nav(`/transactions/${txn.id}`)}>
      <div className="left">
        
        <div className="icon-bg" style={{ background: bg, padding: 4 }}>
          <img
            src={`/logos/${txn.logo}`}
            alt={txn.name}
            style={{ width: 32, height: 32, objectFit: 'contain' }}
          />
        </div>

        <div>
          <strong>{txn.name}</strong>
          <div style={{ fontSize: '0.85rem', color: '#666' }}>
            {txn.pending && <>Pending – </>}
            {txn.description}<br/>
            {txn.authorizedUser && <>{txn.authorizedUser} – </>}
            {formatDate(txn.date)}
          </div>
        </div>
      </div>

      <div>
        <strong style={{ color: txn.type === 'Payment' ? 'green' : 'black' }}>
          {txn.type === 'Payment' ? '+' : ''}${txn.amount.toFixed(2)}
        </strong>
        <i className="fa-solid fa-chevron-right" style={{ marginLeft: 8 }}></i>
      </div>
    </div>
  );
}
