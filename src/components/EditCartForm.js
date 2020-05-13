import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCartForm(props) {

  const { cart } = props;

  function handleEditCartFormSubmission(event) {
    event.preventDefault();
    props.onEditCart({
      name: event.target.name.value,
      menu: event.target.menu.value,
      description: event.target.description.value,
      id: cart.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCartFormSubmission}
        buttonText="Update Cart"
      />
    </React.Fragment>
  );
}


EditCartForm.propTypes = {
  onEditCart: PropTypes.func
}

export default EditCartForm;
