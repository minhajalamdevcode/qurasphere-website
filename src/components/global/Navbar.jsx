import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function Navbar() {
  const [show, setShow] = useState(false);
  const navLinks = useRef(null);
  const openNavLinks = useRef(null);
  const closeNavLinks = useRef(null);
  const home = useRef(null);
  const servies = useRef(null);
  const caseStudies = useRef(null);
  const ourTeams = useRef(null);
  const blog = useRef(null);
  const aboutUs = useRef(null);
  const contactUs = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Only trigger for mobile

    const navItems = [
      home.current,
      servies.current,
      caseStudies.current,
      ourTeams.current,
      blog.current,
      aboutUs.current,
      contactUs.current,
    ];

    const tl = gsap.timeline({ defaults: { ease: 'expo.inOut' } });

    if (show) {
      // Slide nav in
      tl.to(navLinks.current, {
        translateX: 0,
        opacity: 1,
        duration: 1,
        // display: 'none',
      });

      // Then animate nav items
      tl.to(
        navItems,
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
        },
        '-=0.5'
      ); // Start slightly earlier for smooth overlap
    } else {
      tl.to(document.querySelector('body'), {
        overflowX: 'hidden',
      });

      // First hide nav items
      tl.to(navItems, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });

      // Then slide nav out
      tl.to(
        navLinks.current,
        {
          translateX: '100%',
          opacity: 0,
          duration: 1,
          // display: 'flex'
        },
        '-=0.4'
      ); // Overlap for smooth exit
    }

    // Optional: Add cleanup or media query listener if responsive behavior is needed in future
  }, [show]); // 👈 Always pass dependencies to useEffect

  return (
    
    <div className=" sticky top-0 z-50 backdrop-blur-md bg-blue-50 ">
      <nav
        id="navbar"
        className="h-20 flex items-center justify-between px-2 sm:px-8 max-w-[1280px] mx-auto"
      >
        <Link
          to={'/'}
          id="logo"
          className="flex items-center gap-1 md:pl-2 pl-2"
        >
          <img src="logo.png" alt="logo" className="w-10" />
          <h1 className="hidden lg:block text-xl pl-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Qurasphere
          </h1>
        </Link>

        <ul
          ref={navLinks}
          id="nav-links"
          className="fixed lg:static top-0 right-0 h-screen lg:h-auto w-[75%] lg:w-auto bg-white lg:bg-[#eff6ff] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 backdrop-blur-[16px] backdrop-saturate-[180%] translate-x-full lg:translate-x-0 z-[99]"
        >
          <li ref={closeNavLinks} onClick={() => setShow((prev) => !prev)}>
            <a href="#">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 h-20 mr-2 sm:mr-8 cursor-pointer lg:hidden"
              >
                {' '}
                <path
                  d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
                  fill="#000000"
                />
              </svg>
            </a>
          </li>
          <li ref={home}>
            <Link
              to="/"
              className="px-4 py-2 text-[15px] font-semibold hover:text-blue-600 capitalize"
              onClick={() => setShow(false)}
            >
              Home
            </Link>
          </li>
          <li ref={servies} onClick={() => setShow(false)}>
            <Link
              to="/services"
              className="px-4 py-2 text-[15px] font-semibold hover:text-blue-600 capitalize"
            >
              Services
            </Link>
          </li>
          {/* <li ref={aboutUs}>
            <Link to="/our-work" className="px-4 py-2 text-[15px]  font-semibold hover:text-blue-600 capitalize">
              Our Work
            </Link>
          </li> */}
          <li ref={aboutUs} onClick={() => setShow(false)}>
            <Link
              to="/about-us"
              className="px-4 py-2 text-[15px]  font-semibold hover:text-blue-600 capitalize"
            >
              About Us
            </Link>
          </li>
          <li ref={contactUs} onClick={() => setShow(false)}>
            <Link
              to="/contact-us"
              className="px-4 py-2 text-[15px] font-semibold hover:text-blue-600 capitalize"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div
          ref={openNavLinks}
          id="hamburger"
          className="lg:hidden cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z"
              fill="#212121"
            />
          </svg>
        </div>
      </nav>
    </div>
    
    
  );
}
export default Navbar;
