import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './BookingSourcesChart.css';

const data = [
  { name: 'Mobile App', value: 520 },
  { name: 'Website', value: 320 },
  { name: 'Referral', value: 160 },
];

const COLORS = ['#007bff', '#28a745', '#ffc107'];

const BookingSourcesChart = () => {
  return (
    <div className="booking-sources-chart card">
      <h3>Booking Sources</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#2a2a3d', border: 'none', color: '#fff' }}
          />
          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingSourcesChart;
