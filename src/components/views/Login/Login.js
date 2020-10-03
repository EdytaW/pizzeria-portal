import React from 'react';

import styles from './Login.module.scss';
import { Paper } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => (
  <Paper className={styles.component}>
    <TableHead>Login view
      <TableRow>
        <TableCell>ID number</TableCell>
        <TableCell><input></input></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Pasword</TableCell>
        <TableCell><input></input></TableCell> 
      </TableRow>
    </TableHead>
    <Button component={Link} to={`${process.env.PUBLIC_URL}/`}>Log in</Button>
  </Paper>
);

export default Login;