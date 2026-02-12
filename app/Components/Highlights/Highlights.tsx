import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiRepeat, FiUsers, FiWind } from 'react-icons/fi';

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
                                height={600}
                                quality={90}
                            />
                        </div>
                    </aside>

                    <article className='highlights__content'>
                        <div className='highlights__list'>
                            {highlightItems.map(
                                ({ title, description, icon: Icon }) => (
                                    <div
                                        key={title}
                                        className='highlights__item'
                                    >
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
                                ),
                            )}
                        </div>

                        <div className='highlights__actions'>
                            <button
                                className='highlights__primary'
                                type='button'
                            >
                                Zacznij
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
