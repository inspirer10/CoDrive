import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import './howItWorks.scss';
import Image from 'next/image';

const steps = [
    {
        label: 'Sign up',
        title: 'Create your account',
        description:
            'Register with your basic information to get started on CoDrive.',
        link: 'Explore',
        image: '/how-it-works-1.jpg',
    },
    {
        label: 'Search',
        title: 'Browse available rides or post your own announcement',
        description: 'Explore',
        link: 'Connect',
        image: '/how-it-works-2.jpg',
    },
    {
        label: 'Contact drivers or passengers directly',
        title: 'Use phone, email, or message to arrange your carpool',
        description: 'Connect',
        link: 'Commute',
        image: '/how-it-works-3.jpg',
    },
    {
        label: 'Start your shared journey',
        title: 'Meet your carpool partner and enjoy savings on every trip',
        description: 'Start now',
        link: 'Button',
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
                    {steps.map(({ label, title, description, image, link }) => (
                        <article key={title} className='how-it-works__card'>
                            <div className='how-it-works__image'>
                                <Image
                                    src={image}
                                    alt={title}
                                    width={400}
                                    height={300}
                                />
                            </div>

                            <span className='how-it-works__label'>{label}</span>
                            <h3 className='how-it-works__title'>{title}</h3>
                            <p className='how-it-works__text'>{description}</p>
                            <button
                                className='how-it-works__link'
                                type='button'
                            >
                                {link} <FiArrowUpRight />
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
