import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Icon from '../widgets/icon';
import { routerActions } from 'react-router-redux/actions';
import { history } from '../../store/configureStore';

export default class ProjectPage extends Component{
    removeProject = (project) =>{        
        this.props.actions.removeProject(project);
        history.replace('/project'); 
    }
    getProjectName = () =>{
        const projectName = this.props.match 
        && this.props.match.params 
        && this.props.match.params.project_id || '';
        const projects = this.props.projects;
        if(projectName && projectName != ''){
            for(let i = 0; i < projects.length; i++){
                if(projectName == projects[i]){
                    return projectName;
                }
            }
        }
        return '';
    }
    render(){
        const closeStyle = {
            cursor : 'pointer',
        };
        const project = this.getProjectName();
        return (
            <PageHeader>
               {`${project}`} <small style={closeStyle} onClick={e =>{this.removeProject(project)}} className='pull-right text-danger'>remove project<Icon name='close' /></small>
            </PageHeader>
        );
    }
}
