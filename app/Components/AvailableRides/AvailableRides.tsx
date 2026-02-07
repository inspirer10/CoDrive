import React from 'react';
import {
    FiMapPin,
    FiClock,
    FiUsers,
    FiPhone,
    FiMail,
    FiCalendar,
} from 'react-icons/fi';
import { IoCarSportOutline } from 'react-icons/io5';

import './availableRides.scss';

// Ride data interface
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

// Sample rides data
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
        to: 'Malmö',
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

function AvailableRides() {
    return (
        <section className='available-rides'>
            <div className='available-rides__container'>
                <div className='available-rides__header'>
                    <h2>Available Rides</h2>
                    <p className='available-rides__subtitle'>
                        Find the perfect travel companion for your route
                    </p>
                </div>

                <div className='available-rides__grid'>
                    {ridesData.map((ride) => (
                        <article key={ride.id} className='ride-card'>
                            {/* Route section */}
                            <div className='ride-card__route'>
                                <div className='ride-card__locations'>
                                    <div className='ride-card__location'>
                                        <FiMapPin className='ride-card__pin' />
                                        <span>{ride.from}</span>
                                    </div>
                                    <div className='ride-card__location'>
                                        <FiMapPin className='ride-card__pin' />
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

                            {/* Driver section */}
                            <div className='ride-card__driver'>
                                <div className='ride-card__avatar'>
                                    {ride.driver.avatar ? (
                                        <img
                                            src={ride.driver.avatar}
                                            alt={ride.driver.name}
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

                            {/* Details section */}
                            <div className='ride-card__details'>
                                <div className='ride-card__time'>
                                    <FiClock />
                                    <span>
                                        {ride.departureTime}
                                        {ride.arrivalTime &&
                                            ` → ${ride.arrivalTime}`}
                                    </span>
                                </div>
                                <div className='ride-card__seats'>
                                    <FiUsers />
                                    <span>
                                        {ride.availableSeats} free seats
                                    </span>
                                </div>
                            </div>

                            {/* Days section */}
                            <div className='ride-card__days'>
                                <FiCalendar className='ride-card__days-icon' />
                                {ride.days.map((day, idx) => (
                                    <span key={idx} className='ride-card__day'>
                                        {day}
                                    </span>
                                ))}
                            </div>

                            {/* Actions section */}
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

                {/* Pagination dots */}
                <div className='available-rides__pagination'>
                    <span className='available-rides__dot available-rides__dot--active'></span>
                    <span className='available-rides__dot'></span>
                    <span className='available-rides__dot'></span>
                </div>
            </div>
        </section>
    );
}

export default AvailableRides;
