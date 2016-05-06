import React, { Component, PropTypes } from 'react';


class LeftSideMenu extends Component {
  constructor() {
    super(...arguments)

  }

  render() {
    return ( 
 /*  ========== Left Sidebar Start ========== */
            <div className="left side-menu">
                <div className="sidebar-inner slimscrollleft">

                    <div id="sidebar-menu">
                        <ul>
                            <li className="text-muted menu-title">Main</li>

                            <li>
                                <a href="index.html" className="waves-effect waves-primary subdrop"><i
                                        className="md md-dashboard"></i><span> Dashboard </span></a>
                            </li>


                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i className="md md-palette"></i> <span> UI Kit </span>
                                </a>
                                <ul className="list-unstyled">
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-panels.html">Panels</a></li>
                                    <li><a href="ui-portlets.html">Portlets</a></li>
                                    <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                                    <li><a href="ui-tabs.html">Tabs & Accordions</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                                    <li><a href="ui-notification.html">Notification</a></li>
                                    <li><a href="ui-bootstrap.html">BS Elements</a></li>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i
                                        className="md md-invert-colors-on"></i><span> Components </span> <span
                                        className="label label-default pull-right">5</span> </a>
                                <ul className="list-unstyled">
                                    <li><a href="components-grid.html">Grid</a></li>
                                    <li><a href="components-widgets.html">Widgets</a></li>
                                    <li><a href="components-nestable-list.html">Nesteble</a></li>
                                    <li><a href="components-range-sliders.html">Range Sliders </a></li>
                                    <li><a href="components-sweet-alert.html">Sweet Alerts </a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i className="md md-redeem"></i>
                                    <span> Icons </span> </a>
                                <ul className="list-unstyled">
                                    <li><a href="icons-glyphicons.html">Glyphicons</a></li>
                                    <li><a href="icons-materialdesign.html">Material Design</a></li>
                                    <li><a href="icons-themifyicon.html">Themify Icons</a></li>
                                    <li><a href="icons-ionicons.html">Ion Icons</a></li>
                                    <li><a href="icons-fontawesome.html">Font awesome</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i className="md md-now-widgets"></i><span> Forms </span></a>
                                <ul className="list-unstyled">
                                    <li><a href="form-elements.html">General Elements</a></li>
                                    <li><a href="form-advanced.html">Advanced Form</a></li>
                                    <li><a href="form-validation.html">Form Validation</a></li>
                                    <li><a href="form-wizard.html">Form Wizard</a></li>
                                    <li><a href="form-wysiwig.html">WYSIWYG Editor</a></li>
                                    <li><a href="form-summernote.html">Summernote</a></li>
                                    <li><a href="form-uploads.html">Multiple File Upload</a></li>
                                    <li><a href="form-xeditable.html">X-editable</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i className="md md-view-list"></i><span> Tables </span></a>
                                <ul className="list-unstyled">
                                    <li><a href="tables-basic.html">Basic Tables</a></li>
                                    <li><a href="tables-datatable.html">Data Table</a></li>
                                    <li><a href="tables-editable.html">Editable Table</a></li>
                                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i
                                        className="md md-poll"></i><span> Charts </span> </a>
                                <ul className="list-unstyled">
                                    <li><a href="chart-flot.html">Flot Chart</a></li>
                                    <li><a href="chart-morris.html">Morris Chart</a></li>
                                    <li><a href="chart-chartist.html">Chartist chart</a></li>
                                    <li><a href="chart-nvd3.html">Nvd3 charts</a></li>
                                    <li><a href="chart-peity.html">Peity Charts</a></li>
                                    <li><a href="chart-sparkline.html">Sparkline Charts</a></li>
                                    <li><a href="chart-other.html">Other Chart</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i
                                        className="md md-place"></i><span> Maps </span> <span
                                        className="label label-primary pull-right">2</span></a>
                                <ul className="list-unstyled">
                                    <li><a href="map-google.html"> Google Map</a></li>
                                    <li><a href="map-vector.html"> Vector Map</a></li>
                                </ul>
                            </li>

                            <li className="text-muted menu-title">More</li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i
                                        className="md md-mail"></i><span> Mail </span></a>
                                <ul className="list-unstyled">
                                    <li><a href="mail-inbox.html">Inbox</a></li>
                                    <li><a href="mail-compose.html">Compose Mail</a></li>
                                    <li><a href="mail-read.html">View Mail</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i
                                        className="md md-pages"></i><span> Pages </span></a>
                                <ul className="list-unstyled">
                                    <li><a href="pages-blank.html">Blank Page</a></li>
                                    <li><a href="pages-login.html">Login</a></li>
                                    <li><a href="pages-register.html">Register</a></li>
                                    <li><a href="pages-recoverpw.html">Recover Password</a></li>
                                    <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                                    <li><a href="pages-404.html">404 Error</a></li>
                                    <li><a href="pages-500.html">500 Error</a></li>
                                </ul>
                            </li>

                            <li className="has_sub">
                                <a href="#" className="waves-effect waves-primary"><i
                                        className="md md-place"></i><span> Extras </span></a>
                                <ul className="list-unstyled">
                                    <li><a href="extras-timeline.html">Timeline</a></li>
                                    <li><a href="extras-invoice.html">Invoice</a></li>
                                    <li><a href="extras-calendar.html"> Calendar</a></li>
                                    <li><a href="extras-email-template.html">Email template</a></li>
                                    <li><a href="extras-maintenance.html">Maintenance</a></li>
                                    <li><a href="extras-coming-soon.html">Coming-soon</a></li>
                                    <li><a href="extras-gallery.html"> Gallery</a></li>
                                </ul>
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