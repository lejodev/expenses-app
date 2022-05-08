import React from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import "../../../styles/expense/_expense.scss";

const Expense = (props) => {
  // const [expense, setExpense] = useState({});

  return (
    <div data-testid="customId" className="expense">
      <div className="tags-container">
        <ul className="tags">
          {props.data.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="expenseName">{props.data.detail}</div>
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
