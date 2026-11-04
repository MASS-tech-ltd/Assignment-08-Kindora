import { FaArrowRight } from "react-icons/fa";

const features = [
    {
        id: 1,
        title: "Discover Events",
        description:
            "Find meaningful social events and community activities happening around you, and discover new ways to help others.",
        image: "/images/discover-events.jfif",
    },
    {
        id: 2,
        title: "Easy Event Registration",
        description:
            "Join your favorite events with a simple, hassle-free, and quick registration process, anytime and anywhere.",
        image: "/images/Event-Registration.jfif",
    },
    {
        id: 3,
        title: "Organize Events",
        description:
            "Create and manage social events to bring positive changes to your community and inspire others to make a difference.",
        image: "/images/Organize-Events.jfif",
    },
    {
        id: 4,
        title: "Make Real Impact",
        description:
            "Participate in meaningful activities that improve lives, support communities, and create a brighter future for everyone.",
        image: "/images/Real-Impact.jfif",
    },
];

const PlatformFeatures = () => {
    return (
        <section className="bg-white pt-12 md:pt-18 lg:pt-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Section Heading */}
                <div className="mb-8 text-center lg:mb-16 md:mb-12">

                    <div className="md:mb-5 mb-3 flex items-center justify-center md:gap-5 gap-4">
                        <span className="md:h-[2px] h-[1px] md:w-12 w-10 bg-[#F07800] relative after:absolute after:-right-1 after:-top-[2.25px] md:after:-top-[3px] after:size-1.5 md:after:size-2 after:rotate-45 after:bg-[#F07800]"></span>

                        <span className="font-kaushan text-lg text-[#F07800] md:text-xl lg:text-2xl">
                            How We Make a Difference
                        </span>

                        <span className="md:h-[2px] h-[1px] md:w-12 w-10 bg-[#F07800] relative before:absolute before:-left-1 before:-top-[2.25px] md:before:-top-[3px] before:size-1.5 md:before:size-2 before:rotate-45 before:bg-[#F07800]"></span>
                    </div>

                    <h2 className="mx-auto max-w-2xl text-[28px] font-bold leading-tight text-[#15171D] sm:text-4xl md:text-4xl lg:text-5xl">
                        What Makes Kindora Special?
                    </h2>

                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-x-6 md:gap-y-40 gap-y-36 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => {

                        return (
                            <div
                                key={feature.id}
                                className="group relative mx-auto w-full max-w-[340px]"
                            >
                                {/* Outer Circular Border */}
                                <div className="absolute -bottom-[88px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full border border-[#D9E0E3] transition-all duration-500 group-hover:border-[#FF8500]"></div>

                                {/* Main Card */}
                                <div className="relative z-10 flex h-[255px] flex-col items-center rounded-[30px] border border-[#D9E0E3] bg-white px-5 pt-7 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#FF8500]/10">

                                    {/* Background Watermark Icon */}
                                    <img
                                        src="/images/Logo-watermark-black.png"
                                        alt="logo-watermark"
                                        aria-hidden="true"
                                        className="absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.04]"
                                    />

                                    {/* Card Content */}
                                    <div className="relative z-10">
                                        <h3 className="mb-3 text-xl font-bold text-[#15171D]">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm leading-[26px] text-[#64748B]">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Circular Image */}
                                    <div className="absolute -bottom-[42px] left-1/2 z-20 size-[100px] -translate-x-1/2 rounded-full border-[4px] border-[#D9E0E3] bg-white p-[3px] transition-all duration-300 group-hover:border-[#FF8500]">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="size-full rounded-full object-cover"
                                        />
                                    </div>

                                </div>

                                {/* Arrow Button */}
                                <button
                                    aria-label={`Explore ${feature.title}`}
                                    className="absolute -bottom-[109px] left-1/2 z-30 flex size-12 -translate-x-1/2 items-center
                                                justify-center rounded-full bg-[#FF8500] text-white transition-all
                                                duration-300 hover:rotate-45 hover:bg-[#087D4B]"
                                >
                                    <FaArrowRight className="-rotate-45 text-lg" />
                                </button>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default PlatformFeatures;
