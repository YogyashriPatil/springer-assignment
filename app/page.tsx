import SalesChart from "@/components/organisms/SalesChart";
import Image from "next/image";
import StatCard from "@/components/molecules/StatCard";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
       {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">📊 Sales Analytics Dashboard</h1>
          <p className="text-gray-400">Track yearly sales performance</p>
        </div>

        <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">
          <p className="text-sm text-gray-300">Updated: Just now</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Sales" value="$545,000" />
        <StatCard title="Best Year" value="2023" />
        <StatCard title="Growth Rate" value="+32%" />
      </div>

      {/* Chart */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
          <h2 className="text-xl font-semibold mb-4">Insights</h2>
          <ul className="space-y-2 text-gray-300">
            <li>📈 2023 has highest revenue</li>
            <li>🔥 Growth accelerating yearly</li>
            <li>💰 Average annual increase: 32%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
