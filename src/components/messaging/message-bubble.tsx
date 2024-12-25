import { motion } from 'framer-motion';

interface MessageBubbleProps {
  content: string;
  timestamp: string;
  isSender: boolean;
  animationDelay?: number;
}

export function MessageBubble({ content, timestamp, isSender, animationDelay = 0 }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isSender
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p>{content}</p>
        <span className="mt-1 text-xs opacity-75">{timestamp}</span>
      </div>
    </motion.div>
  );
}