import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaArrowRightLong } from 'react-icons/fa6';

import './testimonials.scss';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    commuteFrom: string;
    commuteTo: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        quote: 'Before CoDrive I lost too much time in traffic and parking near the hospital. Now I share one daily ride and arrive calmer for my shift.',
        name: 'Anna Kowalska',
        role: 'Doctor',
        commuteFrom: 'Wroclaw',
        commuteTo: 'Olesnica',
        image: '/testimonials/person2.jpg',
    },
    {
        quote: 'CoDrive gives me a reliable route to the office. I split fuel costs, avoid driving stress, and can prepare for court on the way.',
        name: 'Marek Zielinski',
        role: 'Lawyer',
        commuteFrom: 'Poznan',
        commuteTo: 'Swarzedz',
        image: '/testimonials/person1.jpg',
    },
    {
        quote: 'I teach early classes, so timing matters. With CoDrive I found people on the same schedule and my monthly commute is much cheaper.',
        name: 'Julia Nowak',
        role: 'Teacher',
        commuteFrom: 'Krakow',
        commuteTo: 'Wieliczka',
        image: '/testimonials/person3.jpg',
    },
];

function Testimonials() {
    return (
        <section className='testimonials' id='testimonials'>
            <div className='testimonials__container'>
                <header className='testimonials__header'>
                    <span className='testimonials__eyebrow'>Testimonials</span>
                    <h2>
                        Real commuters. <br /> Real results with CoDrive.
                    </h2>
                    <p className='testimonials__subtitle'>
                        Daily rides to work with less cost, less stress, and
                        better routine.
                    </p>
                </header>

                <div className='testimonials__cards'>
                    {testimonials.map(
                        ({
                            quote,
                            name,
                            role,
                            commuteFrom,
                            commuteTo,
                            image,
                        }: Testimonial) => (
                            <article key={name} className='testimonials__card'>
                                <div
                                    className='testimonials__image'
                                    style={
                                        {
                                            '--testimonial-bg': `url(${image})`,
                                        } as React.CSSProperties
                                    }
                                >
                                    <span className='testimonials__badge'>
                                        {role}
                                    </span>
                                </div>

                                <div className='testimonials__content'>
                                    <p className='testimonials__quote'>
                                        &quot;{quote}&quot;
                                    </p>
                                    <div className='testimonials__footer'>
                                        <div>
                                            <h3 className='testimonials__name'>
                                                {name}
                                            </h3>
                                            <p className='testimonials__role'>
                                                {role}
                                            </p>
                                        </div>
                                        <span className='testimonials__commute'>
                                            <span>{commuteFrom}</span>
                                            <FaArrowRightLong className='testimonials__commute-icon' />
                                            <span>{commuteTo}</span>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
