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
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='cartName'
          placeholder='Name' />
        <input
          type='text'
          name='menu'
          placeholder='Menu' />
        <textarea
          name='description'
          placeholder='Description.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
