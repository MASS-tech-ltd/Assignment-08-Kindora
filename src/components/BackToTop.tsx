"use client";

import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={handleScrollToTop}
            aria-label="Back to top"
            className="absolute -top-6 right-5 flex size-12 items-center justify-center rounded-full border-[3px] border-[#F5A704] bg-white text-[#15171D] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5A704] hover:text-white sm:right-8 lg:right-[max(calc((100vw-1280px)/2),32px)]"
        >
            <ArrowUp size={22} strokeWidth={2.5} />
        </button>
    );
};

export default BackToTop;