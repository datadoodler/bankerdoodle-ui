import React, { Component, PropTypes } from 'react';
import ListItem from './list-item'
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

                    <div id="left-side-menu">
                        <ul>
                            <li className="left-main-heading">
                                <i class="fa fa-bank left-main-icon"></i>
                                Banks
                            </li>
                            {
                                
                                this.props.banks.map(function(bank){
                                    return  <ListItem key={i++} text={bank.name} selected={bank.selected}></ListItem>
                                })
                            }
                            
                            <li className="left-main-heading">
                                <i class="fa fa-bars left-main-icon"></i>
                                Peer Groups
                            </li>


                            <li className="left-main-heading">
                                <i class="fa fa-area-chart left-main-icon"></i>
                                Reports
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