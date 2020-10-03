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

const demoContent = {
  'table1': [
    {
      status: 'free',
      hour: 10.5,
      orderId: 123,
    },
    {
      status: 'free',
      hour: 12,
      orderId: 123,
    },
  ],
  'table2': [
    {
      status: 'free',
      hour: 10.5,
      orderId: 123,
    },
    {
      status: 'free',
      hour: 12,
      orderId: 123,
    },
  ],
  'table3': [
    {
      status: 'free',
      hour: 10.5,
      orderId: 123,
    },
    {
      status: 'free',
      hour: 12,
      orderId: 123,
    },
  ],
  'table4': [
    {
      status: 'free',
      hour: 11,
      orderId: 123,
    },
    {
      status: 'thinking',
      hour: 15.5,
      orderId: 123,
    },
  ],
};

const generateHours = () => {
  const tmp = [];
  for (let i = 10; i <= 24; i += 0.5) {
    tmp.push(i);
  }

  return tmp;
};

const parseHour = (hour) => {
  const h = parseInt(hour);

  let m = '00';

  if (hour - h > 0) {
    m = '30';
  }

  return `${h}:${m}`;
};

const hours = generateHours();

const renderTable = (tableId, hour) => {
  const reservation = demoContent[tableId].find(el => el.hour === hour);

  if (reservation) {
    return <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${reservation.orderId}`}>Show details</Button>;
  } else {
    return '-';
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          {Object.keys(demoContent).map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {hours.map(hour => (
          <TableRow key={hour}>
            <TableCell component="th" scope="row">
              {parseHour(hour)}
            </TableCell>
            {Object.keys(demoContent).map(key => (
              <TableCell key={key}>
                {renderTable(key, hour)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW</Link><span> </span>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}>ID</Link><span> </span>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>EVENTS_NEW</Link><span> </span>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/eventID`}>ID</Link><span> </span>
  </Paper>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;