"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Sample data for resource usage
const data = [
  { name: "Doctors", current: 32, predicted: 35 },
  { name: "Nurses", current: 54, predicted: 60 },
  { name: "ICU Beds", current: 18, predicted: 22 },
  { name: "Ventilators", current: 12, predicted: 15 },
  { name: "OR Rooms", current: 8, predicted: 10 },
]

export default function ResourceUsageChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
        <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={80}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar dataKey="current" name="Current" fill="#3b82f6" barSize={10} radius={[0, 4, 4, 0]} />
        <Bar dataKey="predicted" name="Predicted" fill="#f97316" barSize={10} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
