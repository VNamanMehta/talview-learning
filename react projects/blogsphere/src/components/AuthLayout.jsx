import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF8E7]">
            <div className="w-full max-w-md px-8 bg-[#e3d9c1] rounded-xl p-8">
                <div className="text-center">
                    <h1 className="text-2xl font-serif font-bold text-[#1A3C34]">
                        Welcome to BlogSphere
                    </h1>
                    <p className="mt-1 text-sm font-serif text-[#355E3B]">
                        Your space to write and share
                    </p>
                </div>
                <Outlet />
                <div className="text-center space-y-3  rounded-lg p-4">
                    <p className="text-sm font-serif text-[#355E3B]">
                        New here?{" "}
                        <Link
                            to="/sign-up"
                            className="font-medium text-[#D4A017] hover:text-[#B8860B] transition-colors duration-300"
                        >
                            Create an Account
                        </Link>
                    </p>
                    <hr className="border-t border-[#E6D2A2] w-1/3 mx-auto" />
                    <p className="text-sm font-serif text-[#355E3B]">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-[#D4A017] hover:text-[#B8860B] transition-colors duration-300"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;