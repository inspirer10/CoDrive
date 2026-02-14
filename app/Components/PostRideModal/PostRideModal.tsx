'use client';

import React, { useEffect, useState } from 'react';
import {
    FiCalendar,
    FiCamera,
    FiClock,
    FiDollarSign,
    FiMail,
    FiMapPin,
    FiPhone,
    FiUser,
    FiUsers,
    FiX,
} from 'react-icons/fi';
import { BsCarFront } from 'react-icons/bs';
import { useLenis } from '../LenisProvider/LenisProvider';

import './postRideModal.scss';

interface PostRideModalProps {
    onClose: () => void;
}

const dayPresets = [
    { id: 'weekdays', label: 'Weekdays', days: ['mon', 'tue', 'wed', 'thu', 'fri'] },
    { id: 'weekend', label: 'Weekends', days: ['sat', 'sun'] },
    {
        id: 'allWeek',
        label: 'Every day',
        days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    },
];

const weekDays = [
    { id: 'mon', label: 'Monday' },
    { id: 'tue', label: 'Tuesday' },
    { id: 'wed', label: 'Wednesday' },
    { id: 'thu', label: 'Thursday' },
    { id: 'fri', label: 'Friday' },
    { id: 'sat', label: 'Saturday' },
    { id: 'sun', label: 'Sunday' },
];

