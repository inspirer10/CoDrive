import React from 'react';

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

                    <div className='our-impact__cards'>
                        {impactCards.map(
                            ({ metric, suffix, description, action }) => (
                                <article
                                    key={description}
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
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurImpact;
