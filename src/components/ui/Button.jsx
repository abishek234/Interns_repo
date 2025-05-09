/* eslint-disable react/prop-types */
import { TbCircleArrowRightFilled  } from "react-icons/tb";

export default function Button({
  title = "Login",
  Icon = TbCircleArrowRightFilled ,
  className = "",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-lr flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold text-white transition hover:-rotate-3 ${className}`}
    >
      <Icon className="size-6" />
      {title}
    </button>
  );
}
