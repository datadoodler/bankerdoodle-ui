import React, { Component, PropTypes } from 'react';


class ListItem extends Component {
  constructor() {
    super(...arguments)
	this.state = { hovered:false }
	this.onMouseOver = this.onMouseOver.bind(this)
	this.onMouseOut = this.onMouseOut.bind(this)
	this.style = this.style.bind(this)
  }



style() {
	console.log('style',this.state)
  if (this.state.hovered) {
    return { backgroundColor: "red" }
  } else {
    return { backgroundColor: "grey" }
  }
}
onMouseOver () {
	//console.log(this.state)
  this.state.hovered=true;
  this.style();
}

onMouseOut() {
	//console.log('out')
	this.state.hovered=false;
}


  render() {


  	return(
		<li className="has_sub waves-effect waves-primary" onMouseOver={this.onMouseOver} 
                   onMouseOut={this.onMouseOut} 
                   style={this.style()}>
            <i className={this.props.selected?"md-radio-button-on":"md-radio-button-off"}></i>{this.props.text}
        </li>
        )
  }
}

export default ListItem