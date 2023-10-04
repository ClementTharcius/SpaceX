import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDashboardLinkClicked } from '../../redux/actions';

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleDashboardLinkClick = () => {
    dispatch(setDashboardLinkClicked(true));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Welcome to SpaceX App
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Explore the latest news, launches, and missions of SpaceX.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/dashboard"
        onClick={handleDashboardLinkClick}
      >
        Go to Dashboard
      </Button>
    </Container>
  );
};

export default LandingPage;
