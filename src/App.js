import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import LandingPage from './Components/LandingPage.js';
import Photography from './Components/Photography';
import About from './Components/About';


// For changing background based on time of day
// function dayandnight(){
//   let current = new Date();
//          let day_night = current.getHours();
//                    if (day_night < 21 && day_night > 5){
//                     //Day
//                     let bodyColor = document.getElementsByTagName("BODY")[0];
//       bodyColor.style.backgroundColor = "DarkSlateGrey";
//                    }
//                    else{
//                     //Night
//                     let bodyColor = document.getElementsByTagName("BODY")[0];
//       bodyColor.style.backgroundColor = "Lavendar";
//                    }
//                }

let bodyColor = document.getElementsByTagName("BODY")[0];
bodyColor.style.backgroundColor = "#272727";
            

export default class App extends Component {


  render() {
  // dayandnight();

    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' render={
              (routerProps) => 
              <LandingPage  {...routerProps} />
            } />

            <Route exact path='/photography' render={
              (routerProps) => 
              <Photography {...routerProps} />
            } />

            <Route exact path='/about' render={
              (routerProps) => 
              <About {...routerProps} />
            } />

          </Switch>
          <Footer />
      </Router>
    )
  }
}
