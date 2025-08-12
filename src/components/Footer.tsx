import React from 'react';
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      <div className="footer-col">
        <h3 className="footer-title">NexWear</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Job Openings</a></li>
          <li><a href="#">Subscribe</a></li>
          <li><a href="#">Student Discount</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">Customer Service</h3>
        <ul>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Q &amp; A</a></li>
          <li><a href="#">Return and Refund</a></li>
          <li><a href="#">Payment Method</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">Privacy and Legal</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">About Cookies</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">Social</h3>
        <ul className="footer-social">
          <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="#"><FaInstagram /> Instagram</a></li>
          <li><a href="#"><FaTiktok /> TikTok</a></li>
          <li><a href="#"><FaFacebook /> Facebook</a></li>
        </ul>
      </div>
    </div>
    <p style={{ fontFamily: 'var(--font-montserrat), Arial, Helvetica, sans-serif', textAlign: 'center', fontWeight: 'bold', margin: '3rem 0 1rem 0' ,fontSize: '1.5rem'}}>NexWear</p>
    <p className="footer-text">&copy; {new Date().getFullYear()} NexWear. All rights reserved.</p>
  </footer>
);

export default Footer;