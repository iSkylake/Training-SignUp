import React, { Component } from 'react';
// import {RouterBrowser as Router, Switch, Link} from 'react-router-dom';
import './App.css';

import InputForm from './components/InputForm.jsx';
import Tasks from './components/Tasks.jsx';

class App extends Component {
	state = {
		showInputForm: true,
		showTask: false,
		showSchedule: false,
		showConfirmation: false,
		firstName: '',
		lastName: '',
		login: ''
	}

	handleInput = (eTargetName, eTargetValue) => {
		this.setState({[eTargetName]: [eTargetValue]});
	}

	handleView = (currentView, nextView) => {
		this.setState({
			[currentView]: false,
			[nextView]: true
		});
	}

	showView = () => {
		const {showInputForm, showTask} = this.state;

		if(showInputForm) return <InputForm onHandleInput={this.handleInput} onHandleView={this.handleView} />;
		if(showTask) return <Tasks onHandleBack={this.handleView} />;
	}

	render() {
		return (
			<div className="App">
				{this.showView()}
			</div>
		);
	}
}

export default App;
