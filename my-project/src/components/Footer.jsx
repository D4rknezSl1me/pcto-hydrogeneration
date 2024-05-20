
import React from 'react';
import './design/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Email: @email.com</p>
            </div>
            <div className="footer-bottom">
                <p className="cookies" style={{ marginInlineStart: '10vh' }}>Cookies</p>
                <p className="copyright">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;