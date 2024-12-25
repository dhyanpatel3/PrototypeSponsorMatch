import { Send, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function MessageInput({ value, onChange, onSend }: MessageInputProps) {
  return (
    <div className="border-t p-4">
      <div className="flex space-x-2">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Paperclip className="h-5 w-5 text-gray-500" />
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-full border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none"
          onKeyPress={(e) => e.key === 'Enter' && onSend()}
        />
        <Button
          onClick={onSend}
          className="rounded-full"
          disabled={!value.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}