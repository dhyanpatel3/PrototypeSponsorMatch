import { motion } from 'framer-motion';
import { ArrowRight, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const stats = [
  { label: 'Collaborations', value: '10,000+', icon: Users },
  { label: 'Brands Registered', value: '500+', icon: DollarSign },
  { label: 'Success Rate', value: '95%', icon: TrendingUp },
];

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connecting Creators and Brands for Successful Sponsorships
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of creators and brands making meaningful partnerships and growing together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Sign Up <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Opportunities
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg"
              >
                <Icon className="h-8 w-8 text-blue-600" />
                <div className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}