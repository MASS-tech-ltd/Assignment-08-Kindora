import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    Mail,
    LockKeyhole,
    UserRound,
    Image as ImageIcon,
    X,
} from "lucide-react";

const Register = () => {
    return (
        <div className="login-section min-h- px-4 pt-28 pb-20  lg:pt-40 lg:pb-24 md:pt-32 md:pb-20 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="text-center mb-6">
                <div className="flex justify-center">
                    <Image
                        src="/images/Logo-watermark.png"
                        alt="Kindora"
                        width={1994}
                        height={438}
                        className="w-auto h-9 md:h-9 lg:h-10"
                    />
                </div>
                <h1 className="text-[28px] font-inter tracking-tight font-extrabold text-[#383838]">
                    Create Account
                </h1>

                <p className="text-[13px] font-inter text-gray-500 mt-1">
                    Create an account to start making a difference.
                </p>
            </div>

            {/* Register Card */}
            <div className="w-full max-w-[400px] bg-white border border-[#ffd4a5] rounded-2xl p-5 sm:p-6 shadow-md">

                <form className="space-y-5">

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-inter font-semibold text-[#454545] mb-2"
                        >
                            Name
                        </label>

                        <div className="relative">
                            <UserRound
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                autoComplete="name"
                                required
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-inter font-semibold text-[#454545] mb-2"
                        >
                            Email Address
                        </label>

                        <div className="relative">
                            <Mail
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* photoURL */}
                    <div>
                        <label
                            htmlFor="photoURL"
                            className="block text-sm font-inter font-semibold text-[#454545] mb-2"
                        >
                            Photo URL
                        </label>

                        <div className="relative">
                            <ImageIcon
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="photoURL"
                                type="url"
                                name="photoURL"
                                placeholder="Enter your photo URL"
                                autoComplete="url"
                                required
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-inter font-semibold text-[#454545] mb-2"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <LockKeyhole
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                                required
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-inter font-semibold text-[#454545] mb-2"
                        >
                            Confirm Password
                        </label>

                        <div className="relative">
                            <LockKeyhole
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                                required
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Password Requirements */}
                        <div className="mt-2.5 space-y-1 pl-1">

                            <p className="flex items-center gap-2 text-[11px]  font-inter text-[#7f7f81]">
                                <X size={13} className="text-red-400" />
                                At least one uppercase letter (A-Z)
                            </p>

                            <p className="flex items-center gap-2 text-[11px]  font-inter text-[#7f7f81]">
                                <X size={13} className="text-red-400" />
                                At least one lowercase letter (a-z)
                            </p>

                            <p className="flex items-center gap-2 text-[11px]  font-inter text-[#7f7f81]">
                                <X size={13} className="text-red-400" />
                                Minimum 6 characters long
                            </p>

                        </div>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full h-11 rounded-lg bg-[#F07800] hover:bg-[#DB6C00] text-white text-[15px] font-inter font-semibold shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.99]"
                    >
                        Register
                    </button>

                </form>

                {/* Login */}
                <p className="text-center text-sm font-inter text-gray-600 mt-5">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold font-inter text-[#087D4B] hover:text-[#F07800] transition-colors"
                    >
                        Login
                    </Link>
                </p>

            </div>

            {/* Back to Home */}
            <Link
                href="/"
                className="flex items-center font-inter font-semibold gap-2 mt-6 text-sm text-gray-500 hover:text-[#F07800] transition-colors"
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>

        </div>
    );
};

export default Register;