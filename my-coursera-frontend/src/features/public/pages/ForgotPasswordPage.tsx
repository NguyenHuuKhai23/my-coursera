import { Link } from "react-router-dom";
import logo from "@/assets/images/Logo.jpg";
import backgroundImg from "@/assets/images/Background.jpg";

const ForgotPasswordPage = () => {
    return (
        <div className="relative isolate min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -20 }} />
            <div className="absolute inset-0 bg-black opacity-25" style={{ zIndex: -10 }} />

            <div className="max-w-md w-full bg-white p-8 rounded-md shadow">
                <div className="text-center">
                    <Link to="/">
                        <img className="h-10 mx-auto" src={logo} alt="Logo" />
                    </Link>
                    <h2 className="mt-6 text-2xl font-extrabold text-gray-900">Reset your password</h2>
                    <p className="mt-2 text-sm text-gray-500">Enter your email and we'll send you instructions to reset your password.</p>
                </div>

                <form className="mt-6" onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input id="email" type="email" required placeholder="Email address"
                           className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <div className="mt-4">
                        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">Send reset link</button>
                    </div>

                    <div className="mt-4 text-sm text-center">
                        <Link to="/login" className="text-blue-600">Back to sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;

