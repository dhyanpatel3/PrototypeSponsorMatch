import { motion } from 'framer-motion';
import { DollarSign, Users, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const opportunities = [
  {
    id: 1,
    brand: 'TechGear Pro',
    title: 'Gaming Peripherals Review',
    budget: '$1,000 - $2,000',
    requirements: '10k+ followers',
    category: 'Gaming',
  },
  {
    id: 2,
    brand: 'FitLife',
    title: 'Fitness App Promotion',
    budget: '$2,000 - $3,000',
    requirements: '20k+ followers',
    category: 'Fitness',
  },
];

export function OpportunityList() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-xl font-bold">Available Opportunities</h2>
      <div className="mt-6 space-y-4">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={opportunity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border p-4 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{opportunity.title}</h3>
                <p className="text-sm text-gray-600">{opportunity.brand}</p>
              </div>
              <Button size="sm">Apply Now</Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{opportunity.budget}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{opportunity.requirements}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{opportunity.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}