import React, { useState, createContext } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import "../../../styles/expense/_expense.scss";

const Expense = ({ expenseData }) => {
  // const [expense, setExpense] = useState({});

  const expenseContext = createContext();

  console.log(expenseData)

  return (
    <div data-testid="customId" className="expense">
      <div className="tags-container">
        <ul className="tags">
          {expenseData?.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="expenseName">{expenseData.detail}</div>
      <div className="expense-menu">
        <div className="display-menu">
          <i className="dots icon">
            <HiDotsHorizontal />
          </i>
        </div>
        <div className="edit-delete">
          <i className="icon eidt">
            <MdModeEditOutline />
          </i>
          <i className="icon delete">
            <MdDelete />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Expense;
