import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PageTitleBox from '../page-title-box'
import SearchBankCriteria from './search-bank-criteria'
import SearchBankResults from './search-bank-results'

class Bank extends Component {
    constructor() {
        super(...arguments)
		
    }
    render() {
        return ( 
        < div class="container">
            <PageTitleBox pageTitle="Select a Bank"></PageTitleBox> 
			<div class="card-box">
<SearchBankCriteria/>
<SearchBankResults/>

    		</div>
		</div>
        )
    }
}

export default Bank;
