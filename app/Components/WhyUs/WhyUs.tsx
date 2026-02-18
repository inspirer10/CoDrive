import React from 'react';
import { FiArrowUpRight, FiBox } from 'react-icons/fi';

import './whyUs.scss';

const features = [
    {
        title: 'Post your listing in minutes',
        description:
            'Set the route, times, and weekdays. Add a photo and your contact details.',
        link: 'Learn more',
        image: '/features1.jpg',
    },
    {
        title: 'Filter rides by your needs',
        description:
            'Search by route, departure time, and weekdays. Find the perfect ride.',
        link: 'Learn more',
        image: '/features2.jpg',
    },
    {
        title: 'Secure connections between drivers',
        description:
            'Profile verification and user ratings. Share the road with trusted people.',
        link: 'Learn more',
        image: '/features3.jpg',
    },
];

function WhyUs() {
    return (
        <section className='why-us' id='about'>
            <div className='why-us__container'>
                <header className='why-us__header'>
                    <span className='why-us__eyebrow'>Features</span>
                    <h2>Everything you need</h2>
                    <p className='why-us__subtitle'>
                        Simple tools to manage shared commutes.
                    </p>
                </header>

                <div className='why-us__cards'>
                    {features.map(({ title, description, link, image }) => (
                        <article
                            key={title}
                            className='why-us__card'
                            style={
                                {
                                    '--why-us-bg': `url(${image})`,
                                } as React.CSSProperties
                            }
                        >
                            <div className='why-us__card-inner'>
                                <span className='why-us__icon'>
                                    <FiBox />
                                </span>
                                <h3 className='why-us__title'>{title}</h3>
                                <p className='why-us__text'>{description}</p>
                                <button className='why-us__link' type='button'>
                                    {link} <FiArrowUpRight />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
