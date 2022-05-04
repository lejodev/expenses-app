import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/main/_main.scss";
import Expense from "./expense/Expense";

const Main = () => {
  const [expenses, setExpenses] = useState([
    { name: "Pub at night", tags: ["food", "recreation"] },
    { name: "Cinema", tags: ["recreation"] },
    { name: "Europe trip", tags: ["trips", "recreation"] },
    { name: "Mercedez Benz AMG GTR Black series", tags: ["Hobbies", "Car", "Petrolhead"] },
  ]);
  return (
    <div className="expenses">
      <nav className="nav">
        <div className="logo">EXPENSES</div>
        <Link to="/add">
          <FaPlusSquare className="icon-add" />
        </Link>
      </nav>
      <section className="expenses-container">
        {expenses.map((expense) => (
          <Expense
            key={expense.name}
            expense={expense.name}
            tags={expense.tags}
          />
        ))}
      </section>
    </div>
  );
};

export default Main;
