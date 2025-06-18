import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import './BookingVsCancelChart.css';

const data = [
  { month: 'Jan', bookings: 80, cancellations: 10 },
  { month: 'Feb', bookings: 95, cancellations: 20 },
  { month: 'Mar', bookings: 70, cancellations: 15 },
  { month: 'Apr', bookings: 110, cancellations: 25 },
  { month: 'May', bookings: 100, cancellations: 18 },
  { month: 'Jun', bookings: 130, cancellations: 30 },
];

const BookingVsCancelChart = () => {
  return (
    <div className="booking-vs-cancel-chart card">
      <h3>Bookings vs Cancellations</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: '#2a2a3d', border: 'none', color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="bookings" stackId="a" fill="#007bff" radius={[4, 4, 0, 0]} />
          <Bar dataKey="cancellations" stackId="a" fill="#dc3545" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingVsCancelChart;
