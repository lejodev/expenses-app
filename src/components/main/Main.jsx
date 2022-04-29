import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/main/_main.scss";

const Main = () => {
  const [expenses, setExpenses] = useState(["Pub beer", "Pizza", "Cinema"]);
  return (
    <div className="expenses">
      <nav className="nav">
        <div className="logo">EXPENSES</div>
        <Link to="/add">
          <FaPlusSquare className="icon-add" />
        </Link>
      </nav>
      <section className="expenses">
        {expenses.map((expense) => (
          <div key={expense}>{expense}</div>
        ))}
      </section>
    </div>
  );
};

export default Main;
