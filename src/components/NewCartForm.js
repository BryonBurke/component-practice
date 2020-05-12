import React from 'react';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

const NewCartForm = (props) => {
  const handleNewCartFormSubmission = (event) => {
    event.preventDefault();
    props.onNewCartCreation({ 
      name: event.target.name.value, 
      menu: event.target.menu.value, 
      description: event.target.description.value, 
      id: v4()
     });
  }
  return (

    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewCartFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}




 
NewCartForm.propTypes = {
  onNewCartCreation: PropTypes.func
};

export default NewCartForm;