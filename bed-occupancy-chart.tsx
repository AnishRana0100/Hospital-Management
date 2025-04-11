"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts"

// Sample data for bed occupancy
const data = [
  { department: "ICU", current: 85, capacity: 100 },
  { department: "Emergency", current: 70, capacity: 100 },
  { department: "Pediatrics", current: 60, capacity: 100 },
  { department: "Surgery", current: 90, capacity: 100 },
  { department: "General", current: 75, capacity: 100 },
  { department: "Maternity", current: 65, capacity: 100 },
]

export default function BedOccupancyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="department" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value) => [`${value}%`, "Occupancy"]}
        />
        <Legend verticalAlign="top" height={36} />
        <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="3 3" />
        <Bar dataKey="current" name="Current Occupancy (%)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
