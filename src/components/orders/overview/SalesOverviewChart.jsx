import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Jul", montant: 8500 },
  { name: "Aug", montant: 8200 },
  { name: "Sep", montant: 8700 },
  { name: "Oct", montant: 7800 },
  { name: "Nov", montant: 6500 },
  { name: "Dec", montant: 6500 },
  { name: "Jan", montant: 6600 },
  { name: "Feb", montant: 4500 },
  { name: "Mar", montant: 4000 },
  { name: "Apr", montant: 3900 },
  { name: "May", montant: 3000 },
  { name: "Jun", montant: 6500 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Evolution du stock global (en €)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis
              stroke="#D5D8E5"
              domain={[1, 10]}
              ticks={[0, 2500, 5000, 7500, 10000]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="montant"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesOverviewChart;
