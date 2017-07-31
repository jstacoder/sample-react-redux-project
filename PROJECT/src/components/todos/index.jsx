import React from 'react';
import { Tab, Tabs, Row, Col, PageHeader } from 'react-bootstrap';
import TodoList from './todo-list';
import TodoForm from './todo-form';

const TodoPage = (props) =>{
    const todoStates = [
	'all','complete', 'incomplete','deleted',
    ];
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
	    <Col xs={12} sm={6} smPush={3}>	    		
	    		<Row>		
                    <Tabs defaultActiveKey="all" id="tabs">
				<Col xs={12}>
					<Row>				
						<Col xs={12}>
							<TodoForm 
								todos={props.todos} 
								changeTodo={changeTodo}
								actions={props.actions} {...props} />
						</Col>
					</Row>
				</Col>
	    			{todoStates.map(state =>(
					<Tab key={state} eventKey={state} title={state}>
						<Col xs={12}> 
							<Row> 
								<Col xs={12}>
									<TodoList 
										todos={props.todos.todos} 
										actions={props.actions} 
										filter={state}	/>
								</Col>
							</Row>
						</Col>
					</Tab>					
				))}
		    	</Tabs>
	    		    </Row>
	    </Col>
	</Row>
    );
};

export default TodoPage
