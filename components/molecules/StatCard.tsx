import { motion } from "framer-motion";
type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/20 shadow-lg hover:shadow-indigo-500/20 transition hover:-translate-y-1">
      <p className="text-sm text-gray-300">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
