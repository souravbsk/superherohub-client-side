import React from "react";
import { GiStarfighter } from "react-icons/gi";
import { Link } from "react-router-dom";
import {FiMail, FiMapPin, FiPhoneCall} from "react-icons/fi"
import {FaGoogle, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="">
     <div className=" border-t border-b py-20">
     <footer className="footer container text-white">
        <div>
          <Link className="normal-case text-xl">
            <p className="text-5xl">
              <GiStarfighter></GiStarfighter>
            </p>
            <h4>Super Hero Hub</h4>
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <ul className="flex items-center gap-3">
            <Link><li className="px-3 rounded-full py-3 glass "><FaGoogle></FaGoogle></li></Link>
            <Link><li className="px-3 rounded-full py-3 glass "><FaTwitter></FaTwitter></li></Link>
            <Link><li className="px-3 rounded-full py-3 glass "><FaInstagram></FaInstagram></li></Link>
            <Link><li className="px-3 rounded-full py-3 glass "><FaLinkedin></FaLinkedin></li></Link>
          </ul>
        </div>
        <div>
          <span className="footer-title">Heros</span>
          <a className="link link-hover">Avengers</a>
          <a className="link link-hover">Cosmic</a>
          <a className="link link-hover">Ben 10</a>
          <a className="link link-hover">Star Wars</a>
        </div>
        <div>
          <span className="footer-title">NavLink</span>
          <a className="link link-hover">All Heros</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <ul className="text-white space-y-4">
            <li className="flex items-center gap-2">
            <FiMail></FiMail>
              <Link to="#">testyFood@gamil.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall></FiPhoneCall>
              <Link to="#">+88015525665</Link>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin></FiMapPin>
              <Link to="#">32, new polly kishoreganj</Link>
            </li>
          </ul>
        </div>
      </footer>
     </div>
      <div className="text-center  text-white py-5">
        <p>Copyright © 2023 - All right reserved by Super Hero Hub || sourav bsk</p>
      </div>
    </div>
  );
};

export default Footer;
