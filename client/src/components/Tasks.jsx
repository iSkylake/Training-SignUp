import React from 'react';

const Tasks = props => {

	const handleBack = (e) => {
		e.preventDefault();
		props.onHandleBack('showTask', 'showInputForm');
	}

	const handleContinue = (e) => {
		e.preventDefault();
	}

	return (
		<div className="tasks">
			<div>TASKS</div>
			<button onClick={handleBack}>Back</button>
			<button onClick={handleContinue}>Continue</button>
		</div>
	);

}

export default Tasks;