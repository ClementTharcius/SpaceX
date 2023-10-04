import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, CircularProgress } from '@mui/material';
import { GET_SPACEX_DATA } from '../../graphql/queries';

const SpaceXTable = () => {
  const { loading, error, data } = useQuery(GET_SPACEX_DATA);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setShowProgress(false);
    }, 3000); // Display progress for 3 seconds

    return () => {
      clearTimeout(progressTimer);
    };
  }, []);

  if (showProgress) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    const errorMessage = `There was an issue loading SpaceX data. Do you wish to visit the SpaceX site?`;

    // Display a confirmation dialog to the user
    const shouldRedirect = window.confirm(errorMessage);

    if (shouldRedirect) {
      window.location.href = 'https://www.spacex.com/human-spaceflight/';
    }

    return <center><p>There was an issue loading SpaceX data</p>.</center>;
  }

  if (data) {
    console.log('data', data);
  }

  const spacexData = data.spacexData;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spacexData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpaceXTable;
