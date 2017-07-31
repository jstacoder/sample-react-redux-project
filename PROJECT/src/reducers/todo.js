import { SET_CURRENT_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions';
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

const insertItem = (arr, action, item) =>{
    return [
        ...arr.slice(0, arr.map( (itm, idx) => { if(itm.id == action.payload.index){ return idx;} })[0]),
        action.payload[item],
        ...arr.slice(arr.map( (itm, idx) => { if(itm.id == action.payload.index){ return idx;} })[0])
    ]
};

const removeItem = (arr, action) =>{
    const index = arr.map( (itm, idx) => { if(itm.id == action.payload.index){ return idx;} })[0];
    if(index == undefined || index == null){
        return arr;
    }
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
};

const todoReducer = (state = todoState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return { ...state, todos: [ ...state.todos, {...state.currentTodo, id: generateId() } ] };
        case DELETE_TODO:
	    console.log('deleteing: ', action);
            return { ...state, todos: state.todos.filter(todo => (
		    todo.id != action.payload.index
	    ))};
        case COMPLETE_TODO:
            return {...state, todos: state.todos.map( todo =>{
                if(todo.id === action.payload.todo){
                    return {...todo, todoState:'complete'};
                }
                return todo;
            })};
        case SET_CURRENT_TODO:
            return {...state, currentTodo: action.payload.todo};
        default:
            return state;
    }
};
 export default todoReducer
