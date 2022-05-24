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
  const [title, setTitle] = useState();

  const location = useLocation();
  useEffect(() => {
    return () => {
      const { title } = location.state;
      setTitle(title);
    };
  }, []);

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
        <h1 className="title">{title} EXPENSE</h1>
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
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Row>
            <Col xs={9}>
              {/* <Form.Control type="text" placeholder="DATE"></Form.Control> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
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
