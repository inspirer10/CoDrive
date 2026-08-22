'use client';

import { type MouseEvent, useState } from 'react';
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';
import './faq.scss';

const faqData = [
    {
        question: 'How do I post a ride?',
        answer: 'Sign up for an account, fill in your route details, departure time, available seats, and fuel cost expectations. You can specify which days you travel and add your contact information. Your listing goes live immediately.',
    },
    {
        question: 'Is my personal information safe?',
        answer: 'You control what you share. Phone numbers and emails are only visible to matched riders. We recommend meeting in public places and trusting your instincts about potential carpool partners.',
    },
    {
        question: 'How do we handle fuel payments?',
        answer: 'You set the price per passenger when posting your ride. Payments are arranged directly between you and your riders. We suggest cash or digital transfers for simplicity.',
    },
    {
        question: 'Can I change my schedule?',
        answer: 'Yes. Edit your listing anytime to adjust departure times, available seats, or days of travel. Notify your regular riders if you make significant changes to your routine.',
    },
    {
        question: 'What if I need to cancel?',
        answer: 'Contact your riders as soon as possible through the phone number or email they provided. Canceling occasionally is fine, but regular cancellations may affect your reputation on the platform.',
    },
];

function Faq() {
    const [openItem, setOpenItem] = useState<number | null>(0);
    const scrollToSection = useSectionNavigation();

    const toggleItem = (index: number) => {
        setOpenItem((currentItem) =>
            currentItem === index ? null : index,
        );
    };

    const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        scrollToSection('contact');
    };

    return (
        <section className='faq' id='faq'>
            <div className='faq__container'>
                <aside className='faq__left'>
                    <span className='faq__eyebrow'>Help center</span>
                    <h2>Questions, answered.</h2>
                    <p className='subtitle'>
                        Find answers to common questions about using CoDrive
                    </p>
                    <a
                        className='btn'
                        href='#contact'
                        onClick={handleContactClick}
                    >
                        Contact us
                        <FiArrowUpRight aria-hidden='true' />
                    </a>
                </aside>

                <div className='faq__right'>
                    {faqData.map(({ question, answer }, index) => (
                        <article
                            key={question}
                            className={`faq__item${
                                openItem === index ? ' faq__item--open' : ''
                            }`}
                        >
                            <h3 className='faq__question'>
                                <button
                                    type='button'
                                    id={`faq-question-${index}`}
                                    aria-expanded={openItem === index}
                                    aria-controls={`faq-answer-${index}`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <span>{question}</span>
                                    <span
                                        className='faq__icon'
                                        aria-hidden='true'
                                    >
                                        {openItem === index ? (
                                            <FiMinus />
                                        ) : (
                                            <FiPlus />
                                        )}
                                    </span>
                                </button>
                            </h3>

                            <div
                                className='faq__panel'
                                id={`faq-answer-${index}`}
                                role='region'
                                aria-labelledby={`faq-question-${index}`}
                                aria-hidden={openItem !== index}
                            >
                                <div className='faq__panel-inner'>
                                    <p className='faq__answer'>{answer}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
