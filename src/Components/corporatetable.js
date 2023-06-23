import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const FormDataTable = ({ formData }) => {
  return (
    <Table style={{ width: '80%', marginLeft:'18%',marginRight:'5px',marginBottom:'5px', backgroundColor: '#E6F0F5' }}>
      <TableHead>
        <TableRow>
        {!formData && <TableCell style={{ color: 'white', backgroundColor: 'rgb(161, 149, 230)', fontWeight: 'bold', fontSize: '16px' }}>Field</TableCell>}
        {!formData &&  <TableCell style={{ color: 'white', backgroundColor: 'rgb(161, 149, 230)', fontWeight: 'bold', fontSize: '16px' }}>Value</TableCell>}  
         
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(formData).map(([field, value]) => (
          <TableRow key={field}>
           {value != "" &&  <TableCell style={{ fontSize: '14px' }}>{field}</TableCell>}
            {value != "" && <TableCell style={{ fontSize: '14px' }}>{value}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FormDataTable;
