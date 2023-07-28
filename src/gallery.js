import Card from 'react-bootstrap/Card';
import {Link, Route, Routes} from 'react-router-dom';

import Products from './productdetails';

export default  function Gallery() {
  return (
    <>
      <Card id="card1">
      <Link to="/productdetails">
      <Card.Img variant="top"  className="img1" src="https://tinyurl.com/mwf8f8me" />
      </Link>
      <Routes>
        <Route path="/productdetails" element={<Products />} />
      </Routes>
       
        
        <Card.Body>
          <Card.Text className='text1'>
          Women Embroidered Viscose Rayon Anarkali Kurta
          </Card.Text>
          <Card.Text className='text2'>Rs.300</Card.Text>
        </Card.Body>
      </Card>
      <br />
      
      <Card id="card2">
      <Link to="/productdetails">
      <Card.Img variant="bottom"  className="img1"src="https://tinyurl.com/mr6urcb6" />
      </Link>
      <Routes>
        <Route path="/productdetails" element={<Products />} />
      </Routes>
      <Card.Body>
      <Card.Text className='text1'>
      Fency Cotton Sumar Combo Kurti

          </Card.Text>
          <Card.Text className='text2'>Rs.500</Card.Text>
        </Card.Body>
        
      </Card>


      <Card id="card3">
      <Link to="/productdetails">
      <Card.Img variant="bottom"  className="img3" src="https://tinyurl.com/k8b35u97" />
      </Link>
      <Routes>
        <Route path="/productdetails" element={<Products />} />
      </Routes>
      <Card.Body>
      <Card.Text className='text1'>
      Women's Ethnic Wear Crepe Straight Cut Kurti (Combo Pack Of 4)

          </Card.Text>
          <Card.Text className='text2'>Rs.1000</Card.Text>
        </Card.Body>
        
      </Card>
    </>
  );
}

