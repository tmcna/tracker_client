import React from 'react';
import './App.css';

import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { ProjectList } from './ProjectList';

export class App extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {' React Bootstrap'}
              </Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col sm>< ProjectList /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
