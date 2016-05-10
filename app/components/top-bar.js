import React, { Component, PropTypes } from 'react';


class TopBar extends Component {
  constructor() {
    super(...arguments)

  }

  render() {
    return ( 

            /*Top Bar Start */
            <div className="topbar">
                <div className="topbar-left">
                    <div className="text-center">
                        <a href="index.html" className="logo"><i className="md md-equalizer"></i> <span>BankerDoodle</span> </a>
                    </div>
                </div>

                <div className="navbar navbar-default" role="navigation">
                    <div className="container">
         <div className="col-lg-6">

                                <ul className="nav nav-tabs tabs">
                                    <li className="active tab">
                                        <a href="#home-12" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-home"></i></span>
                                            <span className="hidden-xs header-tab-text">1) Select a Subject Bank</span>
                                        </a>
                                    </li>
                                    <li className="tab">
                                        <a href="#profile-12" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-user"></i></span>
                                            <span className="hidden-xs">2) Define a Peer Group</span>
                                        </a>
                                    </li>
                                    <li className="tab">
                                        <a href="#messages-12" data-toggle="tab" aria-expanded="true">
                                            <span className="visible-xs"><i className="fa fa-envelope-o"></i></span>
                                            <span className="hidden-xs">3) Write a Report</span>
                                        </a>
                                    </li>
                                    <li className="tab">
                                        <a href="#settings-12" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-cog"></i></span>
                                            <span className="hidden-xs">Settings1</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        
                    </div>
                </div>
            </div>
            /*Top Bar End */
            )
  }
}

export default TopBar;