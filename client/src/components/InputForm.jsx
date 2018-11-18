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

	const inputFilled = (inputField) => {
		if(props.info[inputField].length > 0){
			return 'input-field-filled';
		}
	}

	return (
		<form className="input-form">
			<h1 className="view-header">Sign Up</h1>
			<div className="input-wrap">
				<input className="input-field" onChange={handleInputChange} value={props.info.login} name="login" type="text" placeholder=""/>		
				<label className={`input-label ${inputFilled("login")}`}>Login</label>		
			</div>
			<div className="input-wrap">
				<input className="input-field" onChange={handleInputChange} value={props.info.firstName} name="firstName" type="text" placeholder=""/>
				<label className={`input-label ${inputFilled("firstName")}`}>First Name</label>
			</div>
			<div className="input-wrap">
				<input className="input-field" onChange={handleInputChange} value={props.info.lastName} name="lastName" type="text" placeholder=""/>
				<label className={`input-label ${inputFilled("lastName")}`}>Last Name</label>
			</div>
			<button onClick={handleContinue}>Next</button>
		</form>
	);
}

export default InputForm;