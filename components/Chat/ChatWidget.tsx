import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import { sendMessageToGemini, initializeChat } from '../../services/geminiService';
import { ChatMessage, LoadingState } from '../../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi there! I\'m here to help you learn more about Kaspar Works. What can I do for you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages, isOpen]);

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
        className={`fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-indigo-500/20 transition-all duration-500 focus:outline-none ${
          isOpen
            ? 'bg-surface-200 border border-white/10 rotate-180'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110 hover:shadow-indigo-500/40'
        }`}
        aria-label="Toggle Chat"
      >
        {isOpen
          ? <X className="text-white" size={22} />
          : <MessageSquare className="text-white group-hover:animate-pulse" size={22} />
        }
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-3rem)] glass-strong rounded-[1.5rem] z-40 flex flex-col transition-all duration-500 transform origin-bottom-right overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
        style={{ height: '550px', boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.5)' }}
      >
        {/* Header */}
        <div className="bg-surface-100/80 backdrop-blur-xl px-6 py-5 flex items-center justify-between border-b border-white/[0.04]">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">Kaspar AI</h3>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <p className="text-slate-500 text-xs font-medium">Online</p>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/[0.05]">
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 bg-surface/50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[1rem] rounded-tr-sm shadow-lg shadow-indigo-500/10'
                    : msg.isError
                      ? 'bg-red-500/10 text-red-300 border border-red-500/20 rounded-[1rem] rounded-tl-sm'
                      : 'glass text-slate-300 rounded-[1rem] rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loadingState === LoadingState.LOADING && (
            <div className="flex justify-start">
              <div className="glass rounded-[1rem] rounded-tl-sm px-4 py-3 flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-surface-100/50 border-t border-white/[0.04]">
          <form onSubmit={handleSendMessage} className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="w-full pl-5 pr-12 py-3 bg-white/[0.03] border border-white/[0.06] rounded-full focus:outline-none focus:border-indigo-500/30 text-sm text-slate-200 transition-all placeholder:text-slate-600"
            />
            <button
              type="submit"
              disabled={loadingState === LoadingState.LOADING || !inputValue.trim()}
              className="absolute right-1.5 p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
            >
              {loadingState === LoadingState.LOADING ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} className="ml-0.5" />}
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-600">Powered by Gemini AI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;