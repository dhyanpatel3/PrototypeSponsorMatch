import { motion } from 'framer-motion';
import { SponsorshipGrid } from '@/components/sponsorships/sponsorship-grid';

export function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Explore Opportunities</h1>
          <p className="mt-4 text-gray-600">
            Discover sponsorship opportunities that match your brand and audience
          </p>
        </motion.div>

        <div className="mt-12">
          <SponsorshipGrid />
        </div>
      </div>
    </div>
  );
}