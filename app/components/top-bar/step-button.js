import React, { Component, PropTypes } from 'react';


class StepButton extends Component {
    constructor() {
        super(...arguments)

    }

    render() {
        //var stepNumber  = this.props.stepNumber
        return (
            < span class="hidden-sm tab hidden-xs step-button">
	            < span class="fa-stack fa-lg step-button-fa-container">
		            < i class="fa fa-circle fa-stack-2x step-button-background"> < /i>
                        < i class="fa  step-button-foreground"> { this.props.stepNumber } < /i>
	            < /span>
	            <span class="step-button-text">
	            { this.props.text }
                 
	            </span>
	        < /span>
        )

    }
}

export default StepButton;
