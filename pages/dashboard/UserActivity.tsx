
import React from 'react';
import { ShoppingBag, Key, User, MessageSquare, CreditCard, RefreshCw } from 'lucide-react';

const ActivityItem = ({ icon: Icon, title, time, description, color }: any) => (
  <div className="flex gap-6 relative group pb-10 last:pb-0">
    <div className="absolute top-10 left-6 bottom-0 w-px bg-slate-100 group-last:hidden"></div>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1 pt-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-slate-900">{title}</h4>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{time}</span>
      </div>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

const UserActivity: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">User Activity</h1>
          <p className="text-slate-500 font-medium">Historical audit log of system events.</p>
        </div>
        <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-400 hover:text-indigo-600">
           <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
        <ActivityItem 
          icon={ShoppingBag}
          title="New Order Received"
          time="10 minutes ago"
          description="Customer John Doe purchased Titanium X Series Pro for $1,499.00."
          color="bg-emerald-50 text-emerald-600"
        />
        <ActivityItem 
          icon={Key}
          title="Login Attempt"
          time="2 hours ago"
          description="Successful login from a new device in New York, USA."
          color="bg-indigo-50 text-indigo-600"
        />
        <ActivityItem 
          icon={User}
          title="Profile Updated"
          time="5 hours ago"
          description="You changed your display name and updated the avatar."
          color="bg-amber-50 text-amber-600"
        />
        <ActivityItem 
          icon={MessageSquare}
          title="Chat Message"
          time="Yesterday"
          description="Responded to inquiry regarding product SKU-1002X."
          color="bg-blue-50 text-blue-600"
        />
        <ActivityItem 
          icon={CreditCard}
          title="Billing Renewed"
          time="2 days ago"
          description="Pro Monthly subscription renewed automatically for $29.00."
          color="bg-purple-50 text-purple-600"
        />
      </div>
    </div>
  );
};

export default UserActivity;
