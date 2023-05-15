import { HiOutlineArrowRight } from "react-icons/hi";

function ServiceCard(props) {
  return (
    <>
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto md:hover:scale-105 transition ease-in-out duration-500">
          <img
            className="mx-auto drop-shadow-lg w-[100px] md:w-[125px] lg:w-[130px]"
            src={props.pic}
            alt=""
          />
          <h3 className="text-lg font-bold pt-8 pb-2">{props.title}</h3>
          <p className="py-2 max-w-md mx-auto">{props.description}</p>
          <div className="flex justify-center mt-8">
            <button className="flex items-center text-adhocBlauw border-2 border-adhocBlauw bg rounded-[100px] px-4 py-1 font-semibold transition-all ease-in-out duration-700  hover:bg-adhocBlauw hover:text-white">
              Lees meer <HiOutlineArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
    </>
  );
}

export default ServiceCard;
