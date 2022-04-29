import React, { useState, createContext } from "react";

const Expense = ({ expense }) => {
  const [expense, setExpense] = useState({});

  const expenseContext = createContext()

  return (
    <div data-testid="customId">
      <h2>{expense}</h2>
    </div>
  );
};

export default Expense;
