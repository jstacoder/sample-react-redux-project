import React from 'react';
import { Row, Col, PageHeader } from 'react-bootstrap';
import TodoList from './todo-list';
import TodoForm from './todo-form';

const TodoPage = (props) =>{
    const formTodos = {
        currentTodo: {
            text: '',
            todoState: 'incomplete',
        }
	};
	const changeTodo = (e) =>{
		props.actions.setCurrentTodo({todoState:'incomplete', text: e.target.value});
	}
    return (
	<Row>	
	    <Col xs={12}> 
		    <PageHeader>todos</PageHeader>
	    </Col>
		<Col xs={12}>
			<Row>				
				<Col xs={12} sm={6} smPush={3} >
					<TodoForm 
						todos={props.todos} 
						changeTodo={changeTodo}
						actions={props.actions} {...props} />
				</Col>
			</Row>
		</Col>
		<Col xs={12}> 
			<Row> 
				<Col xs={12} sm={6} smPush={3}>
					<TodoList 
						todos={props.todos.todos} 
						actions={props.actions} />
				</Col>
			</Row>
		</Col>
	</Row>
    );
};

export default TodoPage
