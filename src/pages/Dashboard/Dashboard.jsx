// client/src/pages/Dashboard/Dashboard.jsx

import HeroHeader from "../../components/HeroHeader";
import StatCard from "../../components/StatCard";
import QuickActionCard from "../../components/QuickActionCard";
import "./Dashboard.css";
export default function Dashboard() {
  const shop = {
    name: "Raj Mobile Point",

    address: "Bhaptiyahi Bazar, Supaul",

    ownerName: "Raj Kumar",

    plan: "Starter",
  };

  return (
    <div className="dashboard">
      <HeroHeader shop={shop} />

      <div className="stats-grid">
        <StatCard
          title="Today's Sales"
          value="₹28,500"
          subtext="+12% than yesterday"
        />

        <StatCard title="BUY Devices" value="18" subtext="7 today" />

        <StatCard title="SELL Devices" value="32" subtext="15 today" />

        <StatCard
          title="Compliance"
          value="100%"
          subtext="All receipts verified"
        />
      </div>

      <h2>Quick Actions</h2>

      <div className="quick-grid">
        <QuickActionCard icon="➕" title="New Receipt" />

        <QuickActionCard icon="📄" title="Reports" />

        <QuickActionCard icon="📱" title="Verify IMEI" />

        <QuickActionCard icon="👤" title="Customers" />
      </div>

      <h2>Recent Transactions</h2>
    </div>
  );
}
