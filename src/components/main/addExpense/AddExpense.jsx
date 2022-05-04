import React, { useState, useEffect } from "react";
import Helper from "../../../util/Helper";

const AddExpense = ({ passData }) => {
  const [expense, setExpense] = useState("");
  const categories = [
    "sports",
    "food",
    "transportation",
    "basic needs",
    "health",
  ];

  // Make helper from this function
  function handleSubmit(e) {
    console.log(Helper.handleAddExpenseSubmit(e));
    passData("This is the freaking data");
    return "This is the freaking data";
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
