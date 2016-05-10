import React, { Component, PropTypes } from 'react';
import StepButton from './step-button';
console.log(StepButton)
class Logo extends Component {
    constructor() {
        super(...arguments)

    }

    render() {
        return ( 
            < div className = "topbar-left" >
                < div className = "text-center" >
                    < a href = "index.html"
                        className = "logo" > 
                        < i className = "logo-graphic md md-equalizer " /> 
                        <span>BankerDoodle</span > 
                    < /a> 
                < /div > 
            < /div>
            )
        }
    }

    export default Logo;
