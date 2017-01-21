import React from 'react';
import SearchForm from './searchForm';
import Mission from './mission';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';


class PageContainer extends React.Component {
	constructor (props) {
		super(props);
	}

	getApiData () {
		this.props.dispatch(actions.getApiData());
	}

	onSearchSubmit (searchTerm) {

		let name = searchTerm.trim().split(" ").join("+"); 
		console.log(name); 
		this.props.dispatch(actions.getMemberDisplay(name));
		if (this.props.member.length > 0) {
			console.log('member from landing-page', this.props.member)
			hashHistory.push('/member'); 
		}
	}

	onInputChange (term) {
		console.log(term);
	}

	routeToAbout () {
		hashHistory.push('/about');
	}

	render () {
		return (
			<div className="landing-page">
				<img className="logo" src="assets/kapitol.png" />
				<SearchForm onSubmit={this.onSearchSubmit.bind(this)}/>
				<img onClick={this.routeToAbout.bind(this)}className="scroll-btn" src="assets/scroll-btn.png"/>
			</div>
		)
	}
}
//
const mapStateToProps = (state) => ({
	member: state.member
})

export default connect(mapStateToProps)(PageContainer);
//<button onClick={this.getApiData.bind(this)}>Get data</button>
