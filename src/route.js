import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as  Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Room from './room'
import Main from './main'
import Home from './home'
class Routing extends Component {


  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path ="/ "  component={() => <Home />}/> 
            <Route exact path ="/channel"  component={() => <Main />}/>
            <Route exact path ="/room"  component={() => <Room />}/>
          </div>
        </BrowserRouter>
   );
  }

}

export default Routing;