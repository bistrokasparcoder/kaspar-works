import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import { sendMessageToGemini, initializeChat } from '../../services/geminiService';
import { ChatMessage, LoadingState } from '../../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi there! 👋 I\'m here to help you learn more about Kaspar Works. What can I do for you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && loadingState === LoadingState.IDLE) {
       initializeChat().catch(console.error);
    }
  }, [isOpen, loadingState]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a bit of trouble connecting. Could you try again in a moment?", isError: true }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-100 ${isOpen ? 'bg-slate-900 rotate-180' : 'bg-slate-900 hover:scale-110'}`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X className="text-white" size={24} /> : <MessageSquare className="text-white group-hover:animate-pulse" size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl z-40 flex flex-col transition-all duration-500 transform origin-bottom-right border border-gray-100 overflow-hidden ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'}`}
        style={{ height: '550px', boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-2 rounded-xl shadow-lg">
                    <Sparkles size={16} className="text-white" />
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">Kaspar AI</h3>
                    <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        <p className="text-slate-400 text-xs font-medium">Online</p>
                    </div>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <ChevronDown size={20} />
            </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-slate-50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-2xl rounded-tr-sm' 
                    : msg.isError 
                        ? 'bg-red-50 text-red-600 border border-red-100 rounded-2xl rounded-tl-sm'
                        : 'bg-white text-slate-700 border border-gray-100 rounded-2xl rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loadingState === LoadingState.LOADING && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-50">
          <form onSubmit={handleSendMessage} className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="w-full pl-5 pr-12 py-3.5 bg-slate-50 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-100 focus:bg-white text-sm text-slate-800 transition-all placeholder:text-slate-400"
            />
            <button 
              type="submit"
              disabled={loadingState === LoadingState.LOADING || !inputValue.trim()}
              className="absolute right-2 p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            >
              {loadingState === LoadingState.LOADING ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="ml-0.5" />}
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-300">Powered by Gemini AI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;