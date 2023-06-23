import React from 'react';
import Allowances from './allowances';
import TableExample from './others';

const OtherAllowance = () => {
  return (
    <div style={{ marginLeft:'8%',display: 'grid', gridTemplateColumns: '1fr 0.75fr', gridGap: '16px' }}>
      <Allowances />
      <TableExample/>
      
    </div>
  );
};

export default OtherAllowance;
