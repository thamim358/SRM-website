import React, { useEffect, useRef, useState } from "react";
import { useActiveMenu } from "react-active-menu";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import WOW from "wow.js";
import logo from "../img/srmvdp logo-0.png";
import "./Header.scss";
function Header() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate(); 
const handleHome = () => {
    navigate("/home");
};
const handleregister = () => {
  navigate("/registration");
};
const handleCommitee = () => {
  navigate("/committee");
};
const handleContact = () => {
  navigate("/contactus");
};
const handlepaper = () => {
  navigate("/paper-submission");
};
const handlepublications = () => {
  navigate("/publications");
};
const handlekeynotes = () => {
  navigate("/keynotes");
};

const handleEvent = () => {
  navigate("/event");
};
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };
  

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="Navbar"
        className="sticky top-0 left-0 right-0 w-full dashboard1 nav-bar sm:w-full z-10 "
      >
        <div className=" mx-5 sm:mx-10 flex items-center lg:mx-8 justify-between py-4 ">
          <div className=" font-bold font-mono text-4xl  wow lightSpeedIn">
            
            <img src={logo} alt="wdwd" className="h-12 w-28"/>
          </div>
          <nav>
            <div className="flex justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white flex justify-end  hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* {isMobileMenuOpen ? ( */}
                    {/* <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    /> */}
                  {/* ) : ( */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  {/* )} */}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "hidden" : "hidden"
              } md:flex md:space-x-5 justify-between items-center `}
            >
              <li>
                <Link
                  className="text-white font-mono hover:text-yellow-400  cursor-pointer"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={handleHome}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-mono hover:text-yellow-400    cursor-pointer"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={handleEvent}
                >
                  IMPORTANT DATES
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-mono hover:text-yellow-400    cursor-pointer"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={handlekeynotes}
                >
                  KEY NOTES
                </Link>
              </li>
              <li>
                <div
                  className="text-white font-mono hover:text-yellow-400    cursor-pointer"
                  onClick={handlepublications}
                >
                  PUBLICATIONS
                </div>
              </li>
              {/* <img src={logo} alt="wdwd" className="h-16 w-16"/> */}
              <li>
                <Link
                  className="text-white font-mono hover:text-yellow-400    cursor-pointer"
                  onClick={handleregister}
                >
                  REGISTRATION
                </Link>
              </li>
              <li>
                <div
                  className="text-white font-mono hover:text-yellow-400   cursor-pointer"
                  onClick={handleCommitee}
                >
                  COMMITTEE
                </div>
              </li>
              <li className="">
                <div
                  className="text-white font-mono hover:text-yellow-400    cursor-pointer"

                  onClick={handlepaper}
                >
                  PAPER SUBMISSION
                </div>
              </li>

              <li className="">
                <Link
                  className="text-white font-mono hover:text-yellow-400    cursor-pointer"
                  to="contactme"
                  spy={true}
                  smooth={true}
                  onClick={handleContact}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0  bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="flex justify-between p-3 ">
          <div className="font-mono font-bold text-3xl pl-4 ">
          <img src={logo} alt="wdwd" className="h-12 w-28"/>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-purple-600   focus:outline-none"
          >
            <svg
              className="w-8 h-8 mx-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="flex flex-col space-y-6 pl-8 mt-7 ">
          <li className="">
            <Link
              className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={() => {
                handleHome();
                setMobileMenuOpen(false);
              }}
            >
           → HOME
            </Link>
          </li>
          <li className="">
            <div
              className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointer"
               onClick={() => {
                handlepublications();
                setMobileMenuOpen(false);
              }}
            >
              → PUBLICATIONS
            </div>
          </li>
          <li>
                <Link
                  className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointerr"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    handleEvent();
                    setMobileMenuOpen(false);
                  }}
                >
                  → IMPORTANT DATES
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointerr"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    handlekeynotes();
                    setMobileMenuOpen(false);
                  }}
                >
                  → KEY NOTES
                </Link>
              </li>
          <li className="">
            <Link
              className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointer"
            
              onClick={() => {
                handleregister();
                setMobileMenuOpen(false);
              }}
            >
             → REGISTRATION
            </Link>
          </li>
          <li className="">
            <div
              className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointer"
              onClick={() => {
                handleCommitee();
                setMobileMenuOpen(false);
              }}
              
            >
           → COMMITTEE
            </div>
          </li>

          <li className="">
            <div
              className="text-white font-mono hover:text-yellow-400 text-2xl font-bold cursor-pointer"
              onClick={() => {
                handlepaper();
                setMobileMenuOpen(false);
              }}
              
            >
             → PAPER SUBMISSION
            </div>
          </li>

          <li className="">
            <Link
              className="text-white font-mono hover:text-yellow-400 text-2xl font-bold  cursor-pointer"
              to="contactme"
              spy={true}
              smooth={true}
              onClick={() => {
                handleContact();
                setMobileMenuOpen(false);
              }}
            >
           → CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      
    </>
  );
}

export default Header;
