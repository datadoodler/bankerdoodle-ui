import React, { Component, PropTypes } from 'react';
import PageTitleBox from '../page-title-box'

class WriteReport extends Component {
    constructor() {
        super(...arguments)

    }

    render() {
        return ( < div >
              <PageTitleBox pageTitle="Write a Report" /> < /div>
        )
    }
}

export default WriteReport;
