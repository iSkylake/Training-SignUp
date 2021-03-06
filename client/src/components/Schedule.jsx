import React from 'react';

import {scheduleList, shiftList} from '../appData.js';

const Schedule = props => {

	const handleView = (view) => {
		props.onHandleView(view);
	}

	const handleClick = (shiftName, scheduleDay) => {
		props.onHandleSchedule(shiftName, scheduleDay);
	}

	const schedules = scheduleList.map((schedule) => {

		const shifts = shiftList.map((shift) => {
			return(
				<div key={shift.id} className={props.schedules[schedule.day][shift.name.toLowerCase()] ? "shift shift-selected" : "shift"} onClick={() => handleClick(shift.name, schedule.day)}>
					<p className="shift-time">{shift.time}</p>
					<p className="shift-name">{shift.name}</p>
				</div>
			);
		});

		return(
			<div key={schedule.id} className="schedule">
				<h2 className="task-name schedule-name">{schedule.day}</h2>
				{shifts}
			</div>
		);
	});

	return (
		<div className="schedule-container view-container">
			<h1 className="view-header">SELECT SCHEDULE</h1>
			<div className="schedule-wrapper">
			{schedules}
			</div>
			<div className="task-button-wrapper">
				<button className="button-back" onClick={() => handleView(-1)}>Back</button>
				<button className="button-next" onClick={() => handleView(1)}>Next</button>				
			</div>
		</div>
	);

}

export default Schedule;