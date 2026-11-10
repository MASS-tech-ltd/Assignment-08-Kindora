
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
    ChevronDown,
    ChevronUp,
    CirclePlus,
    Settings,
    CircleCheck,
    LogOut,
    UserRound,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

type UserDropdownProps = {
    name: string;
    email: string;
    image?: string | null;
};

const UserDropdown = ({ name, email, image }: UserDropdownProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (!error) {
            setIsOpen(false);
            router.push("/login");
            router.refresh();
        }
    };

    return (
        <div ref={dropdownRef} className="relative">

            {/* User Avatar */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 outline-none"
            >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">

                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="40px"
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#DDF8E6] text-[#087D4B]">
                            <UserRound size={23} />
                        </div>
                    )}

                </div>

                {isOpen ? (
                    <ChevronUp size={15} className="text-gray-500" />
                ) : (
                    <ChevronDown size={15} className="text-gray-500" />
                )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-3 w-[290px] bg-white rounded-xl border border-gray-100 shadow-lg z-50 overflow-hidden">

                    {/* User Information */}
                    <div className="px-5 py-4 border-b border-gray-100">
                        <h3 className="text-[15px] font-semibold text-[#383838] truncate">
                            {name}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1 truncate">
                            {email}
                        </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">

                        <Link
                            href="/create-event"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-[#454545] hover:bg-gray-50 transition-colors"
                        >
                            <CirclePlus
                                size={19}
                                className="text-[#38B99C]"
                            />
                            Create Event
                        </Link>

                        <Link
                            href="/manage-events"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-[#454545] hover:bg-gray-50 transition-colors"
                        >
                            <Settings
                                size={19}
                                className="text-[#9275D5]"
                            />
                            Manage Events
                        </Link>

                        <Link
                            href="/joined-events"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-[#454545] hover:bg-gray-50 transition-colors"
                        >
                            <CircleCheck
                                size={19}
                                className="text-[#38B99C]"
                            />
                            Joined Events
                        </Link>

                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-100 py-2">

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-5 py-2.5 text-sm font-semibold text-[#D66A70] hover:bg-red-50 transition-colors"
                        >
                            <LogOut size={19} />
                            Logout
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
};

export default UserDropdown;
