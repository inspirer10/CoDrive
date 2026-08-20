import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiRepeat, FiUsers, FiWind } from 'react-icons/fi';
import { Reveal } from '../Reveal/Reveal';

import './highlights.scss';

const highlightItems = [
    {
        title: 'Spend less together',
        description:
            'Sharing fuel costs lowers every passenger expense. Save meaningful amounts each month.',
        icon: FiRepeat,
    },
    {
        title: 'Cleaner air',
        description:
            'Fewer cars on the road means fewer emissions. Every shared ride helps the planet.',
        icon: FiWind,
    },
    {
        title: 'New connections',
        description:
            'Daily commutes bring people together. Meet neighbors and coworkers along the way.',
        icon: FiUsers,
    },
];

function Highlights() {
    return (
        <section className='highlights' id='highlights'>
            <div className='highlights__container'>
                <div className='highlights__layout'>
                    <aside className='highlights__media'>
                        <div className='highlights__frame'>
                            <Image
                                src='/footer.jpg'
                                alt='Mapa tras dojazdu'
                                width={600}
                                height={750}
                                quality={90}
                            />
                            <div className='highlights__media-note'>
                                <span>Built for the everyday route</span>
                                <strong>Same commute. Better return.</strong>
                            </div>
                        </div>
                    </aside>

                    <article className='highlights__content'>
                        <Reveal width='100%'>
                            <div className='highlights__intro'>
                                <span className='highlights__eyebrow'>
                                    Why carpool with CoDrive
                                </span>
                                <h2>Make the same commute work harder.</h2>
                                <p className='highlights__lead'>
                                    Turn an everyday route into lower costs,
                                    cleaner streets, and a more connected
                                    routine.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal width='100%'>
                            <div className='highlights__list'>
                                {highlightItems.map(
                                    (
                                        { title, description, icon: Icon },
                                        index,
                                    ) => (
                                        <Reveal
                                            key={title}
                                            delay={0.2 + index * 0.1}
                                            width='100%'
                                        >
                                            <div className='highlights__item'>
                                                <span className='highlights__index'>
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>
                                                <span className='highlights__icon'>
                                                    <Icon />
                                                </span>
                                                <div className='highlights__copy'>
                                                    <h3 className='highlights__title'>
                                                        {title}
                                                    </h3>
                                                    <p className='highlights__text'>
                                                        {description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ),
                                )}
                            </div>
                        </Reveal>

                        <div className='highlights__actions'>
                            <button
                                className='highlights__primary'
                                type='button'
                            >
                                Get started
                            </button>
                            <button className='highlights__link' type='button'>
                                Learn more <FiArrowUpRight />
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
