'use client';

import React from 'react';
import './faq.scss';

const faqData = [
    {
        question: 'How do I post a ride',
        answer: 'Sign up for an account, fill in your route details, departure time, available seats, and fuel cost expectations. You can specify which days you travel and add your contact information. Your listing goes live immediately.',
    },
    {
        question: 'Is my personal information safe',
        answer: 'You control what you share. Phone numbers and emails are only visible to matched riders. We recommend meeting in public places and trusting your instincts about potential carpool partners.',
    },
    {
        question: 'How do we handle fuel payments',
        answer: 'You set the price per passenger when posting your ride. Payments are arranged directly between you and your riders. We suggest cash or digital transfers for simplicity.',
    },
    {
        question: 'Can I change my schedule',
        answer: 'Yes. Edit your listing anytime to adjust departure times, available seats, or days of travel. Notify your regular riders if you make significant changes to your routine.',
    },
    {
        question: 'What if I need to cancel',
        answer: 'Contact your riders as soon as possible through the phone number or email they provided. Canceling occasionally is fine, but regular cancellations may affect your reputation on the platform.',
    },
];



function Faq() {
    return (
        <section className='faq' id='faq'>
            <div className='faq__container'>
                <aside className='faq__left'>
                    <h2>FAQ</h2>
                    <p className='faq__subtitle'>
                        Find answers to common questions about using CoDrive
                    </p>
                    <button className='faq__btn'>Contact us</button>
                </aside>

                <article className='faq__right'>
                    {faqData.map(({question, answer}, index) => (
                        <div key={index} className='faq__item'>
                            <h3 className='faq__question'>{question}</h3>
                            <p className='faq__answer'>{answer}</p>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
}

export default Faq;