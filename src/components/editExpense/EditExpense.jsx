import React from "react";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import "../../styles/add-edit-expense/_edit-expense.scss";

const EditExpense = () => {
  return (
    <div className="edit-expense">
      <div className="edit-expense-container">
        <Link to="/">
          <FaWindowClose className="close" />
        </Link>
        <h1 className="title">EDIT EXPENSE</h1>
        <div className="details"></div>
        <Form>
          <Form.Group htmlFor="inputEpense">
            <Form.Text>Detail</Form.Text>
            <FloatingLabel label="Details here madafaka">
              <Form.Control
                as="textarea"
                placeholder="Type your expense here"
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder="DATE"></Form.Control>
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
