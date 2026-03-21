import { Routes,Route } from "react-router-dom";
import { CartProvider } from "./Component/Shop/CartContext";
import Header from "./Component/Commonsec/Header";
import Commonpage from "./Component/Homesec/Commonpage";
import About from "./Component/Aboutus/About";
import Mainservice from "./Component/Servicesec/Mainservice";
import Shop from "./Component/Shop/Shop";
import Card from "./Component/Card/Card";
import Contact from "./Component/Contactus/Contact"
import Footer from "./Component/Commonsec/Footer";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login in/Login";

function App(){
  return(
    <div>
      <CartProvider>
      <Header/> 
          <Routes>
            <Route path="/" element= {<Commonpage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element= {<About/>}/>
            <Route path="/service" element={<Mainservice/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

      <Footer/>
      </CartProvider>

    </div>

  )
}

export default App;









// import { Routes,Route } from "react-router-dom";
// import Header from "./Component/Header/Header";
// import Home from "./Component/Homemenu/Home";
// import About from "./Component/About/About";
// import Blog from "./Component/Blog/Blog";
// import Shop from "./Component/Shop/Shop";
// import Contact from "./Component/Contactus/Contact";
// import Mainservice from "./Component/Service/Mainservice";
// import Footer from "./Component/Footer/Footer";


// function App() {
//   return (
//     <>
//        <Header/>
//             <div style={{margin:"250px 0"}}>
//                   <Routes>
//                     <Route path="/" element={<Home/>}/>
//                     <Route path="/about" element={<About/>}/>
//                     <Route path="/blog" element={<Blog/>}/>
//                     <Route path="/mainservice" element={<Mainservice/>}/>
//                     <Route path="/shop" element={<Shop/>}/>
//                     <Route path="/contact" element={<Contact/>}/>
//                 </Routes>
//             </div>
//        <Footer/>
//     </>
//   );
// }

// export default App;
