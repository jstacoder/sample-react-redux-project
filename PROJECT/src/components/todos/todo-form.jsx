import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TodoForm = (props) =>{
	return (
	    <Form onSubmit={onSubmit}>
		<FormGroup horizontal>
			<ControlLabel>todo</ControlLabel>
			<FormControl value={props.todos.todo.text} onChange={props.changeTodo} type="text" />
		</FormGroup>
            </Form>
	);
};
 export default TodoForm
