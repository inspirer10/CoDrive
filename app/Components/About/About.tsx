import React from 'react';
import {
    FiMapPin,
    FiNavigation,
    FiSearch,
    FiUsers,
    FiDollarSign,
} from 'react-icons/fi';
import { LuLeaf } from 'react-icons/lu';

import './about.scss';

function About() {
    return (
        <section className='about'>
            <div className='about__container'>
                <div className='about__content'>
                    <h2>
                        Find a carpool partner
                        <br />
                        and save on commutes
                    </h2>
                    <p className='about__subtitle'>
                        Join thousands of people who share the cost of getting
                        to work every day
                    </p>

                    <div className='about__search'>
                        <label className='about__field'>
                            <FiMapPin className='about__icon' />
                            <input
                                type='text'
                                placeholder='From? (e.g., Wroclaw)'
                            />
                        </label>
                        <label className='about__field'>
                            <FiNavigation className='about__icon' />
                            <input
                                type='text'
                                placeholder='To? (e.g., Leszno)'
                            />
                        </label>
                        <button className='about__btn' type='button'>
                            <FiSearch />
                            Search
                        </button>
                    </div>

                    <div className='about__stats'>
                        <div className='about__stat'>
                            <span className='about__badge'>
                                <FiUsers />
                            </span>
                            <div>
                                <strong>2,500+</strong>
                                <p>Active users</p>
                            </div>
                        </div>
                        <div className='about__stat'>
                            <span className='about__badge'>
                                <FiDollarSign />
                            </span>
                            <div>
                                <strong>350 PLN</strong>
                                <p>Average savings / month</p>
                            </div>
                        </div>
                        <div className='about__stat'>
                            <span className='about__badge'>
                                <LuLeaf />
                            </span>
                            <div>
                                <strong>-45%</strong>
                                <p>CO2 emissions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
