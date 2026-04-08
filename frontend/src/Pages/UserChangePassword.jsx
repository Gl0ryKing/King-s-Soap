import LoginBackgroundImage from "../assets/images/login-background-image/login-background-image.png";

function UserChangePassword() {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center">
      {/* Background Image */}
        <img
            src={LoginBackgroundImage}
            alt="Background"
            className="absolute w-full h-full object-cover z-0"
        />
      {/*The Login Form*/}
      <div className="w-full max-w-md bg-white p-6 pb-20 rounded-2xl shadow-sm mt-20 z-10">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-2">Old Password</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">
              New Password
            </label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">Re-Type New Password</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <button className="w-full bg-zinc-800 text-white py-2 rounded-lg mt-2">
            Reset Password
          </button>

        </div>
      </div>
    </div>
  );
}

export default UserChangePassword;
