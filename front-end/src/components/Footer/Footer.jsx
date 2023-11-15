import React from "react";
import "./Footer.css";
import { facebookLogo, instagramLogo, twitterLogo } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="" />
              </a>
            </div>
            <div className="copyright">
              This website is designed by GTCoding Ⓒ 2023
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#" id="">
                  contact@email.com
                </a>
              </li>
              <li>
                <a href="#" id="">
                  +1 999 9999 999
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright mobile">
            This website is designed by GTCoding Ⓒ 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
