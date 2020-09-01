import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tables = ({id='123'}) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:new`}>EVENTS_NEW</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/eventID`}>ID</Link>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;