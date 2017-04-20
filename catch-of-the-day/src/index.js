// let's go!
//Need to load in React first  just like how we add script files we import

//npm install react --save
import React from "react";
import { render } from "react-dom";
//We dont need ReactDOM from "react-dom" in this instance

import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App'

import './css/style.css'

import StorePicker from './components/StorePicker';

import NotFound from './components/NotFound';





const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern = "/" component={StorePicker}/>
        <Match pattern = "/store/:storeid" component={App}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}




//main is a div id on index.
render( <Root/>, document.querySelector("#main"));
