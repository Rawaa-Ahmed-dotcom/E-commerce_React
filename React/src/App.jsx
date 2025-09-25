import {Routes,Route} from "react-router";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Navbar from "./Components/Navbar.jsx";
function App() {
  return (
      <>
          <Navbar />
         <Routes>
             <Route path  = "/" element = {<Home/>}/>
             <Route path = "/cart" element = {<Cart/>}/>
             <Route path = "/product/:id" element = {<ProductDetails/>}/>
         </Routes>
      </>
  )
}

export default App
