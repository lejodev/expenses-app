import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "../../styles/main/_main.scss";
import Expense from "./expense_row/Expense_row";
import Helper from "../../util/Helper";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const func = async () => {
      await Helper.getExpenses()
        .then((expenses) => {
          setExpenses(expenses);
          console.log(expenses);
        })
        .catch((err) => {
          alert(err);
        });
    };
    func();
  }, []);

  return (
    <div className="expenses">
      <nav className="nav">
        <div className="logo">EXPENSES</div>
        <Link to="/edit" state={{ title: "ADD" }}>
          <FaPlusSquare className="icon-add" />
        </Link>
      </nav>
      <section className="expenses-container">
        {expenses.map((expense) => (
          <Expense key={expense.detail} data={expense} />
        ))}
      </section>
      <Outlet />
    </div>
  );
};

export default Expenses;
