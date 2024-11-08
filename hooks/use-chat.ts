"use client";

import { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { role: 'user', content }]);

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant. Provide clear, concise responses."
          },
          ...messages,
          { role: "user", content }
        ]
      });

      const assistantMessage = response.choices[0].message.content;
      if (assistantMessage) {
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading
  };
}