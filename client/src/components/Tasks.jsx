import React from 'react';

import {taskList} from '../appData.js';
import Task from './Task.jsx';

const Tasks = props => {

	const handleView = (view) => {
		props.onHandleView(view);
	}

	const tasks = taskList.map((task) => 
		<Task key={task.id} 
			activeTasks={props.activeTasks}
			task={task} 
			onHandleTask={(taskID, taskName) => props.onHandleTask(taskID, taskName)} 
		/>
	);

	return (
		<div className="task-container view-container">
			<h1 className="view-header">SELECT TASKS</h1>
			<div className="task-wrapper">
				{tasks}
			</div>
			<div className="task-button-wrapper">
				<button className="button-back" onClick={() => handleView(-1)}>Back</button>
				<button className="button-next" onClick={() => handleView(1)}>Next</button>				
			</div>
		</div>
	);

}

export default Tasks;