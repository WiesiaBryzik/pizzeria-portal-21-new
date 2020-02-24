import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2> Tables view </h2>

    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/bookings/new`}>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/bookings/booking/:id`}>Edit Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/event/:id`}>Edit Event</Link>
    </div>

  </div>
);

export default Tables;
