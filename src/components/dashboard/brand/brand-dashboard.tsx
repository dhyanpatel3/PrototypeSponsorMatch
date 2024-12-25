import { motion } from 'framer-motion';
import { Briefcase, MessageSquare, TrendingUp } from 'lucide-react';
import { CampaignForm } from './campaign-form';
import { CampaignsList } from './campaigns-list';

export function BrandDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 space-y-6"
          >
            <CampaignForm />
            <CampaignsList />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold">Quick Stats</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-blue-500" />
                    <span>Active Campaigns</span>
                  </div>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-green-500" />
                    <span>Creator Messages</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <span>Total Reach</span>
                  </div>
                  <span className="font-semibold">250K+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}