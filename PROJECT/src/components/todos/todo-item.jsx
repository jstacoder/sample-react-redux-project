import React from 'react';
import Icon from '../widgets/icon';

const TodoItem = (props) =>{
    const todoState = props.todo.todoState;
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
            textDecoration: 'line-through',
            color: 'red',
            fontSize:'55%'
		},
	};
	const iconNameMap = {
		incomplete: 'square-o',
        complete: 'check-square-o',
        deleted: 'close',
	};
	const iconClickMap = {
		incomplete: ()=>{},
		complete: (idx)=>{
			console.log('deleting: ', idx);
			props.actions.deleteTodo(idx);
        },
        deleted: idx =>{
            props.actions.undeleteTodo(idx);
        }

    };
	const iconClick = iconClickMap[props.todo.todoState];
    const endIcons = {
        incomplete: '',
        complete: ( <Icon onClick={e => {iconClick(todoIndex)}} name='trash-o' />),
        deleted:  ( <Icon onClick={e => {iconClick(todoIndex)}} name='refresh' />),
    };
	const textStyle = { marginLeft:'15px' };
	const itemStyle = { cursor: 'pointer',  ...todoStyles[props.todo.todoState] };
	const completeTodo = props.actions.completeTodo;
	const todoIndex = props.todo.id;
	const iconName = iconNameMap[props.todo.todoState];
    const endIcon =  endIcons[todoState]; //props.todo.todoState == 'incomplete' ? '' : ( <Icon onClick={e => {iconClick(todoIndex)}} name='trash-o' /> );
	const hrStyle = { marginTop: '10px'};
	const listItemClick = e =>{
		const target = e.target;
		console.log(target);
        if(!target.classList.contains('fa-trash-o') && !target.classList.contains('fa-refresh')){
            console.log('clicked a ', todoState);
            if(todoState == 'incomplete'){
    			completeTodo(todoIndex);
            }else{
                props.actions.uncompleteTodo(todoIndex);
            }
		};
	};
    return (
	<li style={listItemStyle} onClick={listItemClick}>
		<div className={className} style={itemStyle}>
			<p>
				<Icon name={iconName} />
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
