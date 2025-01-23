import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import DailySalesTrend02 from "../components/sales/DailySalesTrend02";

const salesStats = {
  totalRevenue: "85",
  averageOrderValue: "-250€",
  conversionRate: "-3.45%",
  salesGrowth: "92",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Historique Acrylique Blanc" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* SALES STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Entrées"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name="Sorties"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
          <StatCard
            name="Delta en euros"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name="Evolution"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailySalesTrend02 />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};
export default SalesPage;
