import React, { Component } from 'react';
import '../Styles/Code.css';
import '../Styles/App.css';
export default class Code extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <div>
          <h1 className='projectTitle'>BIENVENTORY</h1>

          <h4>
            POSTGRESQL - TWILIO - MOCK(JEST) - NODE.JS - REACT -GOOGLE OAuth<br />
            PAPAPARSE CSV - MATERIAL UI{' '}
          </h4>
          <h4>
            <a
              href='https://github.com/bienventory'
              target='_blank'
              rel='noopener noreferrer'
            >
              CODE
            </a>{' '}
            -{' '}
            <a
              href='https://bienventory.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              DEPLOYED
            </a>{' '}
            | 4 ENGINEERS - 2 WEEK SPRINT - REMOTE
          </h4>
          <p className='mainP'>
            <strong>
            Bienventory allows restaurants to create an inventory with the scopeof ingredients and meals and upload CSV files to update theirinventory and receive text notification.
            </strong>{' '}
            I co-led implementing MaterialUI and Google OAuth into our frontend. I led implementing a loginprovider to manage user state.
          </p>
        </div>

        <div>
          <h1 className='projectTitle'>affirbisiaks</h1>

          <h4>
            SEQUELIZE - TWILIO - JEST - NODE.JS - HEROKU - REACT - GOOGLE OAUTH
            - NETLIFY{' '}
          </h4>
          <h4>
            <a
              href='https://github.com/affirbisiaks'
              target='_blank'
              rel='noopener noreferrer'
            >
              CODE
            </a>{' '}
            -{' '}
            <a
              href='https://affirbisiaks.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              DEPLOYED
            </a>{' '}
            | 5 ENGINEERS - 2 WEEK SPRINT - REMOTE
          </h4>
          <p className='mainP'>
            <strong>
              Have positive affirmations from a selected category sent to you
              via text every other day for 2 weeks at a time.
            </strong>{' '}
            I led implementation of Twilio and the affirmations database.
            Additionally a significant amount of my time was spent
            troubleshooting and researching documentation when technical issues
            arose throughout the team and handling deployment hiccups for front
            & back end sites.
          </p>
        </div>

        <div>
          <h1 className='projectTitle'>Astrolocus</h1>
          <h4>REACT - LOCAL STORAGE - POSTGRESQL - HEROKU - CSS</h4>
          <h4>
            <a
              href='https://github.com/Astromapi'
              target='_blank'
              rel='noopener noreferrer'
            >
              CODE
            </a>{' '}
            -{' '}
            <a
              href='https://astrolocus.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              DEPLOYED
            </a>
            | 4 ENGINEERS - 1 WEEK SPRINT - REMOTE
          </h4>
          <p className='mainP'>
            <strong>
              {' '}
              Astrolocus allows you to see a 3 day span of weather and sky
              visibility, along with the ability added space objects to a wish
              list and and journal entries with them in the future.
            </strong>{' '}
            I co-led the development the PostgreSQL framework and functionality.
            Additionally I led the implementation of the weather graphic and
            NASA's photo of the day.
          </p>
        </div>

        <div>
          <h1 className='projectTitle'>ALCHIGOTCHI</h1>
          <h4> JAVASCRIPT - HTML - LOCAL STORAGE - CSS</h4>
          <h4>
            <a
              href='https://github.com/Virtual-Pet-Task-Munger/virtual-pet'
              target='_blank'
              rel='noopener noreferrer'
            >
              CODE
            </a>{' '}
            -{' '}
            <a
              href='https://virtual-pet-task-munger.github.io/virtual-pet/'
              target='_blank'
              rel='noopener noreferrer'
            >
              DEPLOYED
            </a>
            | 4 ENGINEERS - 1 WEEK SPRINT - REMOTE
          </h4>
          <p className='mainP'>
            <strong>
              Alchigotchi allows you to create an account, saving to local
              storage, choosing one of 3 pets and giving you the ability to take
              care of their food, water and love needs.
            </strong>{' '}
            I led the development of JavaScript to track and store stat changes
            and functionality to automatically reduce stats over time.
          </p>
        </div>
      </div>
    );
  }
}
