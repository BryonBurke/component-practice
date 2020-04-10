import React from 'react';
import { v4 } from 'uuid';

const NewCartForm = (props) => {
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
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>addNewPod!</button>
      </form>
    </React.Fragment>
   );
}

const handleNewPodFormSubmission = (event) => {
  event.preventDefault();
  console.log(event.target.name.value);
  console.log(event.target.menu.value);
  console.log(event.target.issue.value);
}
 
 
export default NewCartForm;