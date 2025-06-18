import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './SpendingChart.css';

const data = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 2100 },
  { month: 'Mar', amount: 800 },
  { month: 'Apr', amount: 1600 },
  { month: 'May', amount: 900 },
  { month: 'Jun', amount: 2400 },
];

const SpendingChart = () => {
  return (
    <div className="chart-container">
      <h3>Monthly Spending</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#00c49f" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;
