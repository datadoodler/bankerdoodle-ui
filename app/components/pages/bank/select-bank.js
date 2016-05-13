import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PageTitleBox from '../page-title-box'
import SearchBankCriteria from './search-bank-criteria'

class Bank extends Component {
    constructor() {
        super(...arguments)
		this.handleSearch=this.handleSearch.bind(this)
    }
	handleSearch() {
	    window.location = '#/view-bank';
	}
    render() {
        return ( 
        < div class="container">
            <PageTitleBox pageTitle="Select a Bank"></PageTitleBox> 
			<div class="card-box">
<SearchBankCriteria/>
	             <hr/>
	             <table class="table table table-hover m-0">
                                        <thead>
                                            <tr>
                                                <th>Cert</th>
                                                <th>Bank Name</th>
                                                <th>City</th>
                                                <th>State</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr onClick={this.handleSearch}>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
    		</div>
		</div>
        )
    }
}

export default Bank;
