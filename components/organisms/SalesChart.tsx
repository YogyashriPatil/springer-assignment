"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, LineChart, Line,
  PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid, Cell
} from "recharts";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import ChartCard from "../molecules/ChartCard";
import { fetchSalesData, Sale } from "@/data/fetchSales";

export default function SalesChart() {
  const [type, setType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState(0);
  const [data, setData] = useState<Sale[]>([]);

  useEffect(() => {
    fetchSalesData().then(setData);
  }, []);

  const filtered = data.filter(d => d.sales >= threshold);

  return (
    <ChartCard>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
            <p className="text-sm text-gray-400 mb-1">Sales Threshold</p>
            <Input value={threshold} onChange={setThreshold} />
        </div>

        <div className="flex gap-2">
            <Button label="Bar" onClick={() => setType("bar")} />
            <Button label="Line" onClick={() => setType("line")} />
            <Button label="Pie" onClick={() => setType("pie")} />
        </div>
        </div>

      {data.length === 0 && <p>Loading sales data...</p>}

      {type === "bar" && (
        <BarChart width={500} height={300} data={filtered}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      )}

      {type === "line" && (
        <LineChart width={500} height={300} data={filtered}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#10b981" />
        </LineChart>
      )}

      {type === "pie" && (
        <PieChart width={400} height={300}>
          <Pie data={filtered} dataKey="sales" nameKey="year" outerRadius={100} label>
            {filtered.map((_, index) => <Cell key={index} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </ChartCard>
  );
}
