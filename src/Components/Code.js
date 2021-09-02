import React, { Component } from 'react';
import '../Styles/Code.css';
import '../Styles/App.css';
export default class Code extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <div>
          <h2 className='projectTitle'>affirbisiaks</h2>
          <span className='mainP'>
            <a
              href='https://github.com/affirbisiaks'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code
            </a>{' '}
            -{' '}
            <a
              href='https://affirbisiaks.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Deployed
            </a>
          </span>
          <h3>
            SEQUELIZE - TWILIO - JEST - NODE.JS - HEROKU - REACT - GOOGLE OAUTH
            - NETLIFY{' '}
          </h3>
          <p className='mainP'>
            Have positive affirmations from a selected category sent to you via
            text every other day for 2 weeks at a time. I led implementation of
            Twilio and the affirmations database. Additionally a significant
            amount of my time was spent troubleshooting and researching
            documentation when technical issues arose throughout the team and
            handling deployment hiccups for front & back end sites.
          </p>
        </div>

        <div>
          <h2 className='projectTitle'>Astrolocus</h2>
          <span className='mainP'>
            <a
              href='https://github.com/Astromapi'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code
            </a>{' '}
            -{' '}
            <a
              href='https://astrolocus.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Deployed
            </a>
          </span>
          <h3>REACT - LOCAL STORAGE - POSTGRESQL - HEROKU - CSS</h3>
          <p className='mainP'>
            Astrolocus allows you to see a 3 day span of weather and sky
            visibility, along with the ability added space objects to a wish
            list and and journal entries with them in the future. I co-led the
            development the PostgreSQL framework and functionality. Additionally
            I led the implementation of the weather graphic and NASA's photo of
            the day.
          </p>
        </div>

        <div>
          <h2 className='projectTitle'>ALCHIGOTCHI</h2>
          <span className='mainP'>
            <a
              href='https://github.com/Virtual-Pet-Task-Munger/virtual-pet'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code
            </a>{' '}
            -{' '}
            <a
              href='https://virtual-pet-task-munger.github.io/virtual-pet/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Deployed
            </a>
          </span>
          <h3> JAVASCRIPT - HTML - LOCAL STORAGE - CSS</h3>
          <p className='mainP'>
            Alchigotchi allows you to create an account, saving to local
            storage, choosing one of 3 pets and giving you the ability to take
            care of their food, water and love needs. I led the development of
            JavaScript to track and store stat changes and functionality to
            automatically reduce stats over time.
          </p>
        </div>
      </div>
    );
  }
}