function PostRideModal({ onClose }: PostRideModalProps) {
    const [selectedPreset, setSelectedPreset] = useState('weekdays');
    const [selectedDays, setSelectedDays] = useState<string[]>(
        dayPresets[0].days,
    );
    const lenis = useLenis();

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousOverscrollBehavior =
            document.documentElement.style.overscrollBehavior;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overscrollBehavior = 'none';
        lenis?.stop();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.documentElement.style.overscrollBehavior =
                previousOverscrollBehavior;
            lenis?.start();
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [lenis, onClose]);

    const handlePresetClick = (presetId: string, days: string[]) => {
        setSelectedPreset(presetId);
        setSelectedDays(days);
    };

    const handleDayToggle = (dayId: string) => {
        setSelectedPreset('custom');
        setSelectedDays((current) =>
            current.includes(dayId)
                ? current.filter((day) => day !== dayId)
                : [...current, dayId],
        );
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const sanitizeLettersOnly = (value: string) =>
        value.replace(/[^A-Za-z\s'-]/g, '');

    const sanitizePhone = (value: string) => {
        const allowedCharsOnly = value.replace(/[^0-9+\s()-]/g, '');
        if (!allowedCharsOnly.includes('+')) {
            return allowedCharsOnly;
        }

        const keepLeadingPlus = allowedCharsOnly.startsWith('+');
        const withoutExtraPlus = allowedCharsOnly.replace(/\+/g, '');
        return keepLeadingPlus
            ? `+${withoutExtraPlus}`
            : withoutExtraPlus;
    };

    const sanitizeDigitsOnly = (value: string) => value.replace(/\D/g, '');

    const handleTextOnlyInput = (
        event: React.FormEvent<HTMLInputElement>,
    ) => {
        event.currentTarget.value = sanitizeLettersOnly(
            event.currentTarget.value,
        );
    };

    const handlePhoneInput = (event: React.FormEvent<HTMLInputElement>) => {
        event.currentTarget.value = sanitizePhone(event.currentTarget.value);
    };

    const handleDigitsOnlyInput = (
        event: React.FormEvent<HTMLInputElement>,
    ) => {
        event.currentTarget.value = sanitizeDigitsOnly(
            event.currentTarget.value,
        );
    };

    return (
        <div className='post-ride-modal__overlay' onClick={onClose}>
            <section
                className='post-ride-modal'
                role='dialog'
                aria-modal='true'
                aria-labelledby='post-ride-title'
                data-lenis-prevent
                data-lenis-prevent-wheel
                data-lenis-prevent-touch
                onClick={(event) => event.stopPropagation()}
                onWheelCapture={(event) => event.stopPropagation()}
                onTouchMoveCapture={(event) => event.stopPropagation()}
            >
                <header className='post-ride-modal__top'>
                    <h2 id='post-ride-title'>Post a listing</h2>
                    <button
                        className='post-ride-modal__close'
                        type='button'
                        onClick={onClose}
                        aria-label='Close dialog'
                    >
                        <FiX />
                    </button>
                </header>

                <form className='post-ride-modal__form' onSubmit={handleSubmit}>
                    <section className='post-ride-modal__section'>
                        <div className='post-ride-modal__section-title'>
                            <FiMapPin />
                            <h3>Route</h3>
                        </div>

                        <div className='post-ride-modal__row'>
                            <label className='post-ride-modal__field'>
                                <span>From *</span>
                                <input
                                    type='text'
                                    placeholder='e.g. Wroclaw'
                                    required
                                    pattern="[A-Za-z\s'-]+"
                                    title='Use letters only'
                                    onInput={handleTextOnlyInput}
                                />
                            </label>

                            <label className='post-ride-modal__field'>
                                <span>To *</span>
                                <input
                                    type='text'
                                    placeholder='e.g. Leszno'
                                    required
                                    pattern="[A-Za-z\s'-]+"
                                    title='Use letters only'
                                    onInput={handleTextOnlyInput}
                                />
                            </label>
                        </div>
                    </section>

                    <section className='post-ride-modal__section'>
                        <div className='post-ride-modal__section-title'>
                            <FiClock />
                            <h3>Times</h3>
                        </div>

                        <div className='post-ride-modal__row'>
                            <label className='post-ride-modal__field'>
                                <span>Departure *</span>
                                <input type='time' required />
                            </label>

                            <label className='post-ride-modal__field'>
                                <span>Return (optional)</span>
                                <input type='time' />
                            </label>
                        </div>
                    </section>

                    <section className='post-ride-modal__section'>
                        <div className='post-ride-modal__section-title'>
                            <FiCalendar />
                            <h3>Weekdays *</h3>
                        </div>

                        <div className='post-ride-modal__preset-list'>
                            {dayPresets.map((preset) => (
                                <button
                                    key={preset.id}
                                    type='button'
                                    className={
                                        selectedPreset === preset.id
                                            ? 'post-ride-modal__preset is-active'
                                            : 'post-ride-modal__preset'
                                    }
                                    onClick={() =>
                                        handlePresetClick(preset.id, preset.days)
                                    }
                                >
                                    {preset.label}
                                </button>
                            ))}
                        </div>

                        <div className='post-ride-modal__days-list'>
                            {weekDays.map((day) => (
                                <button
                                    key={day.id}
                                    type='button'
                                    className={
                                        selectedDays.includes(day.id)
                                            ? 'post-ride-modal__day is-active'
                                            : 'post-ride-modal__day'
                                    }
                                    onClick={() => handleDayToggle(day.id)}
                                >
                                    <span className='post-ride-modal__day-dot' />
                                    {day.label}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className='post-ride-modal__section'>
                        <div className='post-ride-modal__section-title'>
                            <BsCarFront />
                            <h3>Car</h3>
                        </div>

                        <div className='post-ride-modal__row'>
                            <label className='post-ride-modal__field'>
                                <span>Brand</span>
                                <input
                                    type='text'
                                    placeholder='e.g. Volkswagen'
                                    pattern="[A-Za-z\s'-]+"
                                    title='Use letters only'
                                    onInput={handleTextOnlyInput}
                                />
                            </label>

                            <label className='post-ride-modal__field'>
                                <span>Model</span>
                                <input
                                    type='text'
                                    placeholder='e.g. Passat'
                                    pattern="[A-Za-z\s'-]+"
                                    title='Use letters only'
                                    onInput={handleTextOnlyInput}
                                />
                            </label>
                        </div>

                        <div className='post-ride-modal__row'>
                            <label className='post-ride-modal__field'>
                                <span className='post-ride-modal__label-with-icon'>
                                    <FiUsers />
                                    Available seats
                                </span>
                                <input
                                    type='number'
                                    min={1}
                                    step={1}
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='e.g. 3'
                                    onInput={handleDigitsOnlyInput}
                                />
                            </label>

                            <label className='post-ride-modal__field'>
                                <span className='post-ride-modal__label-with-icon'>
                                    <FiDollarSign />
                                    Price per person (PLN)
                                </span>
                                <input
                                    type='number'
                                    min={1}
                                    step={1}
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='e.g. 25'
                                    onInput={handleDigitsOnlyInput}
                                />
                            </label>
                        </div>
                    </section>

                    <section className='post-ride-modal__section'>
                        <div className='post-ride-modal__section-title'>
                            <FiUser />
                            <h3>Contact details</h3>
                        </div>

                        <div className='post-ride-modal__row'>
                            <label className='post-ride-modal__field'>
                                <span>Name</span>
                                <input
                                    type='text'
                                    placeholder='e.g. Thomas'
                                    pattern="[A-Za-z\s'-]+"
                                    title='Use letters only'
                                    onInput={handleTextOnlyInput}
                                />
                            </label>

                            <label className='post-ride-modal__field'>
                                <span className='post-ride-modal__label-with-icon'>
                                    <FiPhone />
                                    Phone
                                </span>
                                <input
                                    type='tel'
                                    inputMode='tel'
                                    pattern='^\+?[0-9\s()-]{7,20}$'
                                    title='Use a valid phone number'
                                    placeholder='e.g. +48 512 345 678'
                                    onInput={handlePhoneInput}
                                />
                            </label>
                        </div>

                        <div className='post-ride-modal__row'>
                            <label className='post-ride-modal__field'>
                                <span className='post-ride-modal__label-with-icon'>
                                    <FiMail />
                                    Email
                                </span>
                                <input
                                    type='email'
                                    placeholder='e.g. thomas@email.com'
                                />
                            </label>

                            <label className='post-ride-modal__field'>
                                <span className='post-ride-modal__label-with-icon'>
                                    <FiCamera />
                                    Photo link (optional)
                                </span>
                                <input type='url' placeholder='https://...' />
                            </label>
                        </div>
                    </section>

                    <div className='post-ride-modal__actions'>
                        <button
                            type='button'
                            className='post-ride-modal__btn post-ride-modal__btn--ghost'
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='post-ride-modal__btn post-ride-modal__btn--primary'
                        >
                            Post listing
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default PostRideModal;
