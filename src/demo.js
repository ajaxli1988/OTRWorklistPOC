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

import { generateRows, otrWorklistValues } from './demo-data/generator';

export default () => {
  const [columns] = useState([
    { name: 'status', title: 'Status' },
    { name: 'procedureRoom', title: 'Procedure Room' },
    { name: 'startTime', title: 'Start Time' },
    { name: 'endTime', title: 'End Time' },
    { name: 'bedNo', title: 'Bed No' },
    { name: 'patientId', title: 'Patient ID' },
    { name: 'patientName', title: 'Patient Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'age', title: 'Age' },
    { name: 'doctorName', title: 'Doctor Name' },
    { name: 'procedureName', title: 'Procedure Name' },
    { name: 'remark', title: 'Remark' },
  ]);
  const [rows] = useState(generateRows({
    columnValues: otrWorklistValues,
    length: 30,
  }));
  const [grouping, setGrouping] = useState([{ columnName: 'procedureRoom' }]);

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
