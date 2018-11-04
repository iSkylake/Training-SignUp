import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {taskList} from '../fakeDB.js';

const Tasks = props => {

	const handleBack = () => {
		props.onHandleBack('showTask', 'showInputForm');
	}

	const handleNext = () => {
		props.onHandleNext('showTask', 'showSchedule');
	}

	const handleClick = (taskName) => {
		props.onHandleTask(taskName);
	}

	const tasks = taskList.map((task) => {
			return(
				<div key={task.id} className={props.tasks[task.value] ? "task task-selected" : "task"} onClick={() => handleClick(task.value)}>
					<div className="task-icon-wrapper">
						<FontAwesomeIcon className="task-icon" icon={task.icon} />
					</div>
					<h2 className="task-name">{task.name}</h2>
					<p className="task-description">{task.description}</p>
					<FontAwesomeIcon className={props.tasks[task.value] ? "task-check task-check-selected" : "task-check"} icon="check"/>
				</div>
			)
		}
	)

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