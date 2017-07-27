import React from 'react';
import { PageHeader } from 'react-bootstrap';


const ProjectPage = ({match}) =>{
    return (
        <PageHeader>{`${match.params.project_id}`}</PageHeader>
    );
};

export default ProjectPage

