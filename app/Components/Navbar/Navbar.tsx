'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BsCarFront } from 'react-icons/bs';

import './navbar.scss';

function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const onScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;

            if (currentY <= 0) {
                setIsHidden(false);
            } else if (delta > 5) {
                setIsHidden(true);
            } else if (delta < -5) {
                setIsHidden(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={isHidden ? 'nav--hidden navbar' : 'navbar'}>
            <p className='logo'>
                <BsCarFront className='icon' />
                CoDrive
            </p>

            <ul>
                <li>About</li>
                <li>Listings</li>
                <li>How it Works</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>

            <button>Post a ride</button>
        </nav>
    );
}

export default Navbar;
