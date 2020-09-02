import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW</Link><span> </span>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}>ID</Link><span> </span>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>EVENTS_NEW</Link><span> </span>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/eventID`}>ID</Link><span> </span>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;