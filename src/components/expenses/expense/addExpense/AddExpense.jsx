import React, { useState, useEffect } from "react";
import Helper from "../../../../util/Helper";

const AddExpense = () => {
  const [expense, setExpense] = useState("");
  const categories = [
    "sports",
    "food",
    "transportation",
    "basic needs",
    "health",
  ];

  function handleSubmit(e) {
    console.log(Helper.handleAddExpenseSubmit(e))
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="expense">
          <input
            name="expense"
            type="text"
            placeholder="Enter your expense here"
            value={expense}
            onChange={(e) => {
              setExpense(e.target.value);
            }}
          />
        </label>
        <label htmlFor="select-options-categories">
          <select name="category" id="select-options-categories">
            {categories.map((category) => (
              <option value={category} name="expenseCategory" key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddExpense;
