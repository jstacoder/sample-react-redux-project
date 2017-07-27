import React from 'react';
import ReactDOM from 'react-dom';
import ProjectApp from './project-app';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';



const render = (Component) =>{
    const store = configureStore();
    return ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>
    , document.getElementById('app'));
};

render(ProjectApp);

if(module.hot){
    require('react-hot-loader/patch');
    module.hot.accept('./index.jsx', () =>{
        render(ProjectApp);
    });
}
