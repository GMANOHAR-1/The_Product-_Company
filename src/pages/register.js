import React, { useState,useEffect } from 'react';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Register = () => {
    const [formData, setFormData] = useState({
        businessDescription: '',
        corporatePhilosophy: '',
        companyName: '',
        industry: '',
        mailId: '',
        phoneNumber: '',
        location: '',
        website: '',
        workingHours: '',
        establishmentDate: '',
        initialCapital: '',
        representative: '',
        branch: '',
        numberOfEmployees: '',
        salesRevenue: '',
        operationProfit: '',
        averageAgeOfEmployees: '',
        stock: '',
        linkedinLink: '',
        twitterLink: '',
        facebookLink: '',
        instagramLink: '',
        youtubeLink: '',
        foreignOwned: ''
    });
    const [formData1, setFormData1] = useState({
        businessDescription: '',
        corporatePhilosophy: '',
        companyName: '',
        industry: '',
        mailId: '',
        phoneNumber: '',
        location: '',
        website: '',
        workingHours: '',
        establishmentDate: '',
        initialCapital: '',
        representative: '',
        branch: '',
        numberOfEmployees: '',
        salesRevenue: '',
        operationProfit: '',
        averageAgeOfEmployees: '',
        stock: '',
        linkedinLink: '',
        twitterLink: '',
        facebookLink: '',
        instagramLink: '',
        youtubeLink: '',
        foreignOwned: ''
    });

    useEffect(() => {
      const storedData = localStorage.getItem('registerData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setFormData1(parsedData);
      }
    }, []);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setFormData1((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };
    const validateForm = () => {
        let errors = {};
      
        const requiredFields = [
          'phoneNumber',
          'businessDescription',
          'companyName',
          'industry',
          'location',
          'workingHours',
          'initialCapital',
          'establishmentDate',
          'representative',
          'branch',
          'numberOfEmployees',
          'salesRevenue',
          'operationProfit'
        ];
      
        requiredFields.forEach((field) => {
          if (!formData[field] && !formData1[field]) {
            errors[field] = `${field} is required`;
          }
        });
      
        if (!formData.mailId && !formData1.mailId) {
            errors.mailId = 'Mail ID is required';
        } else if (!isValidEmail(formData1.mailId) ) {
            errors.mailId = 'Invalid email format';
        }

        if (!formData.phoneNumber && !formData1.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        } else if (!isValidPhoneNumber(formData.phoneNumber) && !isValidPhoneNumber(formData1.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number format';
        }
      
        return errors;
      };
      
     

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            console.log(errors)
        } else {
            // Save form data to local storage
            console.log(formData)
            console.log(formData1)
            localStorage.setItem('registerData', JSON.stringify(formData1));
            // Navigate back to CorporateInformation component
            window.history.back();
        }
    };

    return (
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: "20%", marginRight: "10px" }}>
            <form onSubmit={handleSubmit} sx={{ width: '500px' }} style={{ display: "flex", flexDirection: "column", gap: "3px", flex: "1 1 10px" }}>
                <TextField
                    label="Business Description"
                    name="businessDescription"
                    value={formData.businessDescription || formData1.businessDescription}
                    onChange={handleChange}
                    required
                    error={!!formErrors.businessDescription}
                    helperText={formErrors.businessDescription}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Corporate Philosophy"
                    name="corporatePhilosophy"
                    value={formData.corporatePhilosophy || formData1.corporatePhilosophy}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName || formData1.companyName}
                    onChange={handleChange}
                    error={!!formErrors.companyName}
                    helperText={formErrors.companyName}
                    required
                />

                <TextField
                    label="Industry"
                    name="industry"
                    value={formData.industry || formData1.industry}
                    onChange={handleChange}
                    error={!!formErrors.industry}
                    helperText={formErrors.industry}
                    required
                />

                <TextField
                    label="Mail ID"
                    name="mailId"
                    value={formData.mailId || formData1.mailId}
                    onChange={handleChange}
                    error={!!formErrors.mailId}
                    helperText={formErrors.mailId}
                    required
                />

                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber || formData1.phoneNumber}
                    onChange={handleChange}
                    error={!!formErrors.phoneNumber}
                    helperText={formErrors.phoneNumber}
                    required
                />

                <TextField
                    label="Location"
                    name="location"
                    value={formData.location || formData1.location}
                    onChange={handleChange}
                    error={!!formErrors.location}
                    helperText={formErrors.location}
                    required
                />

                <TextField
                    label="Website"
                    name="website"
                    value={formData.website || formData1.website}
                    onChange={handleChange}
                     
                />

                <TextField
                    label="Working Hours"
                    name="workingHours"
                    value={formData.workingHours || formData1.workingHours}
                    onChange={handleChange}
                    error={!!formErrors.workingHours}
                    helperText={formErrors.workingHours}
                    required
                />

                <input
                    label="Establishment Date"
                    name="establishmentDate"
                    type='date'
                    value={formData.establishmentDate || formData1.establishmentDate}
                    onChange={handleChange}
                    error={!!formErrors.establishmentDate}
                    helperText={formErrors.location}
                    required
                />

                <TextField
                    label="Initial Capital"
                    name="initialCapital"
                    value={formData.initialCapital || formData1.initialCapital}
                    onChange={handleChange}
                    error={!!formErrors.initialCapital}
                    helperText={formErrors.initialCapital}
                    required
                />

                <TextField
                    label="Representative"
                    name="representative"
                    value={formData.representative || formData1.representative}
                    onChange={handleChange}
                    error={!!formErrors.representative}
                    helperText={formErrors.representative}
                    required
                />

                <TextField
                    label="Branch"
                    name="branch"
                    value={formData.branch || formData1.branch}
                    onChange={handleChange}
                    error={!!formErrors.branch}
                    helperText={formErrors.branch}
                    required
                />

                <TextField
                    label="Number Of Employees"
                    name="numberOfEmployees"
                    value={formData.numberOfEmployees || formData1.numberOfEmployees}
                    onChange={handleChange}
                    error={!!formErrors.numberOfEmployees}
                    helperText={formErrors.numberOfEmployees}
                    required
                />

                <TextField
                    label="Sales Revenue"
                    name="salesRevenue"
                    value={formData.salesRevenue || formData1.salesRevenue}
                    onChange={handleChange}
                    error={!!formErrors.salesRevenue}
                    helperText={formErrors.salesRevenue}
                    required
                />

                <TextField
                    label="Operation Profit"
                    name="operationProfit"
                    value={formData.operationProfit || formData1.operationProfit}
                    onChange={handleChange}
                    error={!!formErrors.operationProfit}
                    helperText={formErrors.operationProfit}
                    required
                />

                <TextField
                    label="Average Age Of Employees"
                    name="averageAgeOfEmployees"
                    value={formData.averageAgeOfEmployees || formData1.averageAgeOfEmployees}
                    onChange={handleChange}
                />

                <TextField
                    label="Stock"
                    name="stock"
                    value={formData.stock || formData1.stock}
                    onChange={handleChange}
                />

                <TextField
                    label="Linkedin Link"
                    name="linkedinLink"
                    value={formData.linkedinLink || formData1.linkedinLink}
                    onChange={handleChange}
                />

                <TextField
                    label="Twitter Link"
                    name="twitterLink"
                    value={formData.twitterLink || formData1.twitterLink}
                    onChange={handleChange}
                />

                <TextField
                    label="Facebook Link"
                    name="facebookLink"
                    value={formData.facebookLink || formData1.facebookLink}
                    onChange={handleChange}
                />

                <TextField
                    label="Instagram Link"
                    name="instagramLink"
                    value={formData.instagramLink || formData1.instagramLink}
                    onChange={handleChange}
                />

                <TextField
                    label="Youtube Link"
                    name="youtubeLink"
                    value={formData.youtubeLink || formData1.youtubeLink}
                    onChange={handleChange}
                />

                <FormControl required error={!!formErrors.foreignOwned} fullWidth margin="normal">
                    <InputLabel id="foreignOwned-label">Foreign Owned</InputLabel>
                    <Select
                        labelId="foreignOwned-label"
                        id="foreignOwned"
                        name="foreignOwned"
                        value={formData.foreignOwned || formData1.foreignOwned}
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="yes">Yes</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                    </Select>
                    {formErrors.foreignOwned && <span>{formErrors.foreignOwned}</span>}
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
                </Box>
            </form>
        </Box>
    );
};

export default Register;
