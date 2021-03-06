import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import sample from './sample-reducer';
import contactInfo from './contact-info';
import projects from './projects';
import todos from './todo';

const rootReducer = combineReducers({
   sample,     
   contactInfo,
   router,  
   projects,
   todos,
});

export default rootReducer
