import React, { Component } from 'react';
// import {RouterBrowser as Router, Switch, Link} from 'react-router-dom';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import InputForm from './components/InputForm.jsx';
import Tasks from './components/Tasks.jsx';
import Schedule from './components/Schedule.jsx';

library.add(fas);


class App extends Component {
	state = {
		showInputForm: true,
		showTask: false,
		showSchedule: false,
		showConfirmation: false,
		firstName: '',
		lastName: '',
		login: '',
		pit: false,
		tdr: false,
		problemSolve: false,
		waterSpider: false
	}

	handleInput = (eTargetName, eTargetValue) => {
		this.setState({[eTargetName]: [eTargetValue]});
	}

	handleTask = (taskName) => {
		const taskBool = !this.state[taskName];
		this.setState({[taskName]: taskBool});
	}

	handleView = (currentView, nextView) => {
		this.setState({
			[currentView]: false,
			[nextView]: true
		});
	}

	showView = () => {
		const {showInputForm, showTask, showSchedule} = this.state;
		const {pit, tdr, problemSolve, waterSpider} = this.state;
		const taskProps = {pit, tdr, problemSolve, waterSpider}
		if(showInputForm) return <InputForm onHandleInput={this.handleInput} onHandleView={this.handleView} />;
		if(showTask) return <Tasks tasks={taskProps} onHandleBack={this.handleView} onHandleNext={this.handleView} onHandleTask={this.handleTask}/>;
		if(showSchedule) return <Schedule onHandleBack={this.handleView} onHandleNext={this.handleView}/>
	}

	render() {
		return (
			<div className="App">
				<nav className="header">
					<h1 className="app-name">Training</h1>
				</nav>
				{this.showView()}
			</div>
		);
	}
}

export default App;
