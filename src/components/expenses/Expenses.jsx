import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Expenses/_expenses.scss";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  return (
    <div className="expenses">
      <nav className="nav">
        <div className="logo">EXPENSES</div>
        <Link to="/add">
          <FaPlusSquare className="icon-add" />
        </Link>
      </nav>
    </div>
  );
};

export default Expenses;
