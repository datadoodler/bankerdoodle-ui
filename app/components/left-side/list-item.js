import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium'
import  uuid from 'node-uuid';

class ListItem extends Component {
  constructor() {
    super(...arguments)
	this.state = { hovered:false }
	

  }
componentWillMount() {
    this.id = uuid.v4();
  }

render() {
var styles = {
  base: {
    
    ':hover': {
      color: 'rgb(189, 199, 202)'
    },

    ':focus': {
      backgroundColor: 'green'
    },

    ':active': {
      backgroundColor: 'yellow'
    },
  },
  selected:{
  	':hover':{
  	color: 'rgb(189, 199, 202)'
  	}
  },
  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },
};

  	return(
		<li key={this.id} className="waves-effect " id="list-item-container"
                   style={styles.base}>
            <i className={this.props.selected?"fa fa-circle list-item-radio-selected ":"md-radio-button-off list-item-radio"}></i>
            <span style={styles.selected} className={this.props.selected?"list-item-text-selected ":"list-item-text "}>{this.props.text}</span>
        </li>
        )
  }
}

export default Radium(ListItem)