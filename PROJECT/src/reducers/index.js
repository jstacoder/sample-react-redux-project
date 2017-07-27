import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import sample from './sample-reducer';
import projects from './projects';


const rootReducer = combineReducers({
   sample,
   router,
   projects,
});

export default rootReducer
