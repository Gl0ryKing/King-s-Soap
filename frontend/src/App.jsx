import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";

//const Home = () => {
 // return <div style={{ width: "100%", height: "100%" }} />;
//};
function App() {
  return (
    <BrowserRouter>
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