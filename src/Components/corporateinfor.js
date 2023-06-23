import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import FormDataTable from './corporatetable';
import { useState,useEffect } from 'react';
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
  right: '8px'
};

const CorporateInformation = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/register');
  };
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('registerData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);
  console.log(formData)
  return (
    <div>
      <Box style={divStyle}>
        <Typography variant="h6" style={{ color: '#0d47a1', textAlign: 'center' }}>
          Corporate Information
        </Typography>
        <IconButton style={editIconStyle} onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </Box>
      {formData && <FormDataTable formData={formData}/>}
    </div>
  
  );
};

export default CorporateInformation;
