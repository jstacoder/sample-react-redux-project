import React from 'react';
import Icon from '../widgets/icon';

const TodoItem = (props) =>{
    const className = `todo-${props.todo.todoState}`;
    const listItemStyle = { cursor: 'pointer' };
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
	const iconNameMap = {
		incomplete: 'square-o',
		complete: 'check-square-o',
	};
	const iconClickMap = {
		incomplete: ()=>{},
		complete: (idx)=>{
			console.log('deleting: ', idx);
			props.actions.deleteTodo(idx);
		}

	};
	const textStyle = { marginLeft:'15px' };
	const itemStyle = { cursor: 'pointer',  ...todoStyles[props.todo.todoState] };
	const iconClick = iconClickMap[props.todo.todoState];
	const completeTodo = props.actions.completeTodo;
	const todoIndex = props.todo.id;
	const iconName = iconNameMap[props.todo.todoState]; 
	const endIcon = props.todo.todoState == 'incomplete' ? '' : ( <Icon onClick={e => {iconClick(todoIndex)}} name='trash-o' /> );
	const hrStyle = { marginTop: '10px'};
	const listItemClick = e =>{
		const target = e.currentTarget;		
		console.log(target);
		if(!target.classList.contains('fa-trash-o')){
			completeTodo(todoIndex);		
		};
	};
    return (
	<li style={listItemStyle} onClick={listItemClick}>
		<div className={className} style={itemStyle}>
			<p>
				<Icon 					
					name={iconName} /> 
				<span style={textStyle}> 
					{props.todo.text} 
				</span> 	
				<span className="pull-right">
					{endIcon}
				</span>
			</p>
	    </div>
		<hr style={hrStyle} />
	</li>	
    );
};
export default TodoItem
