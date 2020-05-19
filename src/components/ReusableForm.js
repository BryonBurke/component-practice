import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form"

const formStyle = {
  backgroundColor: "success",
  textAlign: "center",
};
const formItemStyle = {
  height: "100px",
}

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form style={formStyle} onSubmit={props.formSubmissionHandler}>
        <Form.Group style={formItemStyle} controlId="formBasicName">
          <Form.Control 
          type="text" 
          name="name" 
          placeholder="Name" />
        </Form.Group>
        <hr />
        <Form.Group style={formItemStyle} controlId="formBasicPicture">
          <Form.Control 
          type="file" 
          name="picture" 
          placeholder="Picture" />
        </Form.Group>
        <hr />
        <Form.Group style={formItemStyle} controlId="formBasicMenu">
          <Form.Control 
          type="text" 
          name="menu" 
          placeholder="Menu" />
        </Form.Group>
        <hr />
        <Form.Group style={formItemStyle} controlId="formDescriptionBasic">
          <Form.Control
           type="text"
           name="description"
           placeholder="description"
          />
        </Form.Group>
        <hr />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
