import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import sample from './sample-reducer';
import contactInfo from './contact-info';

const rootReducer = combineReducers({
   sample,     
   contactInfo,
   router,  
});

export default rootReducer; 