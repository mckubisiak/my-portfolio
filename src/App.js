import React, { Component } from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Photography from './Components/Photography';
import About from './Components/About';
import Code from './Components/Code';
import ContactForm from './Components/ContactForm';

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

export default class App extends Component {
  render() {
    // dayandnight();

    return (
      <Router>
        <Header />
        <div className='mainDiv'>
          <Switch>
            <Route
              exact
              path='/'
              render={(routerProps) => <About {...routerProps} />}
            />

            <Route
              exact
              path='/photography'
              render={(routerProps) => <Photography {...routerProps} />}
            />

            <Route
              exact
              path='/code'
              render={(routerProps) => <Code {...routerProps} />}
            />

            <Route
              exact
              path='/contact'
              render={(routerProps) => <ContactForm {...routerProps} />}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
