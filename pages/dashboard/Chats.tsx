
import React, { useState } from 'react';
import { Send, Search, Phone, Video, Info } from 'lucide-react';
import { ChatMessage } from '../../types';

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: '1', sender: 'Support Bot', message: 'Hello! How can I help you today?', timestamp: '10:00 AM', isMe: false },
  { id: '2', sender: 'Me', message: 'I have a question about the BHVR starter kit.', timestamp: '10:02 AM', isMe: true },
  { id: '3', sender: 'Support Bot', message: 'Sure, I am here to help. What would you like to know?', timestamp: '10:05 AM', isMe: false },
];

const Chats: React.FC = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, {
      id: Date.now().toString(),
      sender: 'Me',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    }]);
    setNewMessage('');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden h-[calc(100vh-12rem)] flex">
      {/* Sidebar List */}
      <div className="w-80 border-r border-slate-100 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search chats..." className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-slate-50 border-l-4 transition-all ${i === 1 ? 'bg-indigo-50/50 border-indigo-600' : 'border-transparent'}`}>
              <img src={`https://picsum.photos/seed/${i}/40/40`} className="w-12 h-12 rounded-2xl" alt="" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-900 truncate">Customer #{i}00{i}</h4>
                  <span className="text-[10px] text-slate-400 font-bold">12:30 PM</span>
                </div>
                <p className="text-xs text-slate-500 truncate">Hey, do you have this in blue?</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0">
          <div className="flex items-center gap-3">
            <img src="https://picsum.photos/seed/bot/40/40" className="w-10 h-10 rounded-xl" alt="" />
            <div>
              <div className="font-bold text-slate-900">Support Bot</div>
              <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"><Phone className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"><Video className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"><Info className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.isMe ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-none' : 'bg-slate-100 text-slate-900 rounded-2xl rounded-tl-none'} p-4 shadow-sm`}>
                <p className="text-sm leading-relaxed">{msg.message}</p>
                <div className={`text-[10px] mt-2 font-bold ${msg.isMe ? 'text-indigo-100' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 bg-white">
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <input 
              type="text" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2" 
            />
            <button 
              onClick={handleSend}
              className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-transform active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
