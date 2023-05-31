import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function DropdownFAQ(props) {
  const [active, setActive] = useState(false);

  const handleDropdown = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="my-4">
        <button
          className="flex items-center justify-between w-full p-8 text-white font-bold text-[18px] lg:text-[22px] rounded-lg text-left bg-gradient-to-br from-adhocBlauw via-adhocBlauw200 to-adhocBlauw200 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-300"
          onClick={handleDropdown}
        >
          {props.title}
          <span className="float-right pl-6">
            {active ? <BsChevronUp size={25} /> : <BsChevronDown size={25} />}
          </span>
        </button>

        <div className={active ? "py-4 px-8" : "hidden"}>
          <Fade>
            <p className="text-[16px] md:text-[18px] leading-8">{props.text}</p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default DropdownFAQ;
