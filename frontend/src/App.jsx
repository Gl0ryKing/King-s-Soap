import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

      </Routes>
        </div>

      <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;