
"use client"

import Link from "next/link";
import type { FormEvent } from "react";
import Image from "next/image";
import { useState } from "react";

import {
    ArrowLeft,
    Mail,
    LockKeyhole,
    UserRound,
    Image as ImageIcon,
    X,
    Check,
    Eye,
    EyeOff,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";


const Register = () => {

    const router = useRouter();

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;


    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries()) as {
            name: string,
            email: string,
            image: string,
            password: string,
            confirmPassword: string
        }



        // Password validation
        if (!hasUppercase || !hasLowercase || !hasMinLength) {
            toast.error("Please meet all password requirements!");
            return;
        }


        // Confirm Password validation
        if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }


        const { data, error } = await authClient.signUp.email({
            ...user,
        })


        if (data) {
            await authClient.signOut();
            toast.success('Account created successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            router.push("/login");
        }


        if (error) {
            console.log(error);
            toast.error(error.message || "Registration failed!");
        }



    };


    return (

        <div className="login-section min-h-screen px-4 pt-28 pb-20 lg:pt-40 lg:pb-24 md:pt-32 md:pb-20 flex flex-col items-center justify-center">


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


                <form onSubmit={handleRegister} className="space-y-5">


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
                            htmlFor="name"
                            className="block text-sm font-inter font-semibold text-[#454545] mb-2"
                        >
                            Image URL
                        </label>


                        <div className="relative">

                            <ImageIcon
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />


                            <input
                                id="image"
                                type="url"
                                name="image"
                                placeholder="Enter your image URL"
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
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full h-11 pl-9 pr-10 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />


                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F07800] transition-colors"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >

                                {showPassword ? (
                                    <EyeOff size={16} />
                                ) : (
                                    <Eye size={16} />
                                )}

                            </button>

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
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                                required
                                className="w-full h-11 pl-9 pr-10 text-xs rounded-lg border border-[#dfdfdf] outline-none transition-all focus:border-[#F07800] focus:ring-2 focus:ring-[#F07800]/10 placeholder:text-gray-400"
                            />


                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F07800] transition-colors"
                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >

                                {showConfirmPassword ? (
                                    <EyeOff size={16} />
                                ) : (
                                    <Eye size={16} />
                                )}

                            </button>

                        </div>



                        {/* Password Requirements */}

                        <div className="mt-2.5 space-y-1 pl-1">


                            {/* Uppercase */}

                            <p className={`flex items-center gap-2 text-[11px] font-inter ${hasUppercase ? "text-green-600" : "text-[#7f7f81]"}`}>

                                {hasUppercase ? (
                                    <Check size={13} className="text-green-500" />
                                ) : (
                                    <X size={13} className="text-red-400" />
                                )}

                                At least one uppercase letter (A-Z)

                            </p>



                            {/* Lowercase */}

                            <p className={`flex items-center gap-2 text-[11px] font-inter ${hasLowercase ? "text-green-600" : "text-[#7f7f81]"}`}>

                                {hasLowercase ? (
                                    <Check size={13} className="text-green-500" />
                                ) : (
                                    <X size={13} className="text-red-400" />
                                )}

                                At least one lowercase letter (a-z)

                            </p>



                            {/* Minimum Length */}

                            <p className={`flex items-center gap-2 text-[11px] font-inter ${hasMinLength ? "text-green-600" : "text-[#7f7f81]"}`}>

                                {hasMinLength ? (
                                    <Check size={13} className="text-green-500" />
                                ) : (
                                    <X size={13} className="text-red-400" />
                                )}

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
