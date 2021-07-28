import React, { Component } from 'react'
import '../Styles/App.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        fetch('/', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div>
                <form 
                name="contact" 
                method="post" 
                onSubmit={this.handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />

            <p className='main'>
            <label>
                Your Name: <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={this.handleChange} />
            </label>
            </p>
            <p className='main'>
            <label>
                Your Email: <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={this.handleChange} />
            </label>
            </p>
            <p className='main'>
            <label>
                Message: <textarea 
                name="message" 
                value={message} 
                onChange={this.handleChange} />
            </label>
            </p>
            <p className='main'>
            <button 
            type="submit">Send</button>
            </p>
        </form>
            </div>
        )
    }
}