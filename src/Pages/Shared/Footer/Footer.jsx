import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="flex  text-center">
                <div className="bg-[#1F2937] text-white text-center w-full py-16">
                    <h1 className="text-3xl uppercase">contact us</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] text-white w-full py-16">
                    <h1 className="text-3xl uppercase">Follow us</h1>
                    <p>Join us on social media</p>
                </div>
            </div>
            <div className="bg-cinder w-full text-center text-xl text-white">
                <p className="py-3">Copyright © BistroBoss. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
