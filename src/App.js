import React, { useState, useEffect } from "react";

const transactions = [
  { customer: "Alice", amount: 120, date: "2023-07-15" },
  { customer: "Bob", amount: 75, date: "2023-07-20" }
  // ... other transactions
];

function calculatePoints(amount) {
  if (amount > 100) {
    return 2 * (amount - 100) + 50;
  } else if (amount > 50) {
    return amount - 50;
  }
  return 0;
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(transactions);
    }, 1000);
  }, []);

  return (
    <div>
      {data.map((transaction, index) => (
        <div key={index}>
          <p>Customer: {transaction.customer}</p>
          <p>Amount: ${transaction.amount}</p>
          <p>Reward Points: {calculatePoints(transaction.amount)}</p>
        </div>
      ))}

      <hr />

      {/* Calculate total points for each customer */}
      {data.map((transaction, index) => {
        const totalPoints = calculatePoints(transaction.amount);
        return (
          <div key={index}>
            <p>Customer: {transaction.customer}</p>
            <p>Total Reward Points: {totalPoints}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
