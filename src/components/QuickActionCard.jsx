export default function QuickActionCard({
  icon,

  title,
}) {
  return (
    <div className="quick-card">
      <div className="quick-icon">{icon}</div>

      <div className="quick-title">{title}</div>
    </div>
  );
}
