
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Rocket } from 'lucide-react';

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">BHVR.</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Set new password</h1>
        <p className="text-slate-600 mb-8">Your new password must be different from previous used passwords.</p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="password" required placeholder="••••••••" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="password" required placeholder="••••••••" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
