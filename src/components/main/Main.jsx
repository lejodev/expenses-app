import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/main/_main.scss";
import getExpenses from "./expense-service";
import Expense from "./expense/Expense";



const Main = () => {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses()
      .then(result => setExpenses(result))
  }, [])

  return (
    <div className="expenses">
      <nav className="nav">
        <div className="logo">EXPENSES</div>
        <Link to="/add">
          <FaPlusSquare className="icon-add" />
        </Link>
      </nav>
      <section className="expenses-container">
        {expenses?.map((expense) => (
          <Expense expenseData = {expense} />
        ))}
      </section>
    </div>
  );
};

export default Main;
