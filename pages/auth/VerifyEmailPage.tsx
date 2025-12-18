
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2, Rocket } from 'lucide-react';

const VerifyEmailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-md text-center">
        <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Mail className="w-10 h-10 text-indigo-600" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Check your email</h1>
        <p className="text-slate-600 mb-8 text-lg">
          We sent a verification link to <span className="font-bold text-slate-900">john@doe.com</span>. 
          Please click the link to confirm your account.
        </p>

        <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors mb-6">
          Resend Verification Email
        </button>

        <Link to="/login" className="text-indigo-600 font-bold hover:text-indigo-700">
          Skip for now
        </Link>

        <div className="mt-12 pt-12 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400">
          <CheckCircle2 className="w-4 h-4" /> 
          <span className="text-sm font-medium">Verified by BHVR Security</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
