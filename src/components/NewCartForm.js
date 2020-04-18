import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const NewCartForm = (props) => {
  const handleNewPodFormSubmission = (event) => {
    event.preventDefault();
    props.onNewCartCreation({ name: event.target.name.value, menu: event.target.menu.value, description: event.target.description.value, id: v4() });
  }
  return ( 
    <React.Fragment>
      <form onSubmit={handleNewPodFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Cart Name' />
        <input
          type='text'
          name='menu'
          placeholder='menu' />
        <textarea
          name='description'
          placeholder='Describe the food cart.' />
        <button type='submit'>addNewCart!</button>
      </form>
    </React.Fragment>
   );
}


 
NewCartForm.propTypes = {
  onNewCartCreation: PropTypes.func
};

export default NewCartForm;