import React from 'react';

const Schedule = props => {

	const handleBack = () => {
		props.onHandleBack('showSchedule', 'showTask');
	}

	const handleNext = () => {
		props.onHandleNext('showSchedule', 'showConfirmation');
	}

	return (
		<div className="schedule-container view-container">
			<h1 className="view-header">SELECT SCHEDULE</h1>
			<div className="task-button-wrapper">
				<button className="button-back" onClick={handleBack}>Back</button>
				<button className="button-next" onClick={handleNext}>Next</button>				
			</div>
		</div>
	);

}

export default Schedule;