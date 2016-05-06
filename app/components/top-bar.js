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
                        <a href="index.html" className="logo"><i className="md md-equalizer"></i> <span>DataDoodler</span> </a>
                    </div>
                </div>

                <div className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="">
                            <div className="pull-left">
                                <button className="button-menu-mobile open-left waves-effect">
                                    <i className="md md-menu"></i>
                                </button>
                                <span className="clearfix"></span>
                            </div>

                            <ul className="nav navbar-nav hidden-xs">
                                <li><a href="#" className="waves-effect">Files</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect" data-toggle="dropdown"
                                       role="button" aria-haspopup="true" aria-expanded="false">Projects <span
                                            className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Web design</a></li>
                                        <li><a href="#">Projects two</a></li>
                                        <li><a href="#">Graphic design</a></li>
                                        <li><a href="#">Projects four</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <form role="search" className="navbar-left app-search pull-left hidden-xs">
                                 <input type="text" placeholder="Search..." className="form-control app-search-input" />
                                 <a href=""><i className="fa fa-search"></i></a>
                            </form>

                            <ul className="nav navbar-nav navbar-right pull-right">

                                <li className="dropdown hidden-xs">
                                    <a href="#" data-target="#" className="dropdown-toggle waves-effect waves-light"
                                       data-toggle="dropdown" aria-expanded="true">
                                        <i className="md md-notifications"></i> <span
                                            className="badge badge-xs badge-pink">3</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-lg">
                                        <li className="text-center notifi-title">Notification</li>
                                        <li className="list-group nicescroll notification-list">
                                            /*list item*/
                                            <a href="javascript:void(0);" className="list-group-item">
                                                <div className="media">
                                                    <div className="pull-left p-r-10">
                                                        <em className="fa fa-diamond noti-primary"></em>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="media-heading">A new order has been placed A new
                                                            order has been placed</h5>
                                                        <p className="m-0">
                                                            <small>There are new settings available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            /*list item*/
                                            <a href="javascript:void(0);" className="list-group-item">
                                                <div className="media">
                                                    <div className="pull-left p-r-10">
                                                        <em className="fa fa-cog noti-warning"></em>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="media-heading">New settings</h5>
                                                        <p className="m-0">
                                                            <small>There are new settings available</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            /*list item*/
                                            <a href="javascript:void(0);" className="list-group-item">
                                                <div className="media">
                                                    <div className="pull-left p-r-10">
                                                        <em className="fa fa-bell-o noti-success"></em>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Updates</h5>
                                                        <p className="m-0">
                                                            <small>There are <span className="text-primary">2</span> new
                                                                updates available
                                                            </small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                        </li>

                                        <li>
                                            <a href="javascript:void(0);" className=" text-right">
                                                <small><b>See all notifications</b></small>
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="hidden-xs">
                                    <a href="#" className="right-bar-toggle waves-effect waves-light"><i
                                            className="md md-settings"></i></a>
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