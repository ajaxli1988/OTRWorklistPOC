import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  Toolbar,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from '../../../demo-data/generator';

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));
  const [grouping, setGrouping] = useState([{ columnName: 'city' }]);

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <DragDropProvider />
        <GroupingState
          grouping={grouping}
          onGroupingChange={setGrouping}
        />
        <IntegratedGrouping />
        <Table />
        <TableHeaderRow showGroupingControls />
        <TableGroupRow />
        <Toolbar />
        <GroupingPanel showGroupingControls />
      </Grid>
    </Paper>
  );
};
