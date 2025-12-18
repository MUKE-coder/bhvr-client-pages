
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Search, Filter, Download, DollarSign, TrendingUp, CreditCard, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const SALES_DATA = [
  { day: 'Mon', amount: 2400 },
  { day: 'Tue', amount: 1398 },
  { day: 'Wed', amount: 9800 },
  { day: 'Thu', amount: 3908 },
  { day: 'Fri', amount: 4800 },
  { day: 'Sat', amount: 3800 },
  { day: 'Sun', amount: 4300 },
];

interface Sale {
  id: string;
  customer: string;
  amount: number;
  date: string;
  method: 'Stripe' | 'PayPal' | 'Apple Pay';
  status: 'completed' | 'processing' | 'refunded';
}

const TRANSACTIONS: Sale[] = [
  { id: 'TXN-9901', customer: 'Alice Johnson', amount: 125.00, date: '2024-05-24 14:30', method: 'Stripe', status: 'completed' },
  { id: 'TXN-9902', customer: 'Bob Smith', amount: 89.99, date: '2024-05-24 12:15', method: 'PayPal', status: 'completed' },
  { id: 'TXN-9903', customer: 'Charlie Davis', amount: 450.00, date: '2024-05-23 18:45', method: 'Apple Pay', status: 'processing' },
  { id: 'TXN-9904', customer: 'Diana Prince', amount: 12.50, date: '2024-05-23 10:20', method: 'Stripe', status: 'refunded' },
  { id: 'TXN-9905', customer: 'Edward Norton', amount: 1499.00, date: '2024-05-22 09:10', method: 'Stripe', status: 'completed' },
  { id: 'TXN-9906', customer: 'Fiona Apple', amount: 245.00, date: '2024-05-21 16:00', method: 'PayPal', status: 'completed' },
];

const Sales: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = TRANSACTIONS.filter(t => 
    t.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Sales Analytics</h1>
          <p className="text-slate-500 font-medium">Monitor your revenue streams and transaction history.</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm">
          <Download className="w-5 h-5" /> Export CSV
        </button>
      </div>

      {/* Summary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold text-slate-900">Weekly Revenue</h3>
            <div className="text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
               +12.4% vs last week
            </div>
          </div>
          <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SALES_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                  />
                  <Bar dataKey="amount" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </BarChart>
             </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-6">
           <div className="bg-indigo-600 p-8 rounded-[40px] text-white shadow-xl shadow-indigo-100 flex flex-col justify-between">
              <div>
                 <div className="p-3 bg-white/10 rounded-2xl w-fit mb-6"><DollarSign className="w-6 h-6" /></div>
                 <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-1">Monthly Revenue</div>
                 <div className="text-4xl font-black tracking-tight">$84,250.00</div>
              </div>
              <div className="flex items-center gap-2 mt-8 text-indigo-200 text-xs font-bold">
                 <TrendingUp className="w-4 h-4 text-emerald-400" /> 18% Increase from April
              </div>
           </div>
           <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
              <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl w-fit mb-6"><CreditCard className="w-6 h-6" /></div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Average Order</div>
              <div className="text-3xl font-black text-slate-900">$156.40</div>
           </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search TXN ID or Customer..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all" 
            />
          </div>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" /> Filter Method
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-8 py-5">Transaction ID</th>
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Method</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.map((txn) => (
                <tr key={txn.id} className="group hover:bg-slate-50/80 transition-all">
                  <td className="px-8 py-5 font-bold text-slate-900">{txn.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                       <img src={`https://picsum.photos/seed/${txn.customer}/32/32`} className="w-8 h-8 rounded-full shadow-sm" alt="" />
                       <span className="text-sm font-bold text-slate-600">{txn.customer}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-400">{txn.date}</td>
                  <td className="px-8 py-5 font-black text-slate-900">${txn.amount.toFixed(2)}</td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-slate-300"></div> {txn.method}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                      txn.status === 'completed' ? 'bg-emerald-50 text-emerald-600' :
                      txn.status === 'processing' ? 'bg-amber-50 text-amber-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2.5 text-slate-400 hover:text-indigo-600 bg-white border border-slate-100 rounded-xl transition-all shadow-sm">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-bold text-slate-500">
            Total of <span className="text-slate-900">{filtered.length}</span> transactions this month
          </div>
          <div className="flex items-center gap-2">
            <button 
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="p-2 text-slate-400 hover:text-indigo-600 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-black text-slate-900 px-4">Page {page} of {totalPages || 1}</span>
            <button 
              disabled={page >= totalPages}
              onClick={() => setPage(p => p + 1)}
              className="p-2 text-slate-400 hover:text-indigo-600 disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
