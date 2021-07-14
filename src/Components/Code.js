import React, { Component } from 'react'
import './Code.css'

export default class Code extends Component {
    render() {
        return (
            <div >
                <div>
                    <h2>Astrolocus</h2>
                    <span><a href= 'https://github.com/Astromapi/astromapi-front-end'target="_blank" rel="noopener noreferrer">Github Front End</a> - <a href= 'https://github.com/Astromapi/astromapi-back-end'target="_blank" rel="noopener noreferrer">Github Back End</a> - <a href= 'https://astrolocus.netlify.app/'target="_blank" rel="noopener noreferrer">Deployed</a></span>
                    <h3>React, Local storage, PostgreSQL, Heroku, CSS</h3>
                    <p>
                        Astrolocus allows you to see a 3 day span of weather and sky visibility,
                        along with the ability added space objects to a wish list and and journal
                        entries with them in the future. I  co-led the development the PostgreSQL
                        framework and functionality. Additionally I led the implementation of the
                        weather graphic and NASA's photo of the day.
                    </p>
                </div>
            </div>
        )
    }
}
