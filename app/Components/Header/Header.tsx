import React from 'react';
import './header.scss';
import Image from 'next/image';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__card'>
                    <div className='header__content'>
                        <span className='header__eyebrow'>
                            CoDrive • Commute rides and savings
                        </span>
                        <h1>Share the ride, split the cost</h1>
                        <p className='header__lead'>
                            Search and post shared commute listings. Set the
                            route, times, weekdays, number of seats, and the
                            expected fuel share. Simple, direct, no middlemen.
                        </p>

                        <div className='header__actions'>
                            <button className='btn btn--primary'>
                                Find a ride
                            </button>
                            <button className='btn btn--secondary'>
                                Post a listing
                            </button>
                        </div>

                        <div className='header__details'>
                            <div className='detail'>
                                <span className='detail__label'>
                                    Sample listing
                                </span>
                                <span className='detail__value'>
                                    Berlin → Hamburg • 08:00 • Mon–Fri
                                </span>
                            </div>
                            <div className='detail'>
                                <span className='detail__label'>
                                    What you provide
                                </span>
                                <span className='detail__value'>
                                    return trip (optional), car, seats, cost,
                                    phone, email, name, and photo
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='header__media' aria-hidden='true'>
                        <div className='media__frame'>
                            {/*   <div className='media__photo' /> */}
                            <Image
                                className='media__image'
                                src='/header.jpg'
                                alt='Image'
                                width={600}
                                height={500}
                                quality={90}
                                priority
                            />

                            <div className='media__badge'>
                                Trusted routes in your area
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
