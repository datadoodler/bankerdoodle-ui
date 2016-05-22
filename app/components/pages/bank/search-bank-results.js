import React, { Component, PropTypes } from 'react';

class SearchBankResults extends Component {
    constructor() {
        super(...arguments)
        this.handleSearch=this.handleSearch.bind(this)
    }
handleSearch() {
	    window.location = '#/view-bank';
	}
    render() {
        return ( 
				<div class="card-box">
					
			
					
							<p class="text-muted m-b-30 font-13">
							Click on the bank to select.

							</p>
					
						
						
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
        )
    }
}

export default SearchBankResults;
