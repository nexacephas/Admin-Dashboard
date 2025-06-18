import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';
import './BookingChart.css'; // 💡 Make sure this is linked

const data = [
  { month: 'Jan', bookings: 40 },
  { month: 'Feb', bookings: 60 },
  { month: 'Mar', bookings: 75 },
  { month: 'Apr', bookings: 100 },
  { month: 'May', bookings: 95 },
  { month: 'Jun', bookings: 120 }
];

const BookingChart = () => {
  return (
    <div className="booking-chart-container">
      <div className="booking-chart-header">
        <h3 className="booking-chart-title">Monthly Bookings Overview</h3>
        <span className="booking-chart-subtitle">Last 6 Months</span>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: '#2a2a3d', border: 'none', color: '#fff' }}
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
            />
            <Legend verticalAlign="top" height={36} />
            <Bar
              dataKey="bookings"
              fill="#007bff"
              radius={[6, 6, 0, 0]}
              barSize={35}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BookingChart;
