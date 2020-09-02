import React from 'react';
import propTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = (props) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    {props.match.params.id === 'new' ? 
      (<> 
    Create New 
      </>) :
      (<> ID: {props.match.params.id} 
      </>)};
  </div>
);

Booking.propTypes = {
  match: propTypes.any,
};

export default Booking;