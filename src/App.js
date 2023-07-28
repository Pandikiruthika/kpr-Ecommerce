import{HashRouter,Routes,Route} from "react-router-dom";
import Navigation from "./nav.js"
import Home from "./home.js"
import Tracking from "./trackedorder"

import "./style.css"
import Products from "./productdetails.js";
import OrderForm from "./order";
import OrderTracking from "./orderTracking.js"
export default function App(){
 return(
 <>
<HashRouter>
  <Navigation />
 

  <Routes>
  <Route path="/" element={ <Home />}></Route>
  <Route path="/productdetails" element={<Products/>}/>
  <Route path="/order" element={<OrderForm/>}/>
  <Route path="/orderTracking" element={<OrderTracking/>}/>
  <Route path="/trackedorder" element={<Tracking/>}/>
    </Routes>
    
</HashRouter>
 </>
)}




