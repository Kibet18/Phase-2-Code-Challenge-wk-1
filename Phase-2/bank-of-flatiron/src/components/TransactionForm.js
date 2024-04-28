
import React, { useState } from 'react';

// TransactionForm component
const TransactionForm = ({ onAddTransaction }) => {
  // State variables
  const [description, setDescription] = useState(''); // Description state
  const [amount, setAmount] = useState(''); // Amount state
  const [date, setDate] = useState(''); // Date state
  const [category, setCategory]= useState(''); // Category state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Call the onAddTransaction function passed as prop with transaction data
    onAddTransaction({ description, amount, date, category});
    // Reset state variables
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  // JSX for the form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Description input */}
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        {/* Amount input */}
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        {/* Date input */}
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        {/* Category input */}
        <label>
          Category:
          <input
            type="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        {/* Submit button */}
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
