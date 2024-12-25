import { useState } from 'react';
import { MessageBubble } from './message-bubble';
import { MessageInput } from './message-input';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "Creator",
    content: "Hi! I'm interested in your gaming campaign.",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "Brand",
    content: "Great! What's your audience size and engagement rate?",
    timestamp: "10:32 AM",
  },
];

export function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: messages.length + 1,
      sender: "Brand",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex h-[600px] flex-col rounded-lg bg-white shadow-md">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Chat with Creator</h2>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <MessageBubble
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
            isSender={message.sender === "Brand"}
            animationDelay={index * 0.1}
          />
        ))}
      </div>

      <MessageInput
        value={newMessage}
        onChange={setNewMessage}
        onSend={handleSend}
      />
    </div>
  );
}