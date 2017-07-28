import { SET_CURRENT_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions';
import { todos } from '../components/todos';

const todoState = {
    todos: todos,
    todoKeys: [],
    currentTodo:{
        text:'',
        todoState: 'incomplete',
        id: 0,
    }
};

const todoReducer = (state = todoState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return {...state, todos: state.todos.map(itm =>{
                    return itm;
                }).concat({ text: action.payload.todo, id: state.todos.length, todoState: 'incomplete'})
            };
        case COMPLETE_TODO:
            return {...state, todos: state.todos.map(todo =>{
                if(todo.id === action.payload.todo){
                    todo.todoState = 'complete';
                }
                return todo;
            })};
        default:
            return state;
    }
};
 export default todoReducer
