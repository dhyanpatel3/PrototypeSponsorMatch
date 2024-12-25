import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import type { UserType } from '@/types/user';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSuccess: (type: UserType) => void;
}

export function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const [userType, setUserType] = useState<UserType>('creator');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle authentication here
    onSuccess(userType);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">{mode === 'login' ? 'Welcome back' : 'Create account'}</h2>
        <p className="mt-2 text-gray-600">
          {mode === 'login' ? 'Sign in to your account' : 'Start your sponsorship journey'}
        </p>
      </div>

      {mode === 'signup' && (
        <div className="flex rounded-lg bg-gray-50 p-1">
          {(['creator', 'brand'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`flex-1 rounded-md py-2 text-sm font-medium ${
                userType === type
                  ? 'bg-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          {mode === 'login' ? 'Sign in' : 'Create account'}
        </Button>
      </form>
    </motion.div>
  );
}