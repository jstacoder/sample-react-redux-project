import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import * as Actions from './actions';
import { history } from './store/configureStore';

import App from './components/app';

class ProjectApp extends Component {
    render(){                
        return (
            <Router history={history}>                
                <App {...this.props} />                        
            </Router>
        );
    }
}

const mapStateToProps = (state) =>({        
    sample: state.sample,
})
const mapDispatchToProps = (dispatch) =>({    
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectApp);
