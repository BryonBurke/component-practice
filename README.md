Hi! I am trying to add user input to my cart app. I am going thru the updated curriculum on the help queue and making a normal react app for guidance and have hit a snag here: 
https://www.learnhowtoprogram.com/react/react-fundamentals/passing-data-via-callbacks-44db13ed-cc1a-4923-9a9d-93cd7071fcfc
at step 5. My github is here:
https://github.com/BryonBurke/component-practice

In PodControl.js I am passing the function handleAddingNewCartToList as the prop onNewCartCreation to NewCartForm.js on line 30 like this:

        <NewCartForm onNewCartCreation={this.handleAddingNewCartToList} />

I did not bind 'this' as I am using arrow function notation, which I believe takes care of it (also my formVisibleOnPage state works fine)

I am calling the prop in NewCartForm.js on line 28 and getting the error:
        
 ./src/components/NewCartForm.js
  Line 28:3:  'props' is not defined  no-undef

I think my error is saying that the onNewCartCreation prop (which is the function handleAddingNewCartToList) is not defined but it appears to be defined in PodControl.js starting on line 18

I have imported PropTypes in NewCartForm and defined onNewCartCreation PropType as func

I would also appreciate guidance on how I would use console logging to troubleshoot this issue. 

Thanks! Stay safe
Bryon


