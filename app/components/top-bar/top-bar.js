import React, { Component, PropTypes } from 'react';
import Logo from './logo'
import StepButton from './step-button';


class TopBar extends Component {
    constructor() {
        super(...arguments)

    }

    render() {

        return (

            /*Top Bar Start */
            < div className = "topbar row" >

              <div className="col-md-3">
                < Logo / >
              </div>
              <div class="hidden-md hidden-sm hidden-lg">MESSAGE</div>
              <div className="step-button-container" > 
                <StepButton stepNumber="1" text="Select a Bank"/>
              </div>
              <div className="step-button-container">
                <StepButton stepNumber="2" text="Create a Peer Group"/>

              </div>
              <div className="step-button-container">
                <StepButton stepNumber="3" text = "Write a Report"/>

              </div>

            </div>
            /*Top Bar End */
        )
    }
}

export default TopBar;
