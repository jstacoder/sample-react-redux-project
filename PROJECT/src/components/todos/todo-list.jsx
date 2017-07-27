import React from 'react';
import TodoItem from './todo-item';


const TodoList = (props) =>{
    return (
        <ul className="todo-list list-unstyled">
	    {props.todos.map( itm =>{
		return (
		    <TodoItem todoState={itm.todoState} todo={itm.todo} />
		);
	    })}
        </ul>
    );
};

export default TodoList
