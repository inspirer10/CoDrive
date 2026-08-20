'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsCarFront } from 'react-icons/bs';
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
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
    const menuButtonRef = useRef<HTMLButtonElement>(null);
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

            if (isMobileMenuOpen || currentY <= 0) {
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
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobileMenuOpen]);

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
                        ref={menuButtonRef}
                        type='button'
                        className={
                            isMobileMenuOpen
                                ? 'navbar__menu-btn is-open'
                                : 'navbar__menu-btn'
                        }
                        onClick={toggleMobileMenu}
                        aria-label={
                            isMobileMenuOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-expanded={isMobileMenuOpen}
                        aria-controls='mobile-nav'
                    >
                        {isMobileMenuOpen ? (
                            <FiX className='navbar__menu-icon' />
                        ) : (
                            <FiMenu className='navbar__menu-icon' />
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={
                    isMobileMenuOpen
                        ? 'navbar-mobile-backdrop is-open'
                        : 'navbar-mobile-backdrop'
                }
                aria-hidden='true'
                onClick={closeMobileMenu}
            />

            <aside
                id='mobile-nav'
                className={
                    isMobileMenuOpen ? 'navbar-mobile is-open' : 'navbar-mobile'
                }
                aria-label='Mobile navigation'
                aria-hidden={!isMobileMenuOpen}
            >
                <ul className='navbar-mobile__links'>
                    {navItems.map(({ label, section }) => (
                        <li key={section}>
                            <button
                                type='button'
                                onClick={() => handleSectionRouting(section)}
                            >
                                <span>{label}</span>
                                <FiChevronRight className='navbar-mobile__link-icon' />
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
