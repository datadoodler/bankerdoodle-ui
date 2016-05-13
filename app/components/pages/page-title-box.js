import React, { Component, PropTypes } from 'react';


class PageTitleBox extends Component {
    constructor() {
        super(...arguments)

    }

    render() {
        return ( < div className="bd-page-title-box" >

             <h4 class="bd-page-title">{this.props.pageTitle}</h4> < /div>
        )
    }
}

export default PageTitleBox;
