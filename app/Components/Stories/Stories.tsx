import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { Reveal } from '../Reveal/Reveal';

import './stories.scss';

const stories = [
    {
        tag: 'Savings',
        readTime: '4 min read',
        title: 'How much can you save monthly',
        description:
            'Calculate your fuel costs and discover real savings potential.',
        image: '/how-it-works-1.jpg',
    },
    {
        tag: 'Community',
        readTime: '6 min read',
        title: 'Building trust between commuters',
        description: 'Meet the people making carpooling work in your area.',
        image: '/how-it-works-2.jpg',
    },
    {
        tag: 'Routes',
        readTime: '5 min read',
        title: 'Popular commute routes this month',
        description: 'See which routes are trending and find your match.',
        image: '/how-it-works-3.jpg',
    },
];

function Stories() {
    return (
        <section className='stories' id='stories'>
            <div className='stories__container'>
                <Reveal width='100%'>
                    <header className='stories__header'>
                        <span className='stories__eyebrow'>Stories</span>
                        <h2>Read from the road</h2>
                        <p className='stories__subtitle'>
                            Tips, savings, and real commuter experiences shared
                            weekly
                        </p>
                    </header>
                </Reveal>

                <div className='stories__cards'>
                    {stories.map(
                        ({ tag, readTime, title, description, image }, index) => (
                            <Reveal key={title} delay={0.2 + index * 0.1} >
                                <article className='stories__card'>
                                    <div className='stories__image'>
                                        <Image
                                            src={image}
                                            alt={title}
                                            width={600}
                                            height={420}
                                        />
                                    </div>

                                    <div className='stories__meta'>
                                        <span className='stories__tag'>{tag}</span>
                                        <span className='stories__read'>
                                            {readTime}
                                        </span>
                                    </div>

                                    <h3 className='stories__title'>{title}</h3>
                                    <p className='stories__text'>{description}</p>

                                    <button className='stories__link' type='button'>
                                        Read more <FiArrowUpRight />
                                    </button>
                                </article>
                            </Reveal>
                        ),
                    )}
                </div>

                <div className='stories__actions'>
                    <button className='stories__view' type='button'>
                        View all <FiArrowUpRight aria-hidden='true' />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Stories;
