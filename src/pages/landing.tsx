import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Choose Your Path
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Join our platform as a creator or brand and start your journey
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <Users className="mx-auto h-12 w-12 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold">Creator</h2>
              <p className="mt-2 text-gray-600">
                Find sponsorship opportunities and grow your audience
              </p>
              <Link to="/signup?type=creator">
                <Button className="mt-6 w-full">Join as Creator</Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <DollarSign className="mx-auto h-12 w-12 text-green-500" />
              <h2 className="mt-4 text-2xl font-bold">Brand</h2>
              <p className="mt-2 text-gray-600">
                Connect with creators and launch successful campaigns
              </p>
              <Link to="/signup?type=brand">
                <Button className="mt-6 w-full">Join as Brand</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}