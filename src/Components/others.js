import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const divStyle = {
    position: 'relative',
    backgroundColor: 'rgb(161,149,230)',
    padding: '5px',
    marginBottom: '10px',
    color: 'white',
    textAlign: 'center',
    margin: '5px',
    borderRadius: '5px'
};

const editIconStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
};
const data = [
    ['Retention Rate Of New Graduate Hires', 'Over 50%'],
    ['Work Style ( Overseas Bases )', 'Yes'],
    ['Working Environment', 'Not Working'],
];
const data1 = [
    ['Summer Holidays', 'Yes'],
    ['Golden Weeks', 'Yes'],
    ['Other Holidays', 'Yes'],
]

const StyledTableRow = ({ children, index }) => {
    const backgroundColor = index % 2 === 0 ? '#E3F2FD' : '#BBDEFB';

    return (
        <TableRow style={{ backgroundColor }}>
            {children}
        </TableRow>
    );
};

const TableExample = () => {
    return (
        <>
<div>
            <Box style={divStyle}>
                <Typography variant="h6" style={{ color: '#0d47a1', textAlign: "center" }}>others</Typography>
                <IconButton
                    style={editIconStyle}


                >
                    <EditIcon />
                </IconButton>
                </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <StyledTableRow index={-1}>
                           
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <StyledTableRow key={index} index={index}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell>{row[1]}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           
            <Box style={divStyle}>
                <Typography variant="h6" style={{ color: '#0d47a1', textAlign: "center" }}>Holidays</Typography>
                <IconButton
                    style={editIconStyle}


                >
                    <EditIcon />
                </IconButton>
                </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <StyledTableRow index={-1}>
                          
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {data1.map((row, index) => (
                            <StyledTableRow key={index} index={index}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell>{row[1]}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           
            </div>
        </>
    );
};

export default TableExample;
