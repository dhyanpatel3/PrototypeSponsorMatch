import { Camera, Link, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProfileOverview() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="text-center">
        <div className="relative mx-auto h-24 w-24">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="rounded-full"
          />
          <button className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600">
            <Camera className="h-4 w-4" />
          </button>
        </div>
        <h2 className="mt-4 text-xl font-bold">Alex Johnson</h2>
        <p className="text-sm text-gray-600">Tech & Gaming Creator</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Instagram className="h-5 w-5 text-pink-500" />
            <span>45.2K followers</span>
          </div>
          <Button variant="outline" size="sm">Connect</Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Youtube className="h-5 w-5 text-red-500" />
            <span>28.5K subscribers</span>
          </div>
          <Button variant="outline" size="sm">Connect</Button>
        </div>
      </div>

      <div className="mt-6">
        <Button className="w-full">Edit Profile</Button>
      </div>
    </div>
  );
}