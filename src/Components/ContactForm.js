import React, { Component } from 'react';
import '../Styles/App.css';
import '../Styles/Contact.css';
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (

      <div className='mainDiv'>
      <div className='contactDiv'>
        <form name='contact' method='post' onSubmit={this.handleSubmit}>
          <input type='hidden' name='form-name' value='contact' />

          <p className='mainP'>
            <label>
              Your Name:{' '}
              <br></br>
              <input
                type='text'
                name='name'
                value={name}
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p className='mainP'>
            <label>
              Your Email:{' '}
              <br></br>
              <input
                type='email'
                name='email'
                value={email}
                required
                onChange={this.handleChange}
              />
            </label>
              <br></br>
            <label>
              Message:{' '}
              <br></br>
              <textarea
                name='message'
                value={message}
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p className='mainP'>
            <button type='submit'>Send</button>
          </p>
        </form>
      </div>
      </div>
    );
  }
}
