import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '10:00 ', status: 'reservation', status2: null},
  {id: '10:30 ', status: 'event', order: null},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>reservation</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>table 1</TableCell>
          <TableCell>table 2</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW</Link><span> </span>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}>ID</Link><span> </span>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>EVENTS_NEW</Link><span> </span>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/eventID`}>ID</Link><span> </span>
    </Table>
  </Paper>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;