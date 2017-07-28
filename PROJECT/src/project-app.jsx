import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import * as Actions from './actions';
import { history } from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { AppContainer } from 'react-hot-loader';

import { loadState } from  './storage';

import App from './components/app';


// replace above line with below line for persistant state
//const store = configureStore(loadState('gameData', 'players', 'currentTurn', 'router'));

class ProjectApp extends Component {
    render(){                
        return (            
                <AppContainer>                
                    <Grid>
                        <Row>
                            <Col xs={12}>        
                                <Router history={history}>                
                                    <App {...this.props} />                        
                                </Router>
                            </Col>
                        </Row>
                    </Grid>                
            </AppContainer>            
        );
    }
}

const mapStateToProps = (state) =>({
    sample: state.sample,
    contactInfo: state.contactInfo,
    router: state.router,
    projects:state.projects,
    todos:state.todos,
});
const mapDispatchToProps = (dispatch) =>({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectApp);
