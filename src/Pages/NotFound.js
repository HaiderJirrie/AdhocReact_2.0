import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-blob bg-cover">
      <div className="px-2 max-w-[600px] mt-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="font-bold text-[30px] md:text-[32px] lg:text-[36px] text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
          404
        </h1>
        <h1 className="font-bold text-[30px] md:text-[32px] lg:text-[36px] text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
          Pagina niet gevonden
        </h1>
        <Link to="/">
          <button className="px-8 py-2 mt-8 text-[18px] md:text-[20px] font-semibold text-white rounded-[100px] max-w-fit mx-auto bg-gradient-to-br from-adhocBlauw  via-adhocBlauw200  to-adhocDonkerBlauw bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-500 md:hover:-translate-y-1">
            Naar startpagina
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
