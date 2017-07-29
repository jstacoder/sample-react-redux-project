import React from 'react';
import { Form, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TodoForm = (props) =>{
    const onSubmit = (e) =>{
		e.preventDefault();  
		props.actions.addTodo({todo: props.todos.currentTodo, index: props.todos.todos.length});
		props.actions.setCurrentTodo({text: '', todoState: ''});
    };
	return (
	    <Form onSubmit={onSubmit} horizontal>
			<FormGroup> 
				<ControlLabel>todo</ControlLabel>
				<FormControl
					value={props.todos.currentTodo.text} 
					onChange={props.changeTodo} 
					type="text" />
			</FormGroup>
        </Form>
	);
};
 export default TodoForm
