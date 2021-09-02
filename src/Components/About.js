import React, { Component } from 'react';
import '../Styles/App.css';
export default class About extends Component {
  render() {
    return (
      <div className='aboutDiv'>
        <h1 className='mainTitle'>About Kubisiak</h1>
        <div>
          <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/kubisiak/'
        >
          <img className='icon' src='./linkedin.png' alt='LinkedIn' />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/mckubisiak'
        >
          <img className='icon' src='./github.png' alt='Github' />
        </a>
          <article>
            <p className='mainP'>
              A queer trans Software Engineer. I love developing with people and
              supporting everyone's common, as well as individual goals.
              Photography and{' '}
              <a
                href='https://docs.google.com/document/d/1Tb3ETGO7tTbJFjT9ZHOJqpmd-qvIyq-JAkz8kT4pQfY/edit'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                Mutual Aid
              </a>{' '}
              are other avenues I like to participate in my community.
            </p>
          </article>
        </div>
      </div>
    );
  }
}
