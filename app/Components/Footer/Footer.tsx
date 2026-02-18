'use client';

import React, { FormEvent, useState } from 'react';
import { BsCarFront, BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
import {
    FiArrowUpRight,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';
import Image from 'next/image';

import './footer.scss';

const officeAddress = '42 Main St, Wroclaw 50-001, Poland';
const officeRouteUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
const subscriberStorageKey = 'codrive-newsletter-subscribers';

function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterMessage, setNewsletterMessage] = useState('');

    const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const normalizedEmail = newsletterEmail.trim().toLowerCase();
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

        if (!isEmailValid) {
            setNewsletterMessage('Please enter a valid email address.');
            return;
        }

        const existingSubscribersRaw = localStorage.getItem(subscriberStorageKey);
        const existingSubscribers = existingSubscribersRaw
            ? (JSON.parse(existingSubscribersRaw) as string[])
            : [];

        if (existingSubscribers.includes(normalizedEmail)) {
            setNewsletterMessage('This email is already subscribed.');
            return;
        }

        const nextSubscribers = [...existingSubscribers, normalizedEmail];
        localStorage.setItem(
            subscriberStorageKey,
            JSON.stringify(nextSubscribers),
        );
        setNewsletterEmail('');
        setNewsletterMessage('Subscribed. Saved locally for portfolio demo.');
    };

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <section className='footer__contact' id='contact'>
                    <aside className='footer__contact-left'>
                        <span className='footer__eyebrow'>Contact</span>
                        <h2>Get in touch with us</h2>
                        <p className='footer__lead'>
                            Have questions or need help with the platform?
                        </p>

                        <div className='footer__contact-list'>
                            <article className='footer__contact-item'>
                                <BsEnvelope className='icon' />

                                <div className='footer__contact-body'>
                                    <strong>Email</strong>
                                    <p>Write to us</p>
                                    <a
                                        className='footer__link'
                                        href='mailto:support@carpoolshare.pl'
                                    >
                                        support@carpoolshare.pl
                                    </a>
                                </div>
                            </article>

                            <article className='footer__contact-item'>
                                <BsTelephone className='icon' />

                                <div className='footer__contact-body'>
                                    <strong>Phone</strong>
                                    <p>Call us</p>
                                    <a
                                        className='footer__link'
                                        href='tel:+48123456789'
                                    >
                                        +48 (12) 345-6789
                                    </a>
                                </div>
                            </article>

                            <article className='footer__contact-item'>
                                <BsGeoAlt className='icon' />

                                <div className='footer__contact-body'>
                                    <strong>Office</strong>
                                    <p>{officeAddress}</p>
                                    <a
                                        className='footer__map-link'
                                        href={officeRouteUrl}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Show route <FiArrowUpRight />
                                    </a>
                                </div>
                            </article>
                        </div>
                    </aside>

                    <aside className='footer__contact-right' aria-hidden='true'>
                        <div className='footer__map'>
                            <Image
                                src='/map.jpg'
                                height={500}
                                width={600}
                                quality={90}
                                alt='Map preview with CoDrive office location in Wroclaw'
                            />
                        </div>
                    </aside>
                </section>

                <div className='footer__divider' />

                <section className='footer__main'>
                    <article className='footer__brand'>
                        <a className='footer__logo' href='#top'>
                            <BsCarFront className='footer__logo-icon' />
                            CoDrive
                        </a>
                        <p>Get updates on new routes and save on fuel.</p>
                        <form
                            className='footer__newsletter'
                            onSubmit={handleNewsletterSubmit}
                        >
                            <input
                                type='email'
                                placeholder='Your email'
                                value={newsletterEmail}
                                onChange={(event) =>
                                    setNewsletterEmail(event.target.value)
                                }
                                required
                            />
                            <button type='submit'>Subscribe</button>
                        </form>
                        {newsletterMessage && (
                            <p
                                className='footer__newsletter-status'
                                role='status'
                                aria-live='polite'
                            >
                                {newsletterMessage}
                            </p>
                        )}
                        <small>
                            By subscribing, you agree to our privacy policy and
                            consent to receive updates.
                        </small>
                    </article>

                    <aside className='footer__links' aria-label='Footer links'>
                        <div className='footer__column'>
                            <h4>Platform</h4>
                            <a className='footer__link' href='#listings'>
                                Post a listing
                            </a>
                            <a className='footer__link' href='#listings'>
                                Find a ride
                            </a>
                            <a className='footer__link' href='#how-it-works'>
                                How it works
                            </a>
                            <a className='footer__link' href='#faq'>
                                Safety
                            </a>
                            <a className='footer__link' href='#stories'>
                                Community
                            </a>
                        </div>

                        <div className='footer__column'>
                            <h4>Company</h4>
                            <a className='footer__link' href='#about'>
                                About us
                            </a>
                            <a className='footer__link' href='#stories'>
                                Blog
                            </a>
                            <a className='footer__link' href='#contact'>
                                Contact
                            </a>
                            <a
                                className='footer__link'
                                href='mailto:careers@carpoolshare.pl'
                            >
                                Careers
                            </a>
                            <a
                                className='footer__link'
                                href='mailto:press@carpoolshare.pl'
                            >
                                Press
                            </a>
                        </div>

                        <div className='footer__column'>
                            <h4>Follow us</h4>
                            <a
                                className='footer__social'
                                href='https://www.facebook.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FiFacebook /> Facebook
                            </a>
                            <a
                                className='footer__social'
                                href='https://www.instagram.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FiInstagram /> Instagram
                            </a>
                            <a
                                className='footer__social'
                                href='https://twitter.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FiTwitter /> X
                            </a>
                            <a
                                className='footer__social'
                                href='https://www.linkedin.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FiLinkedin /> LinkedIn
                            </a>
                            <a
                                className='footer__social'
                                href='https://www.youtube.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FiYoutube /> YouTube
                            </a>
                        </div>
                    </aside>
                </section>

                <div className='footer__bottom'>
                    <span>&copy; 2026 CoDrive. All rights reserved.</span>
                    <nav className='footer__legal' aria-label='Legal'>
                        <a className='footer__link' href='/privacy-policy'>
                            Privacy policy
                        </a>
                        <a className='footer__link' href='/terms-of-service'>
                            Terms of service
                        </a>
                        <a className='footer__link' href='/cookie-settings'>
                            Cookie settings
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
