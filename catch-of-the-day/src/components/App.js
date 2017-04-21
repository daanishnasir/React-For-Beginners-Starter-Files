import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes"
import Fish from "./Fish"



class App extends React.Component {

constructor(){
  super();

  this.addFish = this.addFish.bind(this);  //will bind it to the actual app itself;
  this.loadSamples = this.loadSamples.bind(this);  //will bind it to the actual app itself;
  this.addToOrder = this.addToOrder.bind(this);
  //getinitialSloadSampleseact needs to know that we are going to have a fishes state and a order state when it initalizes
  this.state = {
      fishes: {}, //empty object; starts empty
      order:{}
  };
}

//how does fish swim to App.js to add to  lol
addFish(fish){
  //update our state, first take a copy of the state (good practice)
    const fishes = {...this.state.fishes}   //will take every item from our object and put it in this fishes variable. Makes a copy

  //add in our new fish
    const timestamp = Date.now();  //number of miliseconds since 1970 i think
    fishes[`fish-${timestamp}`] = fish; //gonna take the fish object from AddFishForm

  //set state
  this.setState({ fishes: fishes })
}

loadSamples(){  //load the sample fishes
  this.setState({
      fishes: sampleFishes
  })
}

addToOrder(key){
  //take a copy of our state
  const order = {...this.state.order};
  //update or add the new number of fish ordered
  order[key] = order[key] + 1 || 1;
  //update our state
  this.setState({order: order});
}

  render(){

    return(

        <div className="catch-of-the-day">
            <div className="menu">
              <Header tagline="Fresh Seafood Market"/>
                <ul className="list-of-fishes">
                  {
                    Object
                    .keys(this.state.fishes)
                    .map(key => <Fish key={key} index={key}
                       details={this.state.fishes[key]} addToOrder
                       ={this.addToOrder}/>)
                    }
                </ul>
            </div>
              <Order />
              <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
        </div>



    )
  }
}



export default App;
