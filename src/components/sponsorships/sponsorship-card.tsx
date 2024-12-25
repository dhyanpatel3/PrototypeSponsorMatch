import { motion } from 'framer-motion';
import { DollarSign, Users, Target } from 'lucide-react';
import { Button } from '../ui/button';

export interface SponsorshipData {
  id: string;
  title: string;
  brand: string;
  budget: string;
  requirements: string;
  audienceSize: string;
  category: string;
  imageUrl: string;
}

export function SponsorshipCard({ data }: { data: SponsorshipData }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{data.brand}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="mr-2 h-4 w-4" />
            {data.budget}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="mr-2 h-4 w-4" />
            {data.audienceSize}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Target className="mr-2 h-4 w-4" />
            {data.category}
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full">Apply Now</Button>
        </div>
      </div>
    </motion.div>
  );
}