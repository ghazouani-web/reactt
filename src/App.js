import React from'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Alert,Breadcrumb,Card ,Form,Row,Col,Navbar,Nav,NavDropdown,FormControl}  from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login'; 




function App() {
  return (
    




    <div className="App">
       
       

 <div className="navigation">
<Navbar  bg="light" expand="lg">
  <Navbar.Brand href="#home">sign up</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="contacts" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">mail</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">fax number</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
      <header className="App-header">
<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>

      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form>
  <Form.Row>
    <Col xs={7}>
      <Form.Control placeholder="City" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Form.Control placeholder="Zip" />
    </Col>
  </Form.Row>
 
</Form>

 
  <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto" className="my-1">
      <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Preference
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Control>
    </Col>
    <Col xs="auto" className="my-1">
      <Form.Check
        type="checkbox"
        id="customControlAutosizing"
        label="Remember my preference"
        custom
      />
    </Col>
    
  </Form.Row>
</Form>
</Form>
<Form>
<Col xs="auto" className="my-1">
      <Button type="submit">Submit</Button>
    </Col>
</Form>
      
       
      </header>
      <FacebookLogin/>
     
    </div>
  );
}

export default App;
