import React, { Component, PropTypes } from 'react';
import Header from './header';

class MainContainer extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            cards: [],
        };
    }

    render() {
        return ( 
          

    <div id="wrapper">

        <div className="topbar">
            <div className="topbar-left">
                ...toppar-left LOGO
            </div>
        </div>
       
        <div className="left side-menu">
            <div className="sidebar-inner slimscrollleft">
                <div id="sidebar-menu">
                    sidebar menu
                </div>
            </div>
        </div>

        <div className="content-page">

            <div className="content">
                ....content
            </div>


            <footer className="footer">
                2016 © Minton.
            </footer>
        </div>



        <div className="side-bar right-bar nicescroll">
            ... right side-bar
        </div>


    </div>

            )
        }
    }

    export default MainContainer;
