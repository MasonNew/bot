"use client";

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send, Minimize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TerminalMessage } from './terminal-message';
import { useChat } from '@/hooks/use-chat';

export function Terminal() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    await sendMessage(userMessage);
  };

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 w-[440px] bg-gray-900/95 rounded-lg border border-gray-800 shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out',
        isMinimized ? 'h-12' : 'h-[440px]'
      )}
    >
      <div className="flex items-center justify-between p-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-gray-200">AI Terminal</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <Minimize2 className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="p-4 h-[340px] overflow-y-auto">
            {messages.map((message, index) => (
              <TerminalMessage key={index} {...message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/50 border-t border-gray-800"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-violet-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-3 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}