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
		showInputForm: false,
		showTask: false,
		showSchedule: true,
		showConfirmation: false,
		firstName: '',
		lastName: '',
		login: '',
		pit: false,
		tdr: false,
		problemSolve: false,
		waterSpider: false,
		schedule: {
			Sunday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			},
			Monday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			},
			Tuesday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			},
			Wednesday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			},
			Thursday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			},
			Friday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			},
			Saturday: {
				morning: false,
				day: false,
				twi: false,
				nite: false
			}
		}
	}

	handleInput = (eTargetName, eTargetValue) => {
		this.setState({[eTargetName]: [eTargetValue]});
	}

	handleTask = (taskName) => {
		const taskBool = !this.state[taskName];
		this.setState({[taskName]: taskBool});
	}

	handleSchedule = (shift, day) => {
		shift = shift.toLowerCase();
		let schedule = {...this.state.schedule}
		schedule[day][shift] = !this.state.schedule[day][shift];
		this.setState({schedule});
	}

	handleView = (currentView, nextView) => {
		this.setState({
			[currentView]: false,
			[nextView]: true
		});
	}

	showView = () => {
		const {showInputForm, showTask, showSchedule, schedule} = this.state;
		const {pit, tdr, problemSolve, waterSpider} = this.state;
		const taskProps = {pit, tdr, problemSolve, waterSpider}
		if(showInputForm) return <InputForm onHandleInput={this.handleInput} onHandleView={this.handleView} />;
		if(showTask) return <Tasks tasks={taskProps} onHandleBack={this.handleView} onHandleNext={this.handleView} onHandleTask={this.handleTask}/>;
		if(showSchedule) return <Schedule schedules={schedule} onHandleBack={this.handleView} onHandleNext={this.handleView} onHandleSchedule={this.handleSchedule}/>
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
