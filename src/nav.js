import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link, Route, Routes} from 'react-router-dom';
import image1 from "./image/account.png";
import SignUp from "./Register";
import Login from "./login";
import image2 from "./image/login.png"
import ProductDetails from "./productdetails";
import image3 from "./image/add-to-cart.png";

export default function Navigation() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        
          <Navbar.Brand href="/" id="head1"><b>Fashion</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/productdetails" className="nav1"><b>Men</b></Nav.Link>
            <Nav.Link href="#/productdetails">Women</Nav.Link>
            <Nav.Link href="#/productdetails">Kids</Nav.Link>
            <Nav.Link href="#/productdetails"></Nav.Link>
          </Nav>
          <Form inline >
        <Row>
          <Col xs="auto" id="form1">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          
        </Row>
      </Form>
      
        </Container>
        <Link to="/Register">
       
      <img src={image1} id="icon1" width={"50px"} />

      </Link>
      <Link to="/login">
  
      <img src={image2} id="icon2" width={"50px"} />
      </Link>
      <Link to="/login">
  
      <img src={image3} id="icon3" width={"50px"} />
      </Link>
      </Navbar>
      
      <Routes>
        <Route path="/Register" element={<SignUp />} />
        <Route path="/login" element={< Login />} />
      </Routes>
      

      
      
    </>
  );
}

