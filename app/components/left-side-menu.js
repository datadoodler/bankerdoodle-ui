import React, { Component, PropTypes } from 'react';
import ListItem from './left-side/list-item'
//import GroupHeading from './left-side/group-heading'
///Users/kdm/DoodleZone/bankerdoodle/bankerdoodle-ui/app/components/left-side/list-item.js

class LeftSideMenu extends Component {
  constructor() {
    super(...arguments)

  }

  render() {
    var i = 0;
    return ( 
 /*  ========== Left Sidebar Start ========== */
            <div className="left side-menu">
                <div className="sidebar-inner slimscrollleft">

                    <div id="sidebar-menu">
                        <ul>
                            <li className="left-main-heading">
                                <i class="fa fa-bank left-main-icon"></i>
                                Subject Bank
                            </li>
                            {
                                
                                this.props.banks.map(function(bank){
                                    return  <ListItem key={i++} text={bank.name} selected={bank.selected}></ListItem>
                                })
                            }
                            
                            <li className="left-main-heading">
                                <i class="fa fa-bars left-main-icon"></i>
                                Peer Group
                            </li>


                            <li className="left-main-heading">
                                <i class="fa fa-area-chart left-main-icon"></i>
                                Report
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i className="md md-palette"></i> <span> UI Kit </span>
                                </a>
                            </li>

                            <li className="has_sub">
                                <a className="waves-effect waves-primary"><i
                                        className="md md-invert-colors-on"></i><span> Components </span> <span
                                        className="label label-default pull-right">5</span> </a>
                            </li>

                        </ul>
                        <div className="clearfix"></div>
                    </div>


                    <div className="clearfix"></div>
                </div>

 
            </div>
            /* Left Sidebar End */ 

    	)
  }
}

export default LeftSideMenu;