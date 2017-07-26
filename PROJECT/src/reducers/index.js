import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import sample from './sample-reducer';

const rootReducer = combineReducers({
   sample,     
   router,  
});

export default rootReducer; 