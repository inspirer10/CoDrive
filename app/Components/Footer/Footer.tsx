import React from 'react';
import { BsCarFront, BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';
import {
    FiArrowUpRight,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

import './footer.scss';
import Image from 'next/image';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <section className='footer__contact'>
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
                                    <p>42 Main St, Wroclaw 50-001, Poland</p>
                                    <button
                                        className='footer__map-link'
                                        type='button'
                                    >
                                        Show route <FiArrowUpRight />
                                    </button>
                                </div>
                            </article>
                        </div>
                    </aside>

                    <aside className='footer__contact-right' aria-hidden='true'>
                        <div className='footer__map'>
                            <Image
                                src={'/map.jpg'}
                                height={500}
                                width={600}
                                quality={90}
                                alt='alt'
                            />
                        </div>
                    </aside>
                </section>

                <div className='footer__divider' />

                <section className='footer__main'>
                    <article className='footer__brand'>
                        <div className='footer__logo'>
                            <BsCarFront className='footer__logo-icon' />
                            CoDrive
                        </div>
                        <p>Get updates on new routes and save on fuel.</p>
                        <div className='footer__newsletter'>
                            <input type='email' placeholder='Your email' />
                            <button type='button'>Subscribe</button>
                        </div>
                        <small>
                            By subscribing, you agree to our privacy policy and
                            consent to receive updates.
                        </small>
                    </article>

                    <aside className='footer__links' aria-label='Footer links'>
                        <div className='footer__column'>
                            <h4>Platform</h4>
                            <a className='footer__link' href='#'>
                                Post a listing
                            </a>
                            <a className='footer__link' href='#'>
                                Find a ride
                            </a>
                            <a className='footer__link' href='#'>
                                How it works
                            </a>
                            <a className='footer__link' href='#'>
                                Safety
                            </a>
                            <a className='footer__link' href='#'>
                                Community
                            </a>
                        </div>

                        <div className='footer__column'>
                            <h4>Company</h4>
                            <a className='footer__link' href='#'>
                                About us
                            </a>
                            <a className='footer__link' href='#'>
                                Blog
                            </a>
                            <a className='footer__link' href='#'>
                                Contact
                            </a>
                            <a className='footer__link' href='#'>
                                Careers
                            </a>
                            <a className='footer__link' href='#'>
                                Press
                            </a>
                        </div>

                        <div className='footer__column'>
                            <h4>Follow us</h4>
                            <a className='footer__social' href='#'>
                                <FiFacebook /> Facebook
                            </a>
                            <a className='footer__social' href='#'>
                                <FiInstagram /> Instagram
                            </a>
                            <a className='footer__social' href='#'>
                                <FiTwitter /> X
                            </a>
                            <a className='footer__social' href='#'>
                                <FiLinkedin /> LinkedIn
                            </a>
                            <a className='footer__social' href='#'>
                                <FiYoutube /> YouTube
                            </a>
                        </div>
                    </aside>
                </section>

                <div className='footer__bottom'>
                    <span>© 2026 CoDrive. All rights reserved.</span>
                    <nav className='footer__legal' aria-label='Legal'>
                        <a className='footer__link' href='#'>
                            Privacy policy
                        </a>
                        <a className='footer__link' href='#'>
                            Terms of service
                        </a>
                        <a className='footer__link' href='#'>
                            Cookie settings
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
