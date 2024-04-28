import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
