import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";

const EditExpense = (props) => {
  return (
    <div className="edit-expense">
      <h1 className="title">{props.title}</h1>
      <div className="details"></div>
      
      {/* <Form>
        <Form.Group htmlFor="inputEpense">
          <Form.Label>detail</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type your expense here"
          ></Form.Control>
        </Form.Group>
      </Form> */}
    </div>
  );
};

export default EditExpense;
