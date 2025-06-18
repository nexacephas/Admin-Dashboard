import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import './UserGrowthChart.css';

const data = [
  { month: 'Jan', users: 50 },
  { month: 'Feb', users: 120 },
  { month: 'Mar', users: 180 },
  { month: 'Apr', users: 220 },
  { month: 'May', users: 300 },
  { month: 'Jun', users: 420 },
];

const UserGrowthChart = () => {
  return (
    <div className="user-growth-chart card">
      <h3>User Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c49f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00c49f" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: '#2a2a3d', border: 'none', color: '#fff' }}
            cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#00c49f"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
