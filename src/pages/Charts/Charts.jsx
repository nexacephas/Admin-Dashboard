// src/pages/Charts.jsx
import React from 'react';
import './Charts.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Jan', users: 4000, sales: 2400 },
  { name: 'Feb', users: 3000, sales: 1398 },
  { name: 'Mar', users: 2000, sales: 9800 },
  { name: 'Apr', users: 2780, sales: 3908 },
  { name: 'May', users: 1890, sales: 4800 },
  { name: 'Jun', users: 2390, sales: 3800 },
  { name: 'Jul', users: 3490, sales: 4300 },
];

const pieData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Charts = () => {
  return (
    <div className="charts-page">
      <h2>Analytics & Charts</h2>

      <div className="chart-section">
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Monthly Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Device Usage</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
