import React, { Component, PropTypes } from 'react';
//import Header from './header';
import Footer from './footer';
import LeftSideMenu from './left-side-menu';
import TopBar from './top-bar'

class MainContainer extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            cards: [],
        };
    }

    render() {
        return (


            < div id = "wrapper" >

                < TopBar / >

                < LeftSideMenu / >

                < div className = "content-page" >

                < div className = "content" >
                ....content < /div>

                < Footer / >

                < /div>



                < div className = "side-bar right-bar nicescroll" >
                ...right side - bar < /div>


            < /div>

        )
    }
}

export default MainContainer;
