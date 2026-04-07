import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VerifyAccount from "./Pages/VerifyAccount";
import EmailToPWReset from "./Pages/EmailToPWReset";
import { Product1, Product2, Product3, Product4, Product5, Product6 } from "./Pages/ProductPages";


//const Home = () => {
 // return <div style={{ width: "100%", height: "100%" }} />;
//};
function App() {
  return (
    <BrowserRouter>
    
      <Navbar />

        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/emailToPWReset" element={<EmailToPWReset />} />
        <Route path="/Product1" element={<Product1 />} />
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
        <Route path="/Product4" element={<Product4 />} />
        <Route path="/Product5" element={<Product5 />} />
        <Route path="/Product6" element={<Product6 />} />



      </Routes>
        </div>

      <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;