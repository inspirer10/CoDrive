import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import './howItWorks.scss';
import Image from 'next/image';

const steps = [
    {
        label: 'Sign up',
        title: 'Create your account',
        description:
            'Register in seconds, set your route preferences, and get ready to match with commuters nearby.',
        link: 'Explore',
        image: '/how-it-works-1.jpg',
    },
    {
        label: 'Search rides',
        title: 'Browse rides or post your route',
        description:
            'Check available rides on your schedule or publish your own daily commute in just a few clicks.',
        link: 'Browse',
        image: '/how-it-works-2.jpg',
    },
    {
        label: 'Connect',
        title: 'Contact drivers or passengers directly',
        description:
            'Use phone, email, or messages to confirm timing, meeting point, and trip details before departure.',
        link: 'Commute',
        image: '/how-it-works-3.jpg',
    },
    {
        label: 'Commute',
        title: 'Start your shared journey',
        description:
            'Meet your carpool partner, ride together, and enjoy lower fuel and parking costs every week.',
        link: 'Start now',
        image: '/how-it-works-4.jpg',
    },
];

function HowItWorks() {
    return (
        <section className='how-it-works' id='how-it-works'>
            <div className='how-it-works__container'>
                <header className='how-it-works__header'>
                    <span className='how-it-works__eyebrow'>
                        Getting started
                    </span>
                    <h2>How It Works</h2>
                    <p className='how-it-works__subtitle'>
                        Four simple steps to find or share your commute
                    </p>
                </header>

                <div className='how-it-works__cards'>
                    {steps.map(
                        ({ label, title, description, image, link }) => (
                            <article key={title} className='how-it-works__card'>
                                <div className='how-it-works__content'>
                                    <span className='how-it-works__label'>
                                        {label}
                                    </span>
                                    <h3 className='how-it-works__title'>
                                        {title}
                                    </h3>
                                    <p className='how-it-works__text'>
                                        {description}
                                    </p>
                                    <button
                                        className='how-it-works__link'
                                        type='button'
                                    >
                                        {link} <FiArrowUpRight />
                                    </button>
                                </div>

                                <div className='how-it-works__image'>
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={500}
                                        height={420}
                                    />
                                </div>
                            </article>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
