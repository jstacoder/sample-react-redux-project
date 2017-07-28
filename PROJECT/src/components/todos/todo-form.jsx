import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TodoForm = (props) =>{
    const onSubmit = (e) =>{
        e.preventDefault();  
    };
	return (
	    <Form onSubmit={onSubmit} horizontal>
		<FormGroup>
			<ControlLabel>todo</ControlLabel>
			<FormControl value={props.todos.currentTodo.text} onChange={props.changeTodo} type="text" />
		</FormGroup>
            </Form>
	);
};
 export default TodoForm
