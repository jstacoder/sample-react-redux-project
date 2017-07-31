import {
    SET_CURRENT_TODO, ADD_TODO, DELETE_TODO,
    COMPLETE_TODO, UNCOMPLETE_TODO, UNDELETE_TODO
} from '../actions';
import { generateId } from '../store/utils';
import { todos } from '../components/todos';

const todoState = {
    todos: [],
    currentTodo:{
        text:'',
        todoState: 'incomplete',
        id: null,
    }
};

const changeTodoStatus = (state, action, status) =>{
    return state.todos.map( todo =>{
        if(todo.id === action.payload.todo){
            return {...todo, todoState: status};
        }
        return todo;
    });
};

const todoReducer = (state = todoState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return { ...state, todos: [ ...state.todos, {...state.currentTodo, id: generateId() } ] };
        case DELETE_TODO:
            //return { ...state, todos: state.todos.filter(todo => (
	    	//    todo.id != action.payload.index
    	    //))};
            return {...state, todos: changeTodoStatus(state, action, 'deleted') };
        case COMPLETE_TODO:
            return {...state, todos: changeTodoStatus(state, action, 'complete') };
        case UNCOMPLETE_TODO:
            return {...state, todos: changeTodoStatus(state, action, 'incomplete') };
        case UNDELETE_TODO: 
            return {...state, todos: changeTodoStatus(state, action, 'complete') };
        case SET_CURRENT_TODO:
            return {...state, currentTodo: action.payload.todo};
        default:
            return state;
    }
};
export default todoReducer
