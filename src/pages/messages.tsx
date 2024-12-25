import { Chat } from '@/components/messaging/chat';

export function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1">
            {/* Chat list will go here */}
          </div>
          <div className="lg:col-span-3">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}