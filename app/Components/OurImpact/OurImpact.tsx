import React from 'react';
import { Reveal } from '../Reveal/Reveal';

import './ourImpact.scss';

const impactCards = [
    {
        metric: '42',
        suffix: '%',
        description:
            'Average monthly commuting cost reduction reported by active CoDrive riders.',
        action: 'Read more',
    },
    {
        metric: '126',
        suffix: 'K',
        description:
            'Monthly ride searches across daily home-to-work routes on the platform.',
        action: 'Read more',
    },
    {
        metric: '1.8',
        suffix: 'M PLN',
        description:
            'Estimated yearly fuel and parking savings kept in our community budget.',
        action: 'Read more',
    },
];

function OurImpact() {
    return (
        <section className='our-impact' id='impact'>
            <div className='our-impact__shell'>
                <div className='our-impact__panel'>
                    <Reveal width='100%'>
                        <div className='our-impact__top'>
                            <p className='our-impact__eyebrow'>Our Impact</p>
                            <h2 className='our-impact__title'>
                                Boost your commute impact. Elevate your{' '}
                                <span className='our-impact__gradient'>
                                    rider experience
                                </span>{' '}
                                <span>with smarter route matching.</span>
                            </h2>
                        </div>
                    </Reveal>

                    <div className='our-impact__cards'>
                        {impactCards.map(
                            ({ metric, suffix, description, action }, index) => (
                                <Reveal key={description} delay={0.2 + index * 0.1} width='100%'>
                                    <article
                                        className='our-impact__card'
                                    >
                                        <div className='our-impact__metric-wrap'>
                                            <span className='our-impact__metric'>
                                                {metric}
                                            </span>
                                            <span className='our-impact__suffix'>
                                                {suffix}
                                            </span>
                                        </div>
                                        <p className='our-impact__description'>
                                            {description}
                                        </p>
                                        {action ? (
                                            <button
                                                type='button'
                                                className='our-impact__button'
                                            >
                                                {action}
                                            </button>
                                        ) : null}
                                    </article>
                                </Reveal>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurImpact;
