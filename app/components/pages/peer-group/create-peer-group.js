import React, { Component, PropTypes } from 'react';
import PageTitleBox from '../page-title-box'

class CreatePeerGroup extends Component {
    constructor() {
        super(...arguments)

    }

    render() {
        return ( < div >
             <PageTitleBox pageTitle="Create a Peer Group" /> < /div>
        )
    }
}

export default CreatePeerGroup;
