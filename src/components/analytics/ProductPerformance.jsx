import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
  { name: "Jun", stock: 4000, entrees: 2400, sorties: 2400 },
  { name: "Jul", stock: 3000, entrees: 1398, sorties: 2210 },
  { name: "Aug", stock: 2000, entrees: 9800, sorties: 2290 },
  { name: "Sep", stock: 2780, entrees: 3908, sorties: 2000 },
  { name: "Oct", stock: 1890, entrees: 4800, sorties: 2181 },
];

const ProductPerformance = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Historique de Colle Acrylique blanc
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="stock" fill="#8B5CF6" />
            <Bar dataKey="entrees" fill="#10B981" />
            <Bar dataKey="sorties" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default ProductPerformance;
