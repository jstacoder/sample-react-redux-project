import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { saveState } from '../storage';
import createHistory from 'history/createBrowserHistory';
import ReduxPromise from 'redux-promise-middleware';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export const history = createHistory();

const middlewares = applyMiddleware(
    ReduxPromise(),    
    routerMiddleware(history),
    createLogger(),
    thunk
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(middlewares)
    );
    // below is for hot loading 
    if(module.hot){
        module.hot.accept('../reducers', () => {           
            store.replaceReducer(rootReducer);
        });
    }    
    // uncomment for persistant state
    store.subscribe(() => {
        saveState(store.getState());
    });
    return store;
}