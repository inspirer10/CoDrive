'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsCarFront } from 'react-icons/bs';
import { useLenis } from '../LenisProvider/LenisProvider';
import PostRideModal from '../PostRideModal/PostRideModal';

import './navbar.scss';

const navItems = [
    { label: 'About', section: 'about' },
    { label: 'How it Works', section: 'how-it-works' },
    { label: 'Listings', section: 'listings' },
    { label: 'Stories', section: 'stories' },
    { label: 'FAQ', section: 'faq' },
];

function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [isPostRideOpen, setIsPostRideOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const lenis = useLenis();
    const openPostRideModal = useCallback(() => setIsPostRideOpen(true), []);
    const closePostRideModal = useCallback(() => setIsPostRideOpen(false), []);
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    const toggleMobileMenu = useCallback(
        () => setIsMobileMenuOpen((current) => !current),
        [],
    );

    const handleSectionRouting = (section: string) => {
        closeMobileMenu();
        if (lenis) {
            lenis.scrollTo(`#${section}`, {
                duration: 1.2,
            });
        } else {
            document
                .getElementById(section)
                ?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToTop = () => {
        closeMobileMenu();
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

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    const handlePostRideClick = () => {
        closeMobileMenu();
        openPostRideModal();
    };

    const handleLoginClick = () => {
        closeMobileMenu();
    };

    return (
        <>
            <nav className={isHidden ? 'nav--hidden navbar' : 'navbar'}>
                <div className='navbar__left'>
                    <button
                        className='logo'
                        type='button'
                        onClick={handleScrollToTop}
                        aria-label='Scroll to top'
                    >
                        <BsCarFront className='icon' />
                        CoDrive
                    </button>

                    <ul className='navbar__links'>
                        {navItems.map(({ label, section }) => (
                            <li key={section}>
                                <button
                                    type='button'
                                    className='navbar__link-btn'
                                    onClick={() => handleSectionRouting(section)}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='navbar__actions'>
                    <button
                        type='button'
                        className='navbar__login-btn'
                        onClick={handleLoginClick}
                    >
                        Log In
                    </button>

                    <button
                        type='button'
                        className='navbar__post-btn'
                        onClick={handlePostRideClick}
                        aria-haspopup='dialog'
                    >
                        Post a ride
                    </button>

                    <button
                        type='button'
                        className='navbar__menu-btn'
                        onClick={toggleMobileMenu}
                        aria-label='Toggle navigation menu'
                        aria-expanded={isMobileMenuOpen}
                        aria-controls='mobile-nav'
                    >
                        Menu
                    </button>
                </div>
            </nav>

            <aside
                id='mobile-nav'
                className={
                    isMobileMenuOpen ? 'navbar-mobile is-open' : 'navbar-mobile'
                }
                aria-hidden={!isMobileMenuOpen}
            >
                <ul className='navbar-mobile__links'>
                    {navItems.map(({ label, section }) => (
                        <li key={section}>
                            <button
                                type='button'
                                onClick={() => handleSectionRouting(section)}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className='navbar-mobile__actions'>
                    <button
                        type='button'
                        className='navbar-mobile__login-btn'
                        onClick={handleLoginClick}
                    >
                        Log In
                    </button>

                    <button
                        type='button'
                        className='navbar-mobile__post-btn'
                        onClick={handlePostRideClick}
                        aria-haspopup='dialog'
                    >
                        Post a ride
                    </button>
                </div>
            </aside>

            {isPostRideOpen && <PostRideModal onClose={closePostRideModal} />}
        </>
    );
}

export default Navbar;
