import LoginBackgroundImage from "../assets/images/login-background-image/login-background-image.png";

function EmailToPWReset() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Background Image */}
      <img
        src={LoginBackgroundImage}
        alt="Background"
        className="absolute h-full w-full object-cover z-0"
      />

      {/*Email Entry to initiate Password Reset*/}
      <div className="z-20 w-full max-w-md rounded-2xl bg-white px-6 py-8 shadow-lg -mt-40">
        <div className="space-y-6">

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


            {/* Change button type to this when we end up handling button */}
            {/* <button type="button" onClick={handleResendEmail}> */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex-1 h-12 rounded-xl border border-zinc-800 text-xl font-medium text-zinc-800 cursor-pointer bg-transparent"
            >
              Cancel
            </button>

            <button
              type="button"
              className="flex-1 h-12 rounded-xl bg-zinc-800 text-xl font-medium text-white cursor-pointer"
            >
              Reset Password
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailToPWReset;
