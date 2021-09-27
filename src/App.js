import React, { Component } from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
import Header from './Components/Header.js';
import Photography from './Components/Photography';
import About from './Components/About';
import Code from './Components/Code';
import ContactForm from './Components/ContactForm';
import CommentsContainer from './Containers/CommentsContainer';
import ModifyComment from './Components/ModifyComment';

export default class App extends Component {
  render() {

    return (
      <Router>
        <Header />
        <div className='appDiv'>
          <Switch >
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

        <Route path="/comments/:id" exact component={ModifyComment} />

        <Route path="/comments" exact component={CommentsContainer} />

          </Switch>
        </div>
      </Router>
    );
  }
}

