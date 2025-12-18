
import React from 'react';
import { User, Bell, Shield, Palette, Globe, Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-1">
          {[
            { name: 'General', icon: <User className="w-5 h-5" />, active: true },
            { name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
            { name: 'Security', icon: <Shield className="w-5 h-5" /> },
            { name: 'Appearance', icon: <Palette className="w-5 h-5" /> },
            { name: 'Regional', icon: <Globe className="w-5 h-5" /> },
          ].map((item) => (
            <button key={item.name} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold transition-all ${item.active ? 'bg-white text-indigo-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}>
              {item.icon} {item.name}
            </button>
          ))}
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" defaultValue="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" defaultValue="john@doe.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about yourself..."></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                <Save className="w-5 h-5" /> Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div>
                  <div className="font-bold text-slate-900">Two-factor Authentication</div>
                  <div className="text-sm text-slate-500">Protect your account with an extra layer of security.</div>
                </div>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">Enable</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div>
                  <div className="font-bold text-slate-900">Session Management</div>
                  <div className="text-sm text-slate-500">You are currently logged in on 3 devices.</div>
                </div>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
