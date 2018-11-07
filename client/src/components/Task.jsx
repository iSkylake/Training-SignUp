import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Task extends Component{
	state = {
		select: false
	}

	handleClick = () => {
		const select = !this.state.select
		this.setState({select});
		this.props.onHandleTask();
	}

	render(){
		const {task} = this.props;

		return(
			<div className={`task ${this.state.select ? "task-selected" : ""}`} onClick={() => this.handleClick(task.value)}>
				<div className="task-icon-wrapper">
					<FontAwesomeIcon className="task-icon" icon={task.icon} />
				</div>
				<h2 className="task-name">{task.name}</h2>
				<p className="task-description">{task.description}</p>
				<FontAwesomeIcon className={`task-check ${this.state.select ? "task-check-selected" : ""}`} icon="check"/>
			</div>
		);

	}

};

export default Task;