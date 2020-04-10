import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewCartForm(props) {
  return ( 
    <React.Fragment>
      <form onSubmit={handleNewCartFormSubmission}>
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
          placeholder='Describe the cart.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
   );
}

function handleNewCartFormSubmission (event){
  event.preventDefault();
  props.onNewCartCreation({ 
    name: event.target.name.value, 
    menu: event.target.menu.value, 
    description: event.target.description.value, 
    id: v4() 
  });
}

NewCartForm.propTypes ={
  onNewCartCreation: PropTypes.func
};
 
 
export default NewCartForm;