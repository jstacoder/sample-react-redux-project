import React from 'react';
import TodoItem from './todo-item';


const TodoList = (props) =>{
	const actions = props.actions;
	const filter = props.filter;
    return (
        <ul className="todo-list list-unstyled">
	    {props.todos.map( (itm, idx) =>{
		    	if(itm.todoState == filter || filter == 'all'){
				return (
				    <TodoItem todo={itm} todoIndex={idx} actions={actions} key={idx} />
				);
			}
	    })}
        </ul>
    );
};

export default TodoList
