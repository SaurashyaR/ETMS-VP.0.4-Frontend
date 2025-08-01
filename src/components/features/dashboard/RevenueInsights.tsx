"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/ButtonVariant";

const data = [
  { month: "Jan", revenue: 64.51, tickets: 35.55, customer: 85.72 },
  { month: "Feb", revenue: 31.53, tickets: 41.38, customer: 76.52 },
  { month: "Mar", revenue: 18.42, tickets: 48.55, customer: 56.09 },
  { month: "Apr", revenue: 94.81, tickets: 22.35, customer: 61.78 },
  { month: "May", revenue: 97.44, tickets: 23.25, customer: 59.09 },
  { month: "Jun", revenue: 54.36, tickets: 57.02, customer: 70.81 },
  { month: "Jul", revenue: 43.74, tickets: 25.46, customer: 85.04 },
  { month: "Aug", revenue: 37.86, tickets: 66.94, customer: 56.22 },
  { month: "Sep", revenue: 36.07, tickets: 40.28, customer: 60.68 },
  { month: "Oct", revenue: 69.7, tickets: 38.29, customer: 62.75 },
  { month: "Nov", revenue: 97.97, tickets: 31.06, customer: 60.65 },
  { month: "Dec", revenue: 79.18, tickets: 26.75, customer: 79.77 },
];

export default function RevenueInsights() {
  const [year, setYear] = useState(2024);

  const incrementYear = () => setYear((y) => y + 1);
  const decrementYear = () => setYear((y) => y - 1);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-[6px] rounded-full">
            <CalendarDays size={16} className="text-gray-800" />
          </div>
          <h2 className="text-[14px] font-semibold text-gray-900">
            Revenue Insights
          </h2>
        </div>
        <Button
          variant="outline"
          className="rounded-lg text-[12px] px-2 py-[2px] h-auto border-gray-300 flex items-center gap-1"
        >
          <button
            type="button"
            onClick={decrementYear}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Previous year"
          >
            <ChevronLeft size={14} />
          </button>

          <span className="text-[13px] select-none">{year}</span>

          <button
            type="button"
            onClick={incrementYear}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Next year"
          >
            <ChevronRight size={14} />
          </button>
        </Button>
      </div>

      <div className="w-full h-[270px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
            />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{ fontSize: 12 }}
              labelStyle={{ fontSize: 12 }}
              cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
            />
            <Legend
              verticalAlign="top"
              iconType="circle"
              height={36}
              formatter={(value) => (
                <span className="text-xs text-gray-600 font-medium">{value}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="customer"
              stroke="#9089FC"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              name="Revenue Per Customer"
            />
            <Line
              type="monotone"
              dataKey="tickets"
              stroke="#FB7185"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              name="Ticket Sales"
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#38BDF8"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              name="Net Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
