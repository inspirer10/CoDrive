import React from 'react';
import {
    FiCheckCircle,
    FiClock,
    FiMapPin,
    FiRepeat,
    FiShield,
    FiTrendingUp,
    FiUsers,
} from 'react-icons/fi';

import './about.scss';

const metrics = [
    {
        value: '18k+',
        label: 'Verified commuters',
        icon: FiUsers,
    },
    {
        value: 'EUR 120',
        label: 'Average monthly savings',
        icon: FiTrendingUp,
    },
    {
        value: '4.9/5',
        label: 'Community rating',
        icon: FiCheckCircle,
    },
];

const trustHighlights = [
    {
        title: 'Profile & vehicle checks',
        description:
            'Phone, email, and document prompts keep every rider accountable.',
        icon: FiShield,
    },
    {
        title: 'Route-first matching',
        description:
            'Find carpools by corridor, pickup flexibility, and weekly cadence.',
        icon: FiMapPin,
    },
    {
        title: 'Flexible commitments',
        description:
            'Set weekly availability, pause anytime, and update plans instantly.',
        icon: FiRepeat,
    },
];

function About() {
    return (
        <section className='about'>
            <div className='about__container'>
                <div className='about__layout'>
                    <div className='about__intro'>
                        <span className='about__eyebrow'>About CoDrive</span>
                        <h2>Commute smarter, together</h2>
                        <p className='about__lead'>
                            CoDrive pairs daily commuters into small, trusted
                            carpools. Keep your routine, split the cost, and
                            make every trip feel lighter.
                        </p>

                        <div className='about__metrics'>
                            {metrics.map(({ value, label, icon: Icon }) => (
                                <div key={label} className='about__metric'>
                                    <span className='about__metric-icon'>
                                        <Icon />
                                    </span>
                                    <div>
                                        <strong>{value}</strong>
                                        <span>{label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='about__actions'>
                            <button className='about__primary' type='button'>
                                Offer a seat
                            </button>
                            <button className='about__ghost' type='button'>
                                See how it works
                            </button>
                        </div>
                    </div>

                    <div className='about__panel'>
                        <div className='about__panel-header'>
                            <span className='about__panel-eyebrow'>
                                Trust & safety
                            </span>
                            <h3>Clear expectations for every ride</h3>
                            <p>
                                Set pickup points, confirm timing, and keep
                                communication in one place.
                            </p>
                        </div>

                        <div className='about__panel-list'>
                            {trustHighlights.map(
                                ({ title, description, icon: Icon }) => (
                                    <div
                                        key={title}
                                        className='about__panel-item'
                                    >
                                        <span className='about__panel-icon'>
                                            <Icon />
                                        </span>
                                        <div>
                                            <h4>{title}</h4>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>

                        <div className='about__note'>
                            <FiClock />
                            <span>
                                Average match time in city corridors: under 10
                                minutes.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
