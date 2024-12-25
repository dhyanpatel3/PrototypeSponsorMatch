import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { LandingPage } from './pages/landing';
import { AuthPage } from './pages/auth';
import { ExplorePage } from './pages/explore';
import { BrandDashboard } from './components/dashboard/brand/brand-dashboard';
import { CreatorDashboard } from './components/dashboard/creator/creator-dashboard';
import { MessagesPage } from './pages/messages';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/dashboard/brand" element={<BrandDashboard />} />
        <Route path="/dashboard/creator" element={<CreatorDashboard />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </Router>
  );
}