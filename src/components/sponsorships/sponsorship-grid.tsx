import { SponsorshipCard, SponsorshipData } from './sponsorship-card';

const SAMPLE_SPONSORSHIPS: SponsorshipData[] = [
  {
    id: '1',
    title: 'Gaming Peripherals Campaign',
    brand: 'TechGear Pro',
    budget: '$1,000 - $2,000',
    requirements: 'Min. 10k followers, Gaming content',
    audienceSize: '10k+ followers',
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Fitness App Promotion',
    brand: 'FitLife',
    budget: '$2,000 - $3,000',
    requirements: 'Min. 20k followers, Fitness/Wellness',
    audienceSize: '20k+ followers',
    category: 'Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Sustainable Fashion',
    brand: 'EcoStyle',
    budget: '$1,500 - $2,500',
    requirements: 'Min. 15k followers, Fashion/Lifestyle',
    audienceSize: '15k+ followers',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
  },
];

export function SponsorshipGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SAMPLE_SPONSORSHIPS.map((sponsorship) => (
        <SponsorshipCard key={sponsorship.id} data={sponsorship} />
      ))}
    </div>
  );
}