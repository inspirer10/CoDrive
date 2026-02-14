'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsCarFront } from 'react-icons/bs';
import { useLenis } from '../LenisProvider/LenisProvider';
import PostRideModal from '../PostRideModal/PostRideModal';

import './navbar.scss';

function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [isPostRideOpen, setIsPostRideOpen] = useState(false);
    const lastScrollY = useRef(0);
    const lenis = useLenis();
    const openPostRideModal = useCallback(() => setIsPostRideOpen(true), []);
    const closePostRideModal = useCallback(() => setIsPostRideOpen(false), []);

    const handleSectionRouting = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        section: string,
    ) => {
        e.preventDefault();

        if (lenis) {
            lenis.scrollTo(`#${section}`, {
                //offset: -80, // Offset for fixed navbar height
                duration: 1.2,
            });
        } else {
            // Fallback if Lenis is not ready
            document
                .getElementById(section)
                ?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

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
        <>
            <nav className={isHidden ? 'nav--hidden navbar' : 'navbar'}>
                <p className='logo' onClick={handleScrollToTop}>
                    <BsCarFront className='icon' />
                    CoDrive
                </p>

                <ul>
                    <li onClick={(e) => handleSectionRouting(e, 'about')}>
                        About
                    </li>
                    <li onClick={(e) => handleSectionRouting(e, 'how-it-works')}>
                        How it Works
                    </li>
                    <li onClick={(e) => handleSectionRouting(e, 'listings')}>
                        Listings
                    </li>
                    <li onClick={(e) => handleSectionRouting(e, 'stories')}>
                        Stories
                    </li>
                    <li onClick={(e) => handleSectionRouting(e, 'faq')}>FAQ</li>
                </ul>

                <button
                    type='button'
                    onClick={openPostRideModal}
                    aria-haspopup='dialog'
                >
                    Post a ride
                </button>
            </nav>

            {isPostRideOpen && <PostRideModal onClose={closePostRideModal} />}
        </>
    );
}

export default Navbar;
