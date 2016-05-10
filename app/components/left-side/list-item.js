import React, { Component, PropTypes } from 'react';


class ListItem extends Component {
  constructor() {
    super(...arguments)

  }
onMouseOverHandler:function(){
	
}
  render() {

  	return(
		<li className="has_sub waves-effect waves-primary" onMouseOver={this.onMouseOverHandler}>
            <i className={this.props.selected?"md-radio-button-on":"md-radio-button-off"}></i>{this.props.text}
        </li>
        )
  }
}

export default ListItem