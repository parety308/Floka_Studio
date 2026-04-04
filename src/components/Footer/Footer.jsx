import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center border text-gray-700 p-4 text-xl font-semibold">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Case-Themes</p>
            </aside>
        </footer>
    );
};

export default Footer;