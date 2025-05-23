"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 5 },
  { name: "Mar", value: 13 },
  { name: "Apr", value: 17 },
  { name: "May", value: 13 },
  { name: "Jun", value: 11 },
  { name: "Jul", value: 18 },
  { name: "Aug", value: 7 },
  { name: "Sep", value: 12 },
  { name: "Oct", value: 15 },
  { name: "Nov", value: 11 },
  { name: "Dec", value: 16 },
];

export default function Chartds() {
  return (
    <div className="w-full h-64 bg-white dark:bg-neutral-900 p-4 pt-5 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
        monthly project
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
