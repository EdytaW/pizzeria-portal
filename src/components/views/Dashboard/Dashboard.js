import React from 'react';

import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

const democontent = [
  {remote: '10', local: '2'},
];

const democontentList = [
  {event: 'event1'},
  {event: 'event2'},
  {event: 'event3'},
];

const Dashboard = () => (
  <Paper className={styles.component}>
    <h2>Dashboard view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number of Remote Orders</TableCell>
          <TableCell>Number of Local Orders</TableCell>
        </TableRow>
       
      </TableHead>
      <TableBody>
        {democontent.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.remote}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.local}
            </TableCell>
          </TableRow>
        ))}
        
        
        <List>
          <TableCell>List of reservations and events for today:</TableCell>
          {democontentList.map(item => (
            <ListItem key={item.event}>  
              {item.event}
            </ListItem>
          ))}
          
        </List>
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;