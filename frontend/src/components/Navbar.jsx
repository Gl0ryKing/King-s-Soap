import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className = "bg-[#C5AE98] text-[#FFFFFF] p-2 text-center">

            <div className = "flex justify-between items-center">
                
                <div>

                    <Link to = "/">

                    <img src={logo} alt="Logo" className="h-35" />
                    
                    </Link>

                </div>

                <div className = "space-x-8 pr-8 font-[Inter] text-xl">
                    <NavLink 
            
                        to= "/" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "border-b-2 border-white pb-1" : ""                      }`
                        }    
                    > 
                    Home
                    
                    </NavLink>

                    <NavLink 
            
                        to= "/shop" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "border-b-2 border-white pb-1" : ""                      }`
                        }    
                    > 
                    Shop
                    
                    </NavLink>

                    <NavLink 
            
                        to= "/about" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "border-b-2 border-white pb-1" : ""                      }`
                        }    
                    > 
                    About
                    
                    </NavLink>

                    <NavLink 
            
                        to= "/cart" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "border-b-2 border-white pb-1" : ""                      }`
                        }    
                    > 
                    Cart
                    
                    </NavLink>

                   <NavLink

                        to="/login"
                        className={({ isActive }) =>
                        `inline-block border border-white rounded-lg px-4 py-3 transition duration-200 hover:scale-105 ${
                        isActive ? "bg-white/20" : ""                          }`
                        }
                    >
                    Login

                    </NavLink>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;