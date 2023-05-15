import { FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Persoon(props) {
  return (
    <>
      <Fade bottom duration="1500">
        <div className="lg:flex gap-10 bg-white shadow-lg p-10 rounded-xl w-fit mx-4 md:mx-auto mt-10 md:hover:scale-105 transition ease-in-out duration-500">
          <div>
            <img
              className="rounded-[500px] mb-8 mx-auto"
              src={props.pic}
              width={250}
              alt={props.name}
            />
            <h1 className="text-lg font-bold text-center">{props.name}</h1>
            <h1 className="text-lg font-semibold text-center">
              {props.function}
            </h1>
            <a href={props.link} target="_blank" rel="noreferrer">
              <FaLinkedin
                className="cursor-pointer transition ease-in-out md:hover:-translate-y-1 mt-1 mb-4 mx-auto"
                size={30}
              />
            </a>
          </div>
          <div className="max-w-xl mx-auto text-center md:text-left">
            <p>{props.text}</p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Persoon;
