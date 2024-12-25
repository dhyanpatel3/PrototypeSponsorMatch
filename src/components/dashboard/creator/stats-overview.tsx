import { DollarSign, Users, Star, TrendingUp } from 'lucide-react';

export function StatsOverview() {
  const stats = [
    { icon: DollarSign, label: 'Total Earnings', value: '$12,450', color: 'text-green-500' },
    { icon: Users, label: 'Active Campaigns', value: '3', color: 'text-blue-500' },
    { icon: Star, label: 'Success Rate', value: '95%', color: 'text-yellow-500' },
    { icon: TrendingUp, label: 'Growth Rate', value: '+12%', color: 'text-purple-500' },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="rounded-lg bg-white p-6 shadow-md">
          <Icon className={`h-8 w-8 ${color}`} />
          <p className="mt-2 text-sm text-gray-600">{label}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}