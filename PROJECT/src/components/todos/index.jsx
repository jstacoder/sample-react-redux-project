import React from 'react';
import { Row, Col, PageHeader } from 'react-bootstrap';
import TodoList from './todo-list';
import TodoForm from './todo-form';

const TodoPage = (props) =>{
    const todos = [
	{ todoState: 'incomplete', todo: 'testing' },
	{ todoState: 'incomplete', todo: 'another todo' },
	{ todoState: 'incomplete', todo: 'not complete' },
	{ todoState: 'complete', todo:'complete todo' },
	{ todoState: 'deleted', todo: 'deleted exmple' },
    ];
    const changeTodo = (data) =>{
    
    }
    return (
	<Row>	
	    <Col xs={12}>
		    <PageHeader>todos</PageHeader>
	    </Col>
	    <Col xs={12} sm={6} md={4} lg={3}>
		    <TodoList todos={todos} />
	    </Col>
	    <Col xs={12}>
		<TodoForm todos={todos} changeTodo={changeTodo} />
	    </Col>
	</Row>
    );
};

export default TodoPage
