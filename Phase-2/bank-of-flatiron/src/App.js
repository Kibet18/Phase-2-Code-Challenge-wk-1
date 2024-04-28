import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
// App component
const App = () => {
  const [transactions, setTransactions] = useState([
    {
      "id": 1,
      "date": "2023-12-01",
      "description": "Nike Air Force 1",
      "category": "Shoes",
      "amount": "kshs 3500"
    },
    {
      "id": 2,
      "date": "2023-12-02",
      "description": "Polo-shirt",
      "category": "Clothing",
      "amount": "Kshs 800"
    },
    {
      "id": 3,
      "date": "2023-12-06",
      "description": "Venmo, Alice Pays you for Burrito",
      "category": "Food",
      "amount": "Kshs 1000"
    },
    {
      "id": 4,
      "date": "2024-04-12",
      "description": "Birthday Check from Grandma",
      "category": "Gift",
      "amount":"Kshs 1500"
    },
    {
      "id": 5,
      "date": "2024-04-26",
      "description": "Bolt Ride",
      "category": "Transportation",
      "amount":"Kshs 500"
    },
    {
      "description": "Pay Skytop Hey",
      "amount": "Kshs 2000",
      "date": "2024-02-25",
      "category": "Movie",
      "id": 6
    },
    {
      "description": "Rebel-Moon",
      "amount": "Kshs 1500",
      "date": "2024-04-25",
      "category": "Movie",
      "id": 7
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
// Function to add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
 // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
 // JSX for rendering the components
  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
