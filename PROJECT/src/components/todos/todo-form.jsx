import React, { Component } from 'react';
import { Form, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class TodoForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			focused: false
		};
	}
	setFocus = () =>{ 		
		this.setState(
			{focused: true}
		);
	}
	setBlur = () =>{
		this.setState(
			{focused: false}
		);
	}
	onSubmit = (e) =>{
		e.preventDefault();  
		this.props.actions.addTodo({todo: this.props.todos.currentTodo, index: this.props.todos.todos.length});	
		this.props.actions.setCurrentTodo({text: '', todoState: ''});
	}
	render(){    
		const inputStyle = {
			borderLeft: '0px',
			borderRight: '0px',
			borderRadius: '0px',
			borderTop: '0px',
			borderBottom: '.3px solid #eee',
			boxShadow:'none',
			transition: 'initial',
		};
		const focus = this.state.focused ? 'IN FOCUS' : 'NOT FOCUSED';
		return (
				<Form onSubmit={this.onSubmit} horizontal>
				<FormGroup> 
				  <p>{focus}</p>
					<ControlLabel>todo</ControlLabel>
					<FormControl
						onFocus={this.setFocus}
						onBlur={this.setBlur}
						style={inputStyle}
						value={this.props.todos.currentTodo.text} 
						onChange={this.props.changeTodo} 
						type="text" />
				</FormGroup>
					</Form>
		);
	}
}
export default TodoForm
