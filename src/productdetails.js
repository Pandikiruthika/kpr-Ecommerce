import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link, Route, Routes} from 'react-router-dom';
import OrderForm from "./order"
export default function Products(){
  return (
    <>
      <Card id="product1"  >
        <Card.Img variant="top" src="https://tinyurl.com/vjs8792r" />
        </Card>
        <Card id="product2">
        <Card.Img variant="top" src="https://tinyurl.com/yfk6umf3" />
        </Card>
        <Card id="product3">
        <Card.Img variant="top" src="https://tinyurl.com/mr48jnxu" />
        </Card>
        <Card id="product4">
      <Card.Header id="header1">Women Embroidered Viscose Rayon Anarkali Kurta</Card.Header>
      <Card.Body>
        <Card.Title>₹281</Card.Title>
        <Card.Text>
        Free Delivery
        </Card.Text>
      
      </Card.Body>
    </Card>


    <Card id="product5">
      <Card.Header id="header1">Product Details</Card.Header>
      <Card.Body className='cardtext'>
        
        <Card.Text>Name : Women Embroidered Viscose Rayon Anarkali Kurta</Card.Text>
        <Card.Text>Fabric : Rayon</Card.Text>
        <Card.Text>Sleeve Length : Three-Quarter Sleeves</Card.Text>
        <Card.Text>Pattern : Embroidered</Card.Text>
        <Card.Text>Combo of : Single</Card.Text>
        <Card.Text>Country of Origin : India</Card.Text>
        

      </Card.Body>
    </Card>
    <Link to="/order">
    <Button className="Button1" variant="primary">Order Now</Button>
      </Link>
      <Routes>
        <Route path="/order" element={<OrderForm />} />
      </Routes>
  
    <Button className="Button1" variant="success">Add to Cart</Button>{' '}
    </>
  );
}

