import { ReactNode } from "react";

export default function ChartCard({ children }: { children: ReactNode }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2x">
      {children}
    </div>
  );
}
