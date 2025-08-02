import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
     

      <div className="bg-zinc-900 py-8 text-white">
        <footer className="max-w-screen-xl mx-auto px-8 flex gap-8 flex-wrap">
          <div className="w-full lg:w-fit flex-grow">
            <a href="#" className="flex items-center gap-4">
              <img src="logo.png" alt="" className="w-10" />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                QuraSphere
              </h2>
            </a>
            <address className="mt-2 text-zinc-400 not-italic">
              Ranchi, Jharkhand, 834001
            </address>
            <div className="mt-4 flex gap-6">
              <a href="https://www.facebook.com/people/Qurasphere/61577187622440/">
                <FaFacebookF className="text-zinc-400 text-xl" />
              </a>
              <a href="https://x.com/qurasphere">
                <FaXTwitter className="text-zinc-400 text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/qurasphere/">
                <FaLinkedinIn className="text-zinc-400 text-xl" />
              </a>
              <a href="https://www.instagram.com/qurasphere/">
                <FaInstagram className="text-zinc-400 text-xl" />
              </a>
            </div>
          </div>
          <ul className="text-gray-400 flex flex-col gap-2 w-fit flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <li>
              <a href="#" target="_blank">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Website Development
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Drupal Development
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                WordPress Development
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                API Development
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Software Development
              </a>
            </li>
          </ul>
          <ul className="text-gray-400 flex flex-col gap-2 w-fit flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-white">Site Map</h3>
            <li>
              <a href="#" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Services
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                About Us
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Contact Us
              </a>
            </li>
          </ul>
        </footer>
        <div className="w-full h-[1px] bg-zinc-600 mt-12"></div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-center max-w-screen-xl mx-auto pt-6 px-8 text-zinc-400">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
          </ul>
          <div>© 2025 Qurasphere. All rights reserved.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
