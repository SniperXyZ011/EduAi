import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { getGeminiResponse } from "./GeminiAPI";

const AiTutor = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I\'m your AI tutor. How can I help you today?' },
    { role: 'user', content: 'Can you help me understand derivatives?' },
    { role: 'ai', content: 'Of course! A derivative measures the rate of change of a function. Let\'s start with a simple example. Think of velocity - it\'s the derivative of position with respect to time. Would you like me to explain this further?' },
  ]);

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = [...messages, { role: 'user', content: input }]
    setMessages(newMessage);

    const botResponse = getGeminiResponse(input);
    setMessages([...newMessage, { role: 'ai', content: botResponse }]);
    
    setInput('');
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col space-y-4">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">AI Tutor</h1>
        <p className="text-gray-600">Your personal learning assistant</p>
      </header>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`p-2 rounded-full ${
                  message.role === 'user' ? 'bg-indigo-100' : 'bg-gray-100'
                }`}
              >
                {message.role === 'user' ? (
                  <User className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Bot className="w-5 h-5 text-gray-600" />
                )}
              </div>
              <div
                className={`p-4 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your question..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default AiTutor;