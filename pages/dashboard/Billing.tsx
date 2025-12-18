
import React from 'react';
import { CreditCard, CheckCircle2, Download, ExternalLink } from 'lucide-react';

const Billing: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Billing</h1>
        <p className="text-slate-500">Manage your subscription, payment methods, and invoices.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Plan */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Current Plan</h3>
              <p className="text-slate-500">You are currently on the <span className="text-indigo-600 font-bold uppercase">Pro Monthly</span> plan.</p>
            </div>
            <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold">Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-slate-500 text-sm font-bold mb-1 uppercase tracking-wider">Next Payment</div>
              <div className="text-2xl font-extrabold text-slate-900">$29.00 <span className="text-sm font-normal text-slate-400">on June 15, 2024</span></div>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="text-slate-500 text-sm font-bold mb-1 uppercase tracking-wider">Usage Stats</div>
              <div className="text-2xl font-extrabold text-slate-900">12.5 GB <span className="text-sm font-normal text-slate-400">of 100 GB</span></div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">Upgrade to Enterprise</button>
            <button className="px-6 py-3 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50">Cancel Subscription</button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h3>
          <div className="p-4 rounded-2xl border border-slate-200 flex items-center gap-4 mb-6">
            <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center font-bold text-xs">VISA</div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-900">•••• •••• •••• 4242</div>
              <div className="text-xs text-slate-500">Expires 12/26</div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
          </div>
          <button className="w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" /> Update Card
          </button>
        </div>

        {/* Invoices Table */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900">Invoices</h3>
            <button className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-1">
              Stripe Customer Portal <ExternalLink className="w-3 h-3" />
            </button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-4">Invoice ID</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-4 font-bold text-slate-900">INV-00{i}-2024</td>
                  <td className="px-8 py-4 text-sm text-slate-600">May {i + 10}, 2024</td>
                  <td className="px-8 py-4 text-sm font-bold text-slate-900">$29.00</td>
                  <td className="px-8 py-4">
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase">Paid</span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
