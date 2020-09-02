import React from 'react';

import styles from './Order.module.scss';

import PropTypes from 'prop-types';

const Order = ({match}) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    ID: {match.params.id}
  </div>
);

Order.propTypes = {
  match: PropTypes.any,
};

export default Order;