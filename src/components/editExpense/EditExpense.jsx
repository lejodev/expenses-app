import React, { useState, useEffect } from "react";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import "../../styles/add-edit-expense/_edit-expense.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExpense = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [expenseDescription, setExpenseDescription] = useState("");
  const [popuptitle, setPopupTitle] = useState();
  const [defaultFormValues, setDefaultFormValues] = useState({});

  const location = useLocation();

  useEffect(() => {
    const { title, expense } = location.state;
    setPopupTitle(title);
    if (expense !== undefined) {
      setDefaultFormValues(expense);
    }
  }, [location.state]);

  // Future features: Put this function on the helper file and add the (add tags feature)
  function handleSubmit(e) {
    e.preventDefault();
    const expense = {
      description: expenseDescription,
      date: startDate,
    };
    console.log(expense);
  }

  return (
    <div className="edit-expense">
      <div className="edit-expense-container">
        <Link to="/">
          <FaWindowClose className="close" />
        </Link>
        <h1 className="popuptitle">{popuptitle} EXPENSE</h1>
        <div className="details"></div>
        <Form onSubmit={handleSubmit}>
          <Form.Group htmlFor="inputEpense">
            <Form.Text>Detail</Form.Text>
            <FloatingLabel label="Details here madafaka">
              <Form.Control
                as="textarea"
                placeholder="Type your expense here"
                onChange={(e) => {
                  setExpenseDescription(e.target.value);
                }}
                value={expenseDescription || defaultFormValues.detail || ""}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Row>
            <Col xs={9}>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                value={defaultFormValues.date || "" || startDate}
              ></DatePicker>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                SAVE
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default EditExpense;
