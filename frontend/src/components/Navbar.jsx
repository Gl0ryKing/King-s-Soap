import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className = "bg-[#C5AE98] text-[#FFFFFF] p-2 text-center">

            <div className = "flex justify-between items-center">
                
                <div className="bg-transparent">

                    <Link to = "/">

                    <img src={logo} alt="Logo" className="h-35" />
                    
                    </Link>

                </div>

                <div className = "space-x-8 pr-8 font-[Inter] text-xl">

                    <Link to = "/"> Home</Link>
                    <Link to = "/shop"> Shop</Link>
                    <Link to = "/about"> About</Link>
                    <Link to = "/cart"> Cart</Link>
                    <Link to = "/login" className="border border-white rounded-lg px-4 py-3">Login</Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;