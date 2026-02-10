import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from "react-router"; 

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10">

            <nav className="grid grid-flow-col gap-4 text-lg">
                <Link to ="/about" className="link link-hover">About</Link>
                <Link to = "/contact" className="link link-hover">Contact</Link>
                <Link to ="/courses" className="link link-hover">Courses</Link>
                
                <Link to="/blogs" className="link link-hover">Blogs</Link>
            </nav>

            <nav>
                <div className="grid grid-flow-col gap-6 text-2xl">
                    <a href="https://www.linkedin.com/" 
                    className="hover:text-white hover:scale-110 transition-all duration-200">
                        <FaLinkedin />
                    </a>

                    <a href="https://www.facebook.com/" 
                    className="hover:text-white hover:scale-110 transition-all duration-200">
                        <FaFacebook />
                    </a>

                    <a href="https://x.com/?lang=en" 
                    className="hover:text-white hover:scale-110 transition-all duration-200">
                        <FaXTwitter />
                    </a>

                    <a href="https://www.youtube.com/" 
                    className="hover:text-white hover:scale-110 transition-all duration-200">
                        <FaYoutube />
                    </a>
                </div>
            </nav>

            <aside className="text-sm opacity-80">
                <p>Copyright © 2025 - All rights reserved by CoDivas Ltd.</p>
            </aside>

        </footer>
    );
};

export default Footer;