import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
              
              <div className="step-button-container" > 
               <Link to="select-bank">
                  <StepButton stepNumber="1" text="Select a Bank"/>
                </Link>
              </div>
              <div className="step-button-container">
              <Link to="create-peer-group">
                <StepButton stepNumber="2" text="Create a Peer Group"/>
                </Link>
              </div>
              <div className="step-button-container">
                <Link to="write-report">
                  <StepButton stepNumber="3" text = "Write a Report"/>
                </Link>
              </div>

            </div>
            /*Top Bar End */
        )
    }
}

export default TopBar;
