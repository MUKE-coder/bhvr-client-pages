
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Jan', revenue: 4000, orders: 240 },
  { name: 'Feb', revenue: 3000, orders: 198 },
  { name: 'Mar', revenue: 5000, orders: 310 },
  { name: 'Apr', revenue: 2780, orders: 205 },
  { name: 'May', revenue: 4890, orders: 290 },
  { name: 'Jun', revenue: 6390, orders: 420 },
  { name: 'Jul', revenue: 5900, orders: 380 },
];

const Overview: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50">Export PDF</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-100">Create Report</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '$84,254.00', trend: '+12.5%', icon: <DollarSign className="w-6 h-6" />, color: 'bg-emerald-50 text-emerald-600' },
          { title: 'New Customers', value: '1,234', trend: '+18.2%', icon: <Users className="w-6 h-6" />, color: 'bg-blue-50 text-blue-600' },
          { title: 'Active Orders', value: '456', trend: '-2.4%', icon: <ShoppingBag className="w-6 h-6" />, color: 'bg-orange-50 text-orange-600' },
          { title: 'Conversion Rate', value: '4.8%', trend: '+0.5%', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-violet-50 text-violet-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.color}`}>{stat.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.trend.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </span>
            </div>
            <div className="text-slate-500 text-sm font-semibold mb-1">{stat.title}</div>
            <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Revenue Over Time</h3>
            <select className="bg-slate-50 border-none rounded-xl text-sm font-semibold p-2">
              <option>Last 7 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#6366f1', strokeWidth: 2 }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Sales</h3>
          <div className="space-y-6">
            {[
              { name: 'Alex Rivera', email: 'alex@example.com', amount: '+$350.00', img: 'https://picsum.photos/seed/u1/40/40' },
              { name: 'Isabella Nguyen', email: 'isa@example.com', amount: '+$1,200.00', img: 'https://picsum.photos/seed/u2/40/40' },
              { name: 'William Smith', email: 'will@example.com', amount: '+$190.00', img: 'https://picsum.photos/seed/u3/40/40' },
              { name: 'Sofia Davis', email: 'sofia@example.com', amount: '+$2,500.00', img: 'https://picsum.photos/seed/u4/40/40' },
              { name: 'Marcus Miller', email: 'marcus@example.com', amount: '+$450.00', img: 'https://picsum.photos/seed/u5/40/40' },
            ].map((sale, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={sale.img} className="w-10 h-10 rounded-full" alt="" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-900">{sale.name}</div>
                  <div className="text-xs text-slate-500">{sale.email}</div>
                </div>
                <div className="text-sm font-bold text-green-600">{sale.amount}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            View All Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
