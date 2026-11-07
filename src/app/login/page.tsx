
import Link from "next/link";
import { ArrowLeft, Mail, LockKeyhole } from "lucide-react";

const LoginPage = () => {
    return (
        <div className="login-section min-h- lg:pt-44 lg:pb-28 pt-26 pb-18 md:pt-30 md:pb-20 px-4 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-[28px] font-inter tracking-tight font-bold text-[#4c4c4c]">
                    Login
                </h1>

                <p className="text-[13px] font-inter text-gray-500 mt-1.5">
                    Welcome back! Sign in to continue making a difference.
                </p>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-[400px] bg-white border border-[#ffd4a5] rounded-2xl p-5 sm:p-6 shadow-sm">

                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-inter font-medium text-[#515151] mb-2"
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
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#E5E7EB] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-inter font-medium text-[#515151] mb-2"
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
                                autoComplete="current-password"
                                required
                                className="w-full h-11 pl-9 pr-3 text-xs rounded-lg border border-[#E5E7EB] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full h-11 rounded-lg bg-[#F07800] hover:bg-[#DB6C00] text-white text-[15px] font-inter font-semibold shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.99]"
                    >
                        Login
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-[#E5E7EB]"></div>

                    <span className="text-xs text-gray-500">
                        OR
                    </span>

                    <div className="flex-1 h-px bg-[#E5E7EB]"></div>
                </div>

                {/* Google Login */}
                <button
                    type="button"
                    className="w-full h-11 flex items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] bg-white hover:bg-[#FFF9F2] text-[13px]  font-semibold font-inter text-[#616161] transition-all duration-200"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3A12 12 0 1 1 24 12a11.8 11.8 0 0 1 7.9 3l5.7-5.7A19.9 19.9 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5z"
                        />
                        <path
                            fill="#FF3D00"
                            d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3 0 5.7 1.1 7.9 3l5.7-5.7A19.9 19.9 0 0 0 6.3 14.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 44a19.8 19.8 0 0 0 13.6-5.3l-6.3-5.3A12 12 0 0 1 12.8 29l-6.5 5A20 20 0 0 0 24 44z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.4l6.3 5.3A19.9 19.9 0 0 0 44 24c0-1.2-.1-2.4-.4-3.5z"
                        />
                    </svg>

                    Continue with Google
                </button>

                {/* Sign Up */}
                <p className="text-center text-sm font-inter text-gray-600 mt-5">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="font-semibold font-inter text-[#087D4B] hover:text-[#F07800] transition-colors"
                    >
                        Register
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

export default LoginPage;
