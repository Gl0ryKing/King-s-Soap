import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";

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
                        isActive ? "text-[#8B6B4A]" : ""                      }`
                        }    
                    > 
                    Home
                    
                    </NavLink>

                    <NavLink 
            
                        to= "/shop" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "text-[#8B6B4A]" : ""                      }`
                        }    
                    > 
                    Shop
                    
                    </NavLink>

                    <NavLink 
            
                        to= "/about" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "text-[#8B6B4A]" : ""                      }`
                        }    
                    > 
                    About
                    
                    </NavLink>

                    <NavLink 
            
                        to= "/cart" 
                        className={({ isActive }) => 
                        `inline-block transition duration-200 hover:scale-105 ${
                        isActive ? "text-[#8B6B4A]" : ""                      }`
                        }    
                    > 
                    <BsBag className="text-2xl translate-y-[3px]" />
                    
                    </NavLink>

                   <NavLink

                        to="/login"
                        end
                        className={({ isActive }) =>
                        `inline-block border rounded-lg px-4 py-3 transition duration-200 hover:scale-105 hover:bg-white/20 ${
                        isActive ? "text-[#8B6B4A] border-[#8B6B4A]"
                        : "text-white border-white"                         }`
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