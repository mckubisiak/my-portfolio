import React, { Component } from 'react'
import Switch from "react-switch";


export default class Footer extends Component {
    state = {
        checked: false
    }

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        }

        handleChange(checked) {
        this.setState({ checked });
        
        if ( this.state.checked ){
            //Day
            let bodyColor = document.getElementsByTagName("BODY")[0];
bodyColor.style.backgroundColor = "#DDDDDD";
            }
            else{
            //Night
            let bodyColor = document.getElementsByTagName("BODY")[0];
bodyColor.style.backgroundColor = "#272727";
            }
        }

    render() {
        return (
            <div className="footer">
                
                <label htmlFor="material-switch">
            <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#646464"
            borderRadius={15}
            onHandleColor="#272727"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={27}
            width={42}
            className="react-switch"
            id="material-switch"
            />
        </label>

                <p><span>☾</span> 2021 AlKubi Code Lab</p>
            </div>
        )
    }
}
