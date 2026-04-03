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

      {/*Account Verification Notifier*/}
      <div className="z-20 w-full max-w-md rounded-2xl bg-white px-6 py-8 shadow-lg -mt-40">
        <div className="space-y-6">

          <div className="text-center">
            <h1 className="text-2xl font-medium text-gray-800">
              Verify your account
            </h1>
            <p className="mt-2 text-base text-gray-600">
              Please check your email for instructions on verifying your account.
            </p>
          </div>


            {/* Change button type to this when we end up handling button */}
            {/* <button type="button" onClick={handleResendEmail}> */}
          <button
            type="button"
            className="w-full h-12 rounded-xl bg-zinc-800 text-xl font-medium text-white cursor-pointer"
          >
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailToPWReset;
