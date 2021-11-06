import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Protection',
        time: '11:00AM - 12:00PM',
        Space: 15
    },
    {
        id: 2,
        name: 'Cosmatic Protection',
        time: '11:00AM - 12:00PM',
        Space: 10
    },
    {
        id: 3,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 8
    },
    {
        id: 5,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 6
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 5
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography
                variant="h4"
                sx={{ color: 'info.main', my: 4 }}>AvailableAppointment {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;