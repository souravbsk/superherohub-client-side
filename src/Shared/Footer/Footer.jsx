import React from "react";
import { GiStarfighter } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black">
      <footer className="footer py-28 container text-white">
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
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center text-white pb-5">
        <p>Copyright © 2023 - All right reserved by Super Hero Hub</p>
      </div>
    </div>
  );
};

export default Footer;
