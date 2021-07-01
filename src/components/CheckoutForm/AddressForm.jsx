import React from 'react'
// import {useState, useEffect} from 'react'
import { Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

// import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';

const AddressForm = ({ checkoutToken }) => {
    // const [shippingCountries, setShippingCountries] = useState([]);
    // const [shippingCountry, setShippingCountry] = useState('');
    // // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    // // const [shippingSubdivision, setShippingSubdivision] = useState('');
    // // const [shippingOptions, setShippingOptions] = useState([]);
    // // const [shippingOption, setShippingOption] = useState('');

    // const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));

    const methods = useForm();

    // const fetchShippingCountries = async (checkoutTokenId) => {
    //     const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        
        
    //     setShippingCountries(countries);
    //     setShippingCountry(Object.keys(countries)[0]);
    // }

    // useEffect(() => {
    //     fetchShippingCountries(checkoutToken.id)
    // }, []);

    const submitPlaceholder = () => (
        console.log('submitted form, avoided error')
    )

    return (
        <div>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={submitPlaceholder}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstname' label='First name' />
                        <FormInput required name='lastname' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='postcode' label='Post Code' />
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid> */}
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
