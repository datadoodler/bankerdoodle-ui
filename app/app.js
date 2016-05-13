import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import MainContainer from './components/main-container';

import Welcome from './components/pages/welcome'
import SelectBank from './components/pages/bank/select-bank'
import ViewBank from './components/pages/bank/view-bank'

import CreatePeerGroup from './components/pages/peer-group/create-peer-group'
import WriteReport from './components/pages/report/write-report'

render(
	<Router history={hashHistory}>
		<Route path="/" component={MainContainer}>
			<IndexRoute component={Welcome}></IndexRoute>
			<Route path="select-bank" component={SelectBank}></Route>
			<Route path="view-bank" component={ViewBank}></Route>
			<Route path="create-peer-group" component={CreatePeerGroup}></Route>
			<Route path="write-report" component={WriteReport}></Route>
		</Route>
	</Router>, 
	document.getElementById('root'));
