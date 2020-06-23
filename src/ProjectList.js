import React from 'react';
import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const url = 'http://localhost:8000/api';

export class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  getProject() {
    axios
      .get(`${url}/projects`)
      .then((response) => {
        this.setState({
          projects: response.data.results,
        });      
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    const rows = this.state.projects.map((project, index) =>
      <tr key={index}>
        <td>{project.id}</td>
        <td>{project.name}</td>
        <td>{project.desc}</td>
      </tr>
    );

    return (
      <div className="App">
        <p />
        <Button className="btn" title="view_project" onClick={() => this.getProject()}>View Project</Button>
        <p />
        <Table striped bordered hover> 
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    );
  }
}



export default ProjectList;
