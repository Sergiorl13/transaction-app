import React from 'react';

export default function NoPaymentBlock() {
  return (
    <div className="card no-payment">
      <div>
        <h4>No Payment Due</h4>
        <small>You've paid your September balance.</small>
      </div>
      <div className="check-bg">
        <i className="fa-solid fa-check" />
      </div>
    </div>
  );
}
