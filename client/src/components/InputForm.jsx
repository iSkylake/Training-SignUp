import React from 'react';

const InputForm = props => {

	const handleInputChange = (e) => {
		props.onHandleInput(e.target.name, e.target.value);
	}

	const handleContinue = (e) => {
		e.preventDefault();
		const currentView = 'showInputForm';
		const nextView = 'showTask';
		props.onHandleView(currentView, nextView);
	}

	return (
		<form className="input-form">
			<h1 className="view-header">Sign Up</h1>
			<input onChange={handleInputChange} value={props.info.login} name="login" type="text" placeholder="Login"/>
			<input onChange={handleInputChange} value={props.info.firstName} name="firstName" type="text" placeholder="First Name"/>
			<input onChange={handleInputChange} value={props.info.lastName} name="lastName" type="text" placeholder="Last Name"/>
			<button onClick={handleContinue}>Next</button>
		</form>
	);
}

export default InputForm;