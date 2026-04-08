import { Link } from "react-router-dom";

function UserAccount() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      
      {/* Greeting, with John Doe in temporarily as the user's name */}
      <h1 className="text-2xl font-medium mb-10">
        Hello, John Doe
      </h1>

      {/* Button Grid */}
      <div className="flex justify-center gap-24 mt-8">
        
        {/* Change Password */}
        <div
          className="w-100 h-100 bg-[#c4b5a5] flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
        <Link to="/userChangePassword">
            <button className="border border-black px-10 py-4 text-xl font-semibold">
                Change Password
            </button>    
        </Link>
          
        </div>

        {/* Change Address */}
        <div
          className="w-100 h-100 bg-[#c4b5a5] flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          <Link to="/userChangeAddress">
            <button className="border border-black px-10 py-4 text-xl font-semibold">
                Change Address
            </button>    
        </Link>
        </div>

        {/* Log Out */}
        <div
          className="w-100 h-100 bg-[#c4b5a5] flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          <button className="border border-black px-10 py-4 text-xl font-semibold">
            Log Out
          </button>
        </div>

      </div>
    </div>
  );
}

export default UserAccount;
