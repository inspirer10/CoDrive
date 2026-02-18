import React from 'react';
import Image from 'next/image';
import { BsCarFront } from 'react-icons/bs';

import './header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__card'>
                    <div className='header__content'>
                        <span className='header__eyebrow'>
                            CoDrive • Commute daily rides and savings
                        </span>
                        <h1>
                            Meet <span className='company-name'>CoDrive</span>:
                            <br />
                            Plan, share the ride and{' '}
                            <span>split the costs</span>
                        </h1>
                        <p className='header__lead'>
                            Find or post commute rides in seconds, match with
                            people on your route, and keep every trip organized
                            in one place. Simple, direct, no middlemen.
                        </p>

                        <div className='header__actions'>
                            <button className='btn btn--primary'>
                                Find a ride
                            </button>
                            <button className='btn btn--secondary'>
                                Post a listing
                            </button>
                        </div>
                    </div>

                    <div className='header__media'>
                        <Image
                            className='media__image'
                            src='/test3.jpg'
                            alt='People sharing a daily commute ride'
                            width={750}
                            height={750}
                            quality={90}
                            priority
                        />

                        <div className='media__badge'>
                            <span className='media__badge-icon'>
                                <BsCarFront />
                            </span>
                            <span className='media__badge-copy'>
                                <span className='media__badge-brand'>
                                    CoDrive
                                </span>
                                <span className='media__badge-message'>
                                    New ride request on your route
                                </span>
                            </span>
                            <span className='media__badge-time'>just now</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
