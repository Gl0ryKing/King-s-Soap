import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

//const Home = () => {
 // return <div style={{ width: "100%", height: "100%" }} />;
//};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;