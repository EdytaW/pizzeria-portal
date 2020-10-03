import React from 'react';
import propTypes from 'prop-types';
import styles from './Booking.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableBody } from '@material-ui/core';

const democontent = [
  {table: '1', time: '10:30'},
  {table: '2', time: '10:00'},
];
const Booking = (props) => (
  <Paper className={styles.component}>
    <h2>Booking view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {democontent.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    {props.match.params.id === 'new' ? 
      (<> 
    Create New 
      </>) :
      (<> ID: {props.match.params.id} 
      </>)};
  </Paper>
);

Booking.propTypes = {
  match: propTypes.any,
};

export default Booking;