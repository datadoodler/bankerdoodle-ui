import React, { Component, PropTypes } from 'react';

class SearchBankCriteria extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return ( 
				<div class="panel panel-border panel-primary">
					
					<div class="panel-heading">
						<h4 class="panel-title">Search Criteria</h4>
					</div>	
					<div class="row">
						<div class="col-sm-5">
							<p class="text-muted m-b-30 font-13">
							Enter a Cert id or part of a bank name. Then click on the desired bank below.
							</p>
						</div>
						<div class="col-sm-2">
							<input type="text" id="inputCert" class="form-control" placeholder="Cert"></input>
						</div>
						<div class="col-sm-3">
							<input type="text" id="inputBankName" class="form-control" placeholder="Bank Name"></input>
						</div>
					</div>
	            </div>
        )
    }
}

export default SearchBankCriteria;
