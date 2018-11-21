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
		currentView: 1,
		login: '',
		firstName: '',
		lastName: '',
		tasks: {},
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
		this.setState({[eTargetName]: eTargetValue});
	}

	handleTask = (taskID, taskName) => {
		const tasks = this.state.tasks;
		tasks[taskName] ? (tasks[taskName] = null) : tasks[taskName] = taskID;
		this.setState({tasks});
	}

	handleSchedule = (shift, day) => {
		shift = shift.toLowerCase();
		let schedule = this.state.schedule;
		schedule[day][shift] = !this.state.schedule[day][shift];
		this.setState({schedule});
	}

	handleView = (view) => {
		let {currentView} = this.state;
		currentView += view
		this.setState({
			currentView
		});
	}

	showView = () => {
		const {currentView, schedule, firstName, lastName, login, tasks} = this.state;
		const info = {firstName, lastName, login};
		switch(currentView){
			case 1: 
				return <InputForm info={info} onHandleInput={this.handleInput} onHandleView={this.handleView} />;
			case 2: 
				return <Tasks activeTasks={tasks} onHandleView={this.handleView} onHandleTask={this.handleTask}/>;
			case 3:
				return <Schedule schedules={schedule} onHandleView={this.handleView} onHandleSchedule={this.handleSchedule}/>;
			default:
				return
		}
	}

	render() {
		return (
			<div className="App">
				<nav className="header">
					<h1 className="app-name">Learning</h1>
				</nav>
				{this.showView()}
			</div>
		);
	}
}

export default App;
