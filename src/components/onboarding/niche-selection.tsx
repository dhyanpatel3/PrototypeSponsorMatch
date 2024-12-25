import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import type { UserType, ContentNiche } from '@/types/user';

const NICHE_OPTIONS: { label: string; value: ContentNiche; icon: string }[] = [
  { label: 'Gaming', value: 'gaming', icon: '🎮' },
  { label: 'Technology', value: 'tech', icon: '💻' },
  { label: 'Fashion', value: 'fashion', icon: '👗' },
  { label: 'Beauty', value: 'beauty', icon: '💄' },
  { label: 'Fitness', value: 'fitness', icon: '💪' },
  { label: 'Food', value: 'food', icon: '🍳' },
  { label: 'Travel', value: 'travel', icon: '✈️' },
  { label: 'Lifestyle', value: 'lifestyle', icon: '🌟' },
  { label: 'Education', value: 'education', icon: '📚' },
  { label: 'Music', value: 'music', icon: '🎵' },
];

interface NicheSelectionProps {
  userType: UserType;
}

export function NicheSelection({ userType }: NicheSelectionProps) {
  const [selectedNiches, setSelectedNiches] = useState<ContentNiche[]>([]);
  const navigate = useNavigate();

  const handleNicheToggle = (niche: ContentNiche) => {
    setSelectedNiches(prev =>
      prev.includes(niche)
        ? prev.filter(n => n !== niche)
        : [...prev, niche]
    );
  };

  const handleContinue = () => {
    if (selectedNiches.length > 0) {
      // In a real app, save the niches to user profile
      navigate(userType === 'creator' ? '/dashboard/creator' : '/dashboard/brand');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold">
            {userType === 'creator' 
              ? 'What content do you create?' 
              : 'What type of content creators are you looking for?'}
          </h1>
          <p className="mt-4 text-gray-600">
            Select all that apply to help us personalize your experience
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NICHE_OPTIONS.map((niche, index) => {
            const isSelected = selectedNiches.includes(niche.value);
            return (
              <motion.button
                key={niche.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNicheToggle(niche.value)}
                className={`relative flex h-32 items-center justify-center rounded-lg border-2 p-4 transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-200'
                }`}
              >
                {isSelected && (
                  <div className="absolute right-2 top-2 rounded-full bg-blue-500 p-1 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                )}
                <div className="text-center">
                  <span className="text-3xl">{niche.icon}</span>
                  <p className="mt-2 font-medium">{niche.label}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={selectedNiches.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}