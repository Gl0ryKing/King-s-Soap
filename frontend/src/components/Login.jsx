
import LoginBackgroundImage from "../assets/images/login-background-image/login-background-image.png";
import { NavLink } from "react-router-dom";

function HomeLogin() {
    return (

        <div class="min-h-screen bg-white flex items-center justify-center">
            {/* Background Image */}
            <img
                src={LoginBackgroundImage}
                alt="Background"
                className="absolute w-full h-full object-cover z-0"
            />
            {/*The Login Form*/}
            <div class="w-full max-w-md px-6 py-8 bg-white rounded-2xl shadow-lg -mt-40 z-20">
                <form class="space-y-6">
                <div>
                    <label class="block text-2xl font-medium text-gray-800 mb-2">
                    Email
                    </label>
                    <input
                    type="email"
                    placeholder="Value"
                    class="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                <div>
                    <label class="block text-2xl font-medium text-gray-800 mb-2">
                    Password
                    </label>
                    <input
                    type="password"
                    placeholder="Value"
                    class="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                <button
                    type="submit"
                    class="w-full h-12 rounded-xl bg-zinc-800 text-white text-xl font-medium"
                >
                    User Login
                </button>
                {/* If we ever want a separate admin login
                <button
                    type="button"
                    class="w-full h-12 rounded-xl bg-zinc-800 text-white text-xl font-medium"
                >
                    Admin Login
                </button>
                */}

                <div class="space-y-5 pt-2">
                    <NavLink
                        to="/UserChangePassword"
                        className={({ isActive }) =>
                            'block text-2xl text-gray-800 underline underline-offset-4 hover:scale-101 hover:text-[#8B6B4A]'
                        }
                    >
                        Forgot Password?
                    </NavLink>
                  

                    <a href="#" class="block text-2xl text-gray-800 underline underline-offset-4">
                    Create an account
                    </a>
                </div>
                </form>
            </div>
        </div>
    
    );
}

export default HomeLogin;