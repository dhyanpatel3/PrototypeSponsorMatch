import { motion } from 'framer-motion';
import { DollarSign, Users, Star, TrendingUp } from 'lucide-react';
import { OpportunityList } from './opportunity-list';
import { StatsOverview } from './stats-overview';
import { ProfileOverview } from './profile-overview';

export function CreatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 space-y-6"
          >
            <StatsOverview />
            <OpportunityList />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProfileOverview />
          </motion.div>
        </div>
      </div>
    </div>
  );
}