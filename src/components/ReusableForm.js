import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form"

function ReusableForm(props) {
  return (
    <React.Fragment>


      <form onSubmit={props.formSubmissionHandler}>

        <Form.Group controlId="formBasicName">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicPicture">
          <Form.Control type="file" name="picture" placeholder="Picture" />
        </Form.Group>

        <Form.Group controlId="formBasicMenu">
          <Form.Control type="text" name="menu" placeholder="Menu"/>
        </Form.Group>

        <Form.Group controlId="formDescriptionBasic">
          <Form.Control type="text" name="description" placeholder="description"/>
        </Form.Group>


       
       
       

       
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
