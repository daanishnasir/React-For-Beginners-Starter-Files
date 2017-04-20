
//have to do this on top of every component.
import React from "react";


import {getFunName} from '../helpers';

class StorePicker extends React.Component {

//constructor
//   constructor(){
//     super();
//     this.goToStore = this.goToStore.bind(this);
// }

goToStore(event){
  event.preventDefault();
  console.log('You have changed the url');
  //first grab the text from the box using react;  we are going to use a ref
      console.log(this.storeInput.value);

      const storeId = this.storeInput.value;

      console.log(`Going to ${storeId}`)
  // second we're going to transition from / to/ store /:storeId
  this.context.router.transitionTo(`/store/${storeId}`)
}


render(){
    // return React.createElement('p', {className: 'Testing'}, "I love you")
    return(

      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
          { /* This is how you comment inside JSX, don't put comments at top level right underneat return or you'll get an error */}
          <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
          <button type="subtmit">Visit Store -></button>
      </form>

    )



  }

}

//Name of the component is StorePicker.
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
