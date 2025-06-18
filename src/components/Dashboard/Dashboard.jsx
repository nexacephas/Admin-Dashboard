import React from 'react';
import './Dashboard.css';
import WelcomeCard from './WelcomeCard';
import StatsCards from './StatsCards';
import BookingChart from './BookingChart';
import SpendingChart from './SpendingChart';
import RecentBookings from './RecentBookings';
import QuickActions from './QuickActions';
import UpcomingTrip from './UpcomingTrip';
import UserGrowthChart from './UserGrowthChart';
import BookingSourcesChart from './BookingSourcesChart';
import BookingVsCancelChart from './BookingVsCancelChart';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WelcomeCard />
      <StatsCards />
      <div className="dashboard-charts">
        <BookingChart />
        <SpendingChart />
        <UserGrowthChart/>
        <BookingSourcesChart/>
        <BookingVsCancelChart/>
      </div>
      <div className="dashboard-lists">
        <RecentBookings />
        <UpcomingTrip />
      </div>
      <QuickActions />
    </div>
  );
};

export default Dashboard;
