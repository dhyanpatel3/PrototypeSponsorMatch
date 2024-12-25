import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { HandshakeIcon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <HandshakeIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">SponsorMatch</span>
        </Link>
        
        <div className="hidden space-x-6 sm:flex">
          <Link to="/explore" className="text-gray-600 hover:text-gray-900">Explore</Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
          <Link to="/messages" className="text-gray-600 hover:text-gray-900">Messages</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}