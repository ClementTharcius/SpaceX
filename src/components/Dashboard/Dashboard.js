import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import SpaceXTable from './SpaceXTable';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SpaceXTable />
      <MainContent />
    </div>
  );
};

export default Dashboard;
