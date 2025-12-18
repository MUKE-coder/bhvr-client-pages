
import React from 'react';
import { Mail, Shield, UserPlus } from 'lucide-react';
import { Contributor } from '../../types';

const TEAM: Contributor[] = [
  { id: '1', name: 'Marcus Aurelius', role: 'Owner', avatar: 'https://picsum.photos/seed/m1/64/64', contributions: 1240 },
  { id: '2', name: 'Sophia Loren', role: 'Developer', avatar: 'https://picsum.photos/seed/m2/64/64', contributions: 890 },
  { id: '3', name: 'Jason Stat', role: 'Designer', avatar: 'https://picsum.photos/seed/m3/64/64', contributions: 450 },
  { id: '4', name: 'Emma Watson', role: 'Manager', avatar: 'https://picsum.photos/seed/m4/64/64', contributions: 210 },
];

const Contributors: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Contributors</h1>
          <p className="text-slate-500">Manage your team and their permissions.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100">
          <UserPlus className="w-5 h-5" /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-3xl border border-slate-200 text-center group hover:border-indigo-200 transition-colors shadow-sm">
            <img src={member.avatar} className="w-20 h-20 rounded-2xl mx-auto mb-4 border-4 border-slate-50 group-hover:border-indigo-50 transition-colors" alt="" />
            <h3 className="text-lg font-extrabold text-slate-900">{member.name}</h3>
            <p className="text-indigo-600 text-sm font-bold mb-4">{member.role}</p>
            <div className="flex justify-center gap-4 text-xs font-bold text-slate-400 border-t border-slate-100 pt-4 mt-4 uppercase tracking-wider">
              <div>
                <div className="text-slate-900 text-lg mb-0.5">{member.contributions}</div>
                Commits
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button className="flex-1 flex justify-center py-2 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
              <button className="flex-1 flex justify-center py-2 bg-slate-50 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors">
                <Shield className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
