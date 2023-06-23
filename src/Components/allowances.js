import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
  FormControl,
  FormLabel,
  Alert,
} from '@mui/material';
import {  Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
 
import EditIcon from '@mui/icons-material/Edit';

 
const divStyle = {
    position: 'relative',
    backgroundColor: 'rgb(161,149,230)',
    padding: '8px',
    marginBottom: '16px',
    color: 'white',
    marginLeft: '16.5%',
    borderRadius: '9px',
    marginRight: '5px',
    marginTop: '20px'
  };

const editIconStyle = {
  position: 'absolute',
  top: '8px',
  right: '8px',
};

const data = [
  { label: 'Salary System Based On Meritocracy', name: 'Salary System Based On Meritocracy', required: true },
  { label: '120 Or More Annual Holidays', name: '120 or annualHolidays', required: true },
  { label: 'Generous Welfare Benefits', name: 'Generous Welfare Benefits', required: true },
  { label: 'Enhanced Education And Training', name: 'Enhanced Education And Training', required: true },
  { label: 'Support System For Acquiring Qualification', name: 'Support System For Acquiring Qualification', required: true },
  { label: 'Reduced Working Hours System', name: 'Reduced Working Hours System', required: true },
  { label: 'Maternity Care Leave System', name: 'Maternity Care Leave System', required: true },
  { label: 'Company Housing / Rent Subsidy', name: 'Company Housing / Rent Subsidy', required: true },
  { label: 'Family Allowance', name: 'Family Allowance', required: true },
  { label: 'Employee Stock Ownership', name: 'Employee Stock Ownership', required: true },
  { label: 'Side Job Available', name: 'Side Job Available', required: true },
  { label: 'Mentor System', name: 'Mentor System' },
  { label: 'Career Consulting', name: 'Career Consulting' },
];

const Allowances = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [allowancesData, setAllowancesData] = useState({});
const [showit,setshowit] =useState(false)
  useEffect(() => {
    const savedData = localStorage.getItem('allowancesData');
    if (savedData) {
      const parsedData = JSON.parse(savedData) || {};
      setAllowancesData(parsedData);
      setshowit(true)
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsFormValid(false);
    setFormValues({});
  };

  const handleSave = () => {
    if (isFormValid) {
      const updatedData = { ...allowancesData, ...formValues };
      localStorage.setItem('allowancesData', JSON.stringify(updatedData));
      setAllowancesData(updatedData);
      setshowit(true)
      handleClose();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormValidation = () => {
    const requiredFields = data.filter((item) => item.required);
    const isValid = requiredFields.every((field) => formValues[field.name] || allowancesData[field.name]);
    setIsFormValid(isValid);

  };

  return (<>
     <div>
      <Box style={divStyle}>
        <Typography variant="h6" style={{ color: '#0d47a1', textAlign: 'center' }}>
          Corporate Information
        </Typography>
        <IconButton style={editIconStyle} onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      </Box>
      {showit && <AllowancesTable data={allowancesData} />} 
    </div>
   
 
    
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Allowances</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset" sx={{ m: 1 }}>
            <FormLabel component="legend">Allowances</FormLabel>
            <FormGroup>
              {data.map((item) => (
                <FormControlLabel
                  key={item.name}
                
                  labelPlacement="end"
                  style={{ display: 'flex', flexDirection: 'row' }}
                  control={
                    <RadioGroup
                      name={item.name}
                      value={formValues[item.name] || allowancesData[item.name] || ''}
                      onChange={handleChange}
                      style={{ display: 'flex' }}
                      onBlur={handleFormValidation}
                    >{`${item.label}${item.required ? '*' : ''}`}
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  }
                />
              ))}
            </FormGroup>
          </FormControl>
          {!isFormValid && (
            <Alert severity="error" sx={{ mt: 1 }}>
              Please fill in all the required fields.
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      
      </>
      
  );
};

export default Allowances;
 


const styles = {
    table: {
      backgroundColor: 'white',
    },
    headerCell: {
      color: 'black',
      fontWeight: 'bold',
    },
    lightBlueRow: {
      backgroundColor: 'lightblue',
    },
    greenValue: {
      color: 'green',
    },
    redValue: {
      color: 'red',
    },
  };
  
  const AllowancesTable = ({ data}) => {
    const dataArray = Object.entries(data || {}).map(([key, value]) => ({ key, value }));
  
    return ( <div>
     {dataArray && <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:"",marginLeft:"17%" }}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.headerCell}>Allowance</TableCell>
              <TableCell className={styles.headerCell}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray.map((item, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? styles.lightBlueRow : ''}
              >
                <TableCell>{item.key}</TableCell>
                <TableCell className={item.value === 'Yes' ? styles.greenValue : styles.redValue}>
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
     
     }  </div>
    );
  };
  
  