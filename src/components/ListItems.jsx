/* eslint-disable react/prop-types */

import { FaRegClock } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { PiPlusCircleBold } from "react-icons/pi";

export default function ListItems() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-5 px-3 md:gap-10"> {/* Updated gap values here */}
      <Item title="Fixed Price Projects" Icon={FaRegClock} description="We offer Fixed Price Projects, which means you pay a fixed amount for the entire project, regardless of the time and resources required." />
      <Item title="Receive on time" Icon={FiCheckCircle} description="We know how important it is for you to receive your orders on time. That’s why we deliver on time, every time.No delays, no excuses, no hassle" />
      <Item title="Fast work turnaround" Icon={PiPlusCircleBold} description="At our work, we value your time and satisfaction. That’s why we deliver high-quality results with fast work turnaround as per your expectation" />
    </div>
  );
}

function Item({ Icon = FaRegClock, title = "", description = "" }) {
  return (
    <div className="flex w-max  h-max items-center gap-3 rounded-[12px] bg-gradient-to-t from-[#050bff] to-[#f2bb16] px-[18px] py-24 text-white md:max-w-[350px] transform hover:translate-y-2 hover:shadow-xl transition duration-300"> {/* Increased padding for height and adjusted max-width */}
    <div className="flex flex-col items-center">
      <Icon className="size-[38px]" />
      <div className="flex flex-col items-center mt-2">
        <h3 className="font-poppins text-lg font-medium text-center">{title}</h3>
        <p className="font-sora text-xs mt-1 text-center">{description}</p>
      </div>
    </div>
  </div>
  );
}
