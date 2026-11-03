
import {
  FaCalendarAlt,
  FaUsers,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Statistics = () => {
  const statistics = [
    {
      value: "250+",
      title: "Events Organized",
      icon: FaCalendarAlt,
      color: "text-[#087D4B]",
      bg: "bg-[#DDF8E6]",
    },
    {
      value: "5,000+",
      title: "Active Volunteers",
      icon: FaUsers,
      color: "text-[#F07800]",
      bg: "bg-[#FFE5CC]",
    },
    {
      value: "12,000+",
      title: "Lives Impacted",
      icon: FaHeart,
      color: "text-[#1672AE]",
      bg: "bg-[#D8EDFF]",
    },
    {
      value: "85+",
      title: "Communities",
      icon: FaMapMarkerAlt,
      color: "text-[#7135A3]",
      bg: "bg-[#EEDBFF]",
    },
  ];

  return (
    <section className="absolute w-full lg:px-120 md:px-20  px-5 lg:top-198 md:top-150 top-152 left-1/2 -translate-x-1/2">
      <div className="relative rounded-full border border-[#feaf06]/30 bg-[#9a9a9a]/30 lg:px-8 md:px-5 px-3 md:py-2.25 lg:py-3 py-1.25">

        {/* Statistics Cards */}
        <div className="relative gap-1.25 z-10 grid grid-cols-4">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex justify-around"
              >
                {/* Icon */}
                <div className="flex items-center">
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-full size-[24px] md:size-[32px] lg:size-[45px] ${item.bg}`}
                  >
                    <Icon className={`text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl ${item.color}`} />
                  </div>

                  {/* Text */}
                  <div className="md:ml-2 ml-1">
                    <h3 className=" font-semibold text-[#FFF4D9] text-[8px] md:text-xs lg:text-[15px]">
                      {item.value}
                    </h3>

                    <p className="font-normal text-white text-[5px] min-[400px]:text-[6px] md:text-[8px] lg:text-[12px]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Statistics;
