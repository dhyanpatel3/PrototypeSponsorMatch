import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Target, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CampaignForm() {
  const [formData, setFormData] = useState({
    title: '',
    budget: '',
    audienceSize: '',
    category: '',
    requirements: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle campaign creation
    console.log('Campaign created:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold">Create New Campaign</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="space-y-4">
          <Input
            placeholder="Campaign Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Budget Range"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Required Audience Size"
                value={formData.audienceSize}
                onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-gray-400" />
            <Input
              placeholder="Category (e.g., Gaming, Fashion, Tech)"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </div>

          <textarea
            placeholder="Campaign Requirements"
            className="w-full rounded-md border border-gray-200 p-3"
            rows={3}
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          />

          <textarea
            placeholder="Campaign Description"
            className="w-full rounded-md border border-gray-200 p-3"
            rows={5}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">Upload campaign images</p>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Launch Campaign
        </Button>
      </form>
    </motion.div>
  );
}