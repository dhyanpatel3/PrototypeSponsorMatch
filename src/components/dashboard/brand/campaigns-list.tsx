import { motion } from 'framer-motion';
import { Eye, MessageSquare, Users } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    title: 'Summer Gaming Campaign',
    status: 'Active',
    applications: 12,
    views: 245,
    messages: 8,
  },
  {
    id: 2,
    title: 'Tech Review Series',
    status: 'Pending',
    applications: 5,
    views: 120,
    messages: 3,
  },
];

export function CampaignsList() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-xl font-bold">Your Campaigns</h2>
      <div className="mt-6 space-y-4">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
          >
            <div>
              <h3 className="font-semibold">{campaign.title}</h3>
              <span className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${
                campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {campaign.status}
              </span>
            </div>
            
            <div className="flex space-x-6">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{campaign.applications}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{campaign.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{campaign.messages}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}