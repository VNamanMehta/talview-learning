import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const {register, handleSubmit} = useForm()
    const {signup} = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (async(data) => {
        try {
            await signup(data.name, data.email, data.password)
            navigate("/dashboard", {replace: true})
        } catch (error) {
            console.error("Error: ", error)
            alert(error.message)
        }
    })
    return (
        <div className="flex items-center justify-center bg-[#FFF8E7] m-4 rounded-2xl">
            <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-xl ">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-serif font-bold text-center text-[#1A3C34]">
                        Sign Up
                    </h2>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-[#355E3B] font-serif"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                {...register('name', {required: true})}
                                className="mt-1 px-4 py-2 bg-[#FDF6E3] border border-[#E6D2A2] rounded-md text-[#1A3C34] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 placeholder-[#355E3B]/50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-[#355E3B] font-serif"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                {...register('email', {required: true})}
                                className="mt-1 px-4 py-2 bg-[#FDF6E3] border border-[#E6D2A2] rounded-md text-[#1A3C34] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 placeholder-[#355E3B]/50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-[#355E3B] font-serif"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                {...register('password', {required: true})}
                                className="mt-1 px-4 py-2 bg-[#FDF6E3] border border-[#E6D2A2] rounded-md text-[#1A3C34] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 placeholder-[#355E3B]/50"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#1A3C34] text-[#FFF8E7] font-serif font-medium rounded-md hover:bg-[#15312A] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 focus:ring-offset-[#FFF8E7] transition-all duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage