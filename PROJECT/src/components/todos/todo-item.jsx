import React from 'react';
import Icon from '../widgets/icon';

const TodoItem = (props) =>{
    const className = `todo-${props.todoState}`;
    const listItemStyle = { borderBottom: '1px solid grey', corsor: 'pointer' };
    const todoStyles = {
	complete:{
		textDecoration: 'line-through'
	},
	incomplete:{
		fontWeight: 'heavy'
	},
	deleted:{
		textDecoration: 'line-through'
	},
    };
    const itemStyle = todoStyles[props.todoState];
    return (
	<li style={listItemStyle}>
		<div className={className} style={itemStyle}>
			<p><Icon name='check' /> {props.todo}</p>
	        </div>
	</li>
    );
};
export default TodoItem
