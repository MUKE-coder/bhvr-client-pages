
import React from 'react';
import { User, Mail, Shield, Camera, Edit } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Your Profile</h1>
        <p className="text-slate-500 font-medium">Personal identity and account preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm text-center">
          <div className="relative inline-block mb-8">
             <img src="https://picsum.photos/seed/admin/200/200" className="w-32 h-32 rounded-[32px] border-4 border-slate-50 shadow-xl" alt="" />
             <button className="absolute -bottom-2 -right-2 p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100 hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
             </button>
          </div>
          <h2 className="text-2xl font-black text-slate-900">John Doe</h2>
          <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-8">Pro Merchant & Founder</p>
          <div className="flex flex-col gap-3">
             <div className="flex justify-between px-6 py-4 bg-slate-50 rounded-2xl text-sm font-bold">
                <span className="text-slate-400">Total Sales</span>
                <span className="text-slate-900">$84,250</span>
             </div>
             <div className="flex justify-between px-6 py-4 bg-slate-50 rounded-2xl text-sm font-bold">
                <span className="text-slate-400">Joined</span>
                <span className="text-slate-900">Jan 2024</span>
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
           <div className="flex justify-between items-center mb-10">
             <h3 className="text-xl font-bold text-slate-900">Personal Details</h3>
             <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-xl transition-all"><Edit className="w-5 h-5" /></button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl font-bold text-slate-900">
                  <User className="w-4 h-4 text-slate-400" /> John Doe
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl font-bold text-slate-900">
                  <Mail className="w-4 h-4 text-slate-400" /> john@doe.com
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Role</label>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl font-bold text-slate-900">
                  <Shield className="w-4 h-4 text-slate-400" /> Administrator
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Timezone</label>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl font-bold text-slate-900">
                  GMT-5 (New York)
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
