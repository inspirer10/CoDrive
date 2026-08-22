'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import {
    FiMapPin,
    FiClock,
    FiUsers,
    FiPhone,
    FiMail,
    FiCalendar,
} from 'react-icons/fi';
import { IoCarSportOutline } from 'react-icons/io5';
import { Reveal } from '../Reveal/Reveal';

import './availableRides.scss';

interface Ride {
    id: number;
    from: string;
    to: string;
    price: number;
    driver: {
        name: string;
        avatar?: string;
        car: string;
    };
    departureTime: string;
    arrivalTime?: string;
    availableSeats: number;
    days: string[];
}

interface RideFilters {
    from: string;
    to: string;
    day: string;
    minSeats: number;
    maxPrice: number;
}

const allDaysLabel = 'All days';
const allSeatsValue = 0;
const ridesPerPage = 3;

const ridesData: Ride[] = [
    {
        id: 1,
        from: 'Berlin',
        to: 'Munich',
        price: 45,
        driver: {
            name: 'Thomas',
            avatar: 'https://i.pravatar.cc/100?img=11',
            car: 'Volkswagen Passat',
        },
        departureTime: '08:00',
        arrivalTime: '14:00',
        availableSeats: 3,
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    {
        id: 2,
        from: 'Paris',
        to: 'Lyon',
        price: 35,
        driver: {
            name: 'Sophie',
            avatar: 'https://i.pravatar.cc/100?img=5',
            car: 'Renault Megane',
        },
        departureTime: '07:30',
        arrivalTime: '12:30',
        availableSeats: 2,
        days: ['Mon', 'Wed', 'Fri'],
    },
    {
        id: 3,
        from: 'Amsterdam',
        to: 'Brussels',
        price: 25,
        driver: {
            name: 'Lucas',
            avatar: 'https://i.pravatar.cc/100?img=12',
            car: 'Toyota Corolla',
        },
        departureTime: '06:45',
        arrivalTime: '09:15',
        availableSeats: 4,
        days: ['Mon', 'Tue', 'Thu'],
    },
    {
        id: 4,
        from: 'Barcelona',
        to: 'Madrid',
        price: 40,
        driver: {
            name: 'Isabella',
            avatar: 'https://i.pravatar.cc/100?img=9',
            car: 'Seat Leon',
        },
        departureTime: '08:30',
        arrivalTime: '14:30',
        availableSeats: 2,
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    {
        id: 5,
        from: 'Rome',
        to: 'Florence',
        price: 30,
        driver: {
            name: 'Marco',
            avatar: 'https://i.pravatar.cc/100?img=8',
            car: 'Alfa Romeo Giulia',
        },
        departureTime: '07:00',
        arrivalTime: '10:30',
        availableSeats: 3,
        days: ['Mon', 'Wed', 'Fri'],
    },
    {
        id: 6,
        from: 'Vienna',
        to: 'Prague',
        price: 35,
        driver: {
            name: 'Eva',
            avatar: 'https://i.pravatar.cc/100?img=20',
            car: 'Skoda Octavia',
        },
        departureTime: '06:30',
        arrivalTime: '10:00',
        availableSeats: 3,
        days: ['Sat', 'Sun'],
    },
    {
        id: 7,
        from: 'Copenhagen',
        to: 'Malmo',
        price: 15,
        driver: {
            name: 'Erik',
            avatar: 'https://i.pravatar.cc/100?img=15',
            car: 'Volvo V60',
        },
        departureTime: '09:00',
        arrivalTime: '09:45',
        availableSeats: 4,
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    {
        id: 8,
        from: 'Zurich',
        to: 'Milan',
        price: 50,
        driver: {
            name: 'Anna',
            avatar: 'https://i.pravatar.cc/100?img=23',
            car: 'BMW 3 Series',
        },
        departureTime: '07:15',
        arrivalTime: '11:00',
        availableSeats: 2,
        days: ['Tue', 'Thu', 'Sat'],
    },
    {
        id: 9,
        from: 'Lisbon',
        to: 'Porto',
        price: 28,
        driver: {
            name: 'Miguel',
            car: 'Peugeot 308',
        },
        departureTime: '08:00',
        arrivalTime: '11:30',
        availableSeats: 3,
        days: ['Mon', 'Wed', 'Fri', 'Sun'],
    },
];

const dayOptions = [
    allDaysLabel,
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];

const seatOptions = [allSeatsValue, 1, 2, 3, 4];

const initialFilters: RideFilters = {
    from: '',
    to: '',
    day: allDaysLabel,
    minSeats: allSeatsValue,
    maxPrice: 0,
};

function AvailableRides() {
    const [filters, setFilters] = useState<RideFilters>(initialFilters);
    const [currentPage, setCurrentPage] = useState(0);

    const filteredRides = useMemo(() => {
        const fromTerm = filters.from.trim().toLowerCase();
        const toTerm = filters.to.trim().toLowerCase();

        return ridesData.filter((ride) => {
            const matchesFrom =
                fromTerm.length === 0 ||
                ride.from.toLowerCase().includes(fromTerm);
            const matchesTo =
                toTerm.length === 0 || ride.to.toLowerCase().includes(toTerm);
            const matchesDay =
                filters.day === allDaysLabel || ride.days.includes(filters.day);
            const matchesSeats = ride.availableSeats >= filters.minSeats;
            const matchesPrice =
                filters.maxPrice <= 0 || ride.price <= filters.maxPrice;

            return (
                matchesFrom &&
                matchesTo &&
                matchesDay &&
                matchesSeats &&
                matchesPrice
            );
        });
    }, [filters]);

    const totalPages = Math.ceil(filteredRides.length / ridesPerPage);
    const activePage = Math.min(currentPage, Math.max(totalPages - 1, 0));
    const visibleRides = filteredRides.slice(
        activePage * ridesPerPage,
        (activePage + 1) * ridesPerPage,
    );

    const handleTextFilterChange =
        (key: 'from' | 'to' | 'day') =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { value } = event.target;
            setCurrentPage(0);
            setFilters((current) => ({
                ...current,
                [key]: value,
            }));
        };

    const handleMinSeatsChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setCurrentPage(0);
        setFilters((current) => ({
            ...current,
            minSeats: Number(event.target.value),
        }));
    };

    const handleMaxPriceChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const nextValue =
            event.target.value === '' ? 0 : Number(event.target.value);

        setCurrentPage(0);
        setFilters((current) => ({
            ...current,
            maxPrice: Number.isNaN(nextValue) ? 0 : nextValue,
        }));
    };

    const clearFilters = () => {
        setCurrentPage(0);
        setFilters(initialFilters);
    };

    return (
        <section className='available-rides' id='listings'>
            <div className='available-rides__container'>
                <Reveal width='100%'>
                    <div className='available-rides__header'>
                        <div className='available-rides__heading-copy'>
                            <span className='available-rides__eyebrow'>
                                Live ride board
                            </span>
                            <h2>Available Rides</h2>
                            <p className='available-rides__subtitle'>
                                Find the perfect travel companion for your route
                            </p>
                        </div>
                        <p
                            className='available-rides__result-count'
                            aria-live='polite'
                        >
                            <span>{filteredRides.length}</span>
                            {filteredRides.length === 1
                                ? ' route matching'
                                : ' routes matching'}
                        </p>
                    </div>
                </Reveal>

                <div className='available-rides__filters'>
                    <label className='available-rides__filter'>
                        <span>From</span>
                        <input
                            type='text'
                            placeholder='Any city'
                            value={filters.from}
                            onChange={handleTextFilterChange('from')}
                        />
                    </label>

                    <label className='available-rides__filter'>
                        <span>To</span>
                        <input
                            type='text'
                            placeholder='Any city'
                            value={filters.to}
                            onChange={handleTextFilterChange('to')}
                        />
                    </label>

                    <label className='available-rides__filter'>
                        <span>Day</span>
                        <select
                            value={filters.day}
                            onChange={handleTextFilterChange('day')}
                        >
                            {dayOptions.map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className='available-rides__filter'>
                        <span>Min seats</span>
                        <select
                            value={filters.minSeats}
                            onChange={handleMinSeatsChange}
                        >
                            {seatOptions.map((seats) => (
                                <option key={seats} value={seats}>
                                    {seats === allSeatsValue
                                        ? 'Any seats'
                                        : seats}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className='available-rides__filter'>
                        <span>Max price</span>
                        <input
                            type='number'
                            min={1}
                            step={1}
                            inputMode='numeric'
                            placeholder='No limit'
                            value={
                                filters.maxPrice === 0 ? '' : filters.maxPrice
                            }
                            onChange={handleMaxPriceChange}
                        />
                    </label>

                    <button
                        className='available-rides__clear-btn'
                        type='button'
                        onClick={clearFilters}
                    >
                        Clear filters
                    </button>
                </div>

                <div className='available-rides__grid' aria-live='polite'>
                    {visibleRides.map((ride) => (
                        <article key={ride.id} className='ride-card'>
                            <div className='ride-card__route'>
                                <div className='ride-card__locations'>
                                    <div className='ride-card__location'>
                                        <FiMapPin className='ride-card__pin' />
                                        <span>{ride.from}</span>
                                    </div>
                                    <div className='ride-card__location'>
                                        <FiMapPin className='ride-card__pin second_pin' />
                                        <span>{ride.to}</span>
                                    </div>
                                </div>
                                <div className='ride-card__price'>
                                    <span className='ride-card__amount'>
                                        €{ride.price}
                                    </span>
                                    <span className='ride-card__per'>
                                        per person
                                    </span>
                                </div>
                            </div>

                            <div className='ride-card__driver'>
                                <div className='ride-card__avatar'>
                                    {ride.driver.avatar ? (
                                        <Image
                                            src={ride.driver.avatar}
                                            alt={ride.driver.name}
                                            width={100}
                                            height={100}
                                            sizes='46px'
                                        />
                                    ) : (
                                        <span className='ride-card__avatar-placeholder'>
                                            {ride.driver.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <div className='ride-card__driver-info'>
                                    <h4>{ride.driver.name}</h4>
                                    <p>
                                        <IoCarSportOutline />
                                        {ride.driver.car}
                                    </p>
                                </div>
                            </div>

                            <div className='ride-card__details'>
                                <div className='ride-card__time'>
                                    <FiClock />
                                    <span>
                                        {ride.departureTime}
                                        {ride.arrivalTime &&
                                            ` -> ${ride.arrivalTime}`}
                                    </span>
                                </div>
                                <div className='ride-card__seats'>
                                    <FiUsers />
                                    <span>
                                        {ride.availableSeats} free seats
                                    </span>
                                </div>
                            </div>

                            <div className='ride-card__days'>
                                <FiCalendar className='ride-card__days-icon' />
                                {ride.days.map((day) => (
                                    <span
                                        key={`${ride.id}-${day}`}
                                        className='ride-card__day'
                                    >
                                        {day}
                                    </span>
                                ))}
                            </div>

                            <div className='ride-card__actions'>
                                <button
                                    className='ride-card__btn ride-card__btn--call'
                                    type='button'
                                >
                                    <FiPhone />
                                    <span>Call</span>
                                </button>
                                <button
                                    className='ride-card__btn ride-card__btn--email'
                                    type='button'
                                >
                                    <FiMail />
                                    <span>Email</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredRides.length === 0 && (
                    <div className='available-rides__empty-state'>
                        <h3>No rides match your filters</h3>
                        <p>
                            Try broadening your route, day, or price criteria.
                        </p>
                    </div>
                )}

                {totalPages > 1 && (
                    <nav
                        className='available-rides__pagination'
                        aria-label='Available rides pages'
                    >
                        {Array.from({ length: totalPages }, (_, pageIndex) => {
                            const isActive = pageIndex === activePage;

                            return (
                                <button
                                    key={pageIndex}
                                    className={`available-rides__page-button${
                                        isActive
                                            ? ' available-rides__page-button--active'
                                            : ''
                                    }`}
                                    type='button'
                                    aria-label={`Show rides page ${pageIndex + 1} of ${totalPages}`}
                                    aria-current={
                                        isActive ? 'page' : undefined
                                    }
                                    onClick={() => setCurrentPage(pageIndex)}
                                >
                                    <span
                                        className='available-rides__dot'
                                        aria-hidden='true'
                                    />
                                </button>
                            );
                        })}
                    </nav>
                )}
            </div>
        </section>
    );
}

export default AvailableRides;
