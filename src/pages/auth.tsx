import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthForm } from '@/components/auth/auth-form';
import { NicheSelection } from '@/components/onboarding/niche-selection';
import type { UserType } from '@/types/user';

export function AuthPage() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<UserType>();
  
  const isLogin = location.pathname === '/login';
  const searchParams = new URLSearchParams(location.search);
  const typeFromUrl = searchParams.get('type') as UserType | null;

  if (isAuthenticated && userType) {
    return <NicheSelection userType={userType} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <AuthForm 
        mode={isLogin ? 'login' : 'signup'}
        onSuccess={(type) => {
          setUserType(type || typeFromUrl || 'creator');
          setIsAuthenticated(true);
        }}
      />
    </div>
  );
}