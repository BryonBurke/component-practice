import React from 'react';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';



const NewCartForm = (props) => {
  const handleNewCartFormSubmission = (event) => {
    event.preventDefault();


  props.onNewCartCreation({
    name: "*",
    picture: event.target.picture.value,
    menu: event.target.menu.value,
    description: event.target.description.value,
    id: v4(),
  });

  }
  return (

    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewCartFormSubmission}
        buttonText="Make new cart!" />
    </React.Fragment>
  );
}

 
NewCartForm.propTypes = {
  onNewCartCreation: PropTypes.func
};

export default NewCartForm;