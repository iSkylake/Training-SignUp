import React from 'react';

import {taskList} from '../fakeDB.js';
import Task from './Task.jsx';

const Tasks = props => {

	const handleBack = (currentView, nextView) => {
		props.onHandleBack(currentView, nextView);
	}

	const handleNext = (currentView, nextView) => {
		props.onHandleNext(currentView, nextView);
	}

	const handleTask = () => {
		props.onHandleTask();
	}

	const tasks = taskList.map((task) => 
		<Task key={task.id} 
			task={task} 
			onHandleTask={handleTask} 
			onHandleNext={handleNext} 
			onHandleBack={handleBack}
		/>
	);

	return (
		<div className="task-container view-container">
			<h1 className="view-header">SELECT TASKS</h1>
			<div className="task-wrapper">
			{tasks}
			</div>
			<div className="task-button-wrapper">
				<button className="button-back" onClick={handleBack}>Back</button>
				<button className="button-next" onClick={handleNext}>Next</button>				
			</div>
		</div>
	);

}

export default Tasks;