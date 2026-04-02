
import LoginBackgroundImage from "../assets/images/login-background-image/login-background-image.png";
import { MdOutlineEmail } from "react-icons/md";


function VerifyAccount() {
    return (

        <div className="min-h-screen bg-white flex items-center justify-center">
            {/* Background Image */}
            <img
                src={LoginBackgroundImage}
                alt="Background"
                className="absolute w-full h-full object-cover z-0"
            />
            {/*Account Verification Notifier*/}
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-2xl shadow-lg -mt-40 z-20">
                <form className="space-y-6">
                <div className="flex items-center justify-center ">
                  <MdOutlineEmail className="text-9xl" />
                </div>

                <div>
                    <label className="block text-2xl font-small text-center">
                    Please check your email for instructions on verifying your account.
                    </label>

                </div>

                <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-zinc-800 text-white text-xl font-medium"
                >
                    Resend Email
                </button>
                </form>
            </div>
        </div>
    
    );
}

export default VerifyAccount;