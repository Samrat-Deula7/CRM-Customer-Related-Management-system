import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const NavBar = ({}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? " backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className=" w-full h-15 flex justify-between items-center px-3">
          <div className="flex justify-center items-center  gap-2 text-xl ">
            {/* <img src={Logo} alt="logo" className="w-7" /> */}
            <h1 className="text-white font-bold">
              <div className="flex">
                <Link to="/">
                  <img src={Logo} alt="logo" className="w-65" />
                </Link>
              </div>
            </h1>
          </div>{" "}
          <div className="w-47.5 flex justify-center  gap-2  h-15 flex justify-center items-center ">
            <button
              className="text-[#000000] font-bold text-[13px] bg-[#FF4A03] w-19 h-7 rounded-xl  duration-300 hover:text-[#FF4A03] hover:bg-transparent cursor-pointer"
              onClick={() => setLoginbtn?.((prev) => !prev)}
            >
              Sign in
            </button>
            <button
              className="text-[#000000] font-bold text-[13px] border border-2 border-[#FF4A03] text-[#FF4A03] w-19 h-7 rounded-xl  duration-300 hover:border-none hover:bg-transparent cursor-pointer"
              onClick={() => setSignupbtn?.((prev) => !prev)}
            >
              Sign up
            </button>
          </div>
        </div>
        <div
          className={`md:flex w-3xl h-xl  justify-start items-center gap-x-2 py-1 px-2 `}
        >
          <div className={`flex items-center gap-x-5 px-3 `}>
            <button aria-label="Close button">&times;</button>

            <Link
              to="/visa"
              className={` md:text-110  text-gray-400 cursor-pointer hover:text-[#FF4A03] `}
              //   onClick={() => {
              //     setmenuOpen(false);
              //   }}
            >
              Visa
            </Link>
            <Link
              to="/docs"
              className={` md:text-110  text-gray-400 cursor-pointer hover:text-[#FF4A03] `}
            >
              Docs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
