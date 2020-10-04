import React from 'react';

import styles from './Kitchen.module.scss';
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'mainDish', headerName: 'Main Dish', width: 130 },
  { field: 'drinks', headerName: 'Drinks', width: 130 },
  {
    field: 'table',
    headerName: 'Table No',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, mainDish: 'Pizza', drinks: 'Cola', table: 35 },
  { id: 2, mainDish: 'Pizza', drinks: 'Cola', table: 42 },
  { id: 3, mainDish: 'Pizza', drinks: 'Cola', table: 45 },
  { id: 4, mainDish: 'Pizza', drinks: 'Cola', table: 16 },
  { id: 5, mainDish: 'Pizza', drinks: 'Cola', table: null },
  { id: 6, mainDish: 'Melisandre', drinks: null, table: 150 },
  { id: 7, mainDish: 'Pizza', drinks: 'Cola', table: 44 },
  { id: 8, mainDish: 'Pizza', drinks: 'Cola', table: 36 },
  { id: 9, mainDish: 'Pizza', drinks: 'Cola', table: 65 },
];
const Kitchen = () => (
  <Paper className={styles.component}>
    <h2>Kitchen view</h2>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} ptableSize={5} checkboxSelection />
    </div>
  </Paper>
);

export default Kitchen;