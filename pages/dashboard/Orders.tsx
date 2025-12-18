
import React from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import { Order } from '../../types';

const ORDERS: Order[] = [
  { id: 'ORD-101', customer: 'John Smith', total: 125.50, status: 'completed', date: '2024-05-20' },
  { id: 'ORD-102', customer: 'Sarah Connor', total: 89.99, status: 'pending', date: '2024-05-21' },
  { id: 'ORD-103', customer: 'Bruce Wayne', total: 450.00, status: 'completed', date: '2024-05-22' },
  { id: 'ORD-104', customer: 'Diana Prince', total: 24.50, status: 'cancelled', date: '2024-05-23' },
  { id: 'ORD-105', customer: 'Tony Stark', total: 1200.00, status: 'completed', date: '2024-05-24' },
];

const Orders: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Orders</h1>
        <p className="text-slate-500">Track and manage all customer purchases.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search orders..." className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filter By Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-4">Order ID</th>
                <th className="px-8 py-4">Customer</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Total</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-4 font-bold text-slate-900">{order.id}</td>
                  <td className="px-8 py-4 text-sm text-slate-600">{order.customer}</td>
                  <td className="px-8 py-4 text-sm text-slate-600">{order.date}</td>
                  <td className="px-8 py-4 text-sm font-bold text-slate-900">${order.total.toFixed(2)}</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      order.status === 'completed' ? 'bg-green-50 text-green-600' :
                      order.status === 'pending' ? 'bg-amber-50 text-amber-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                      <Eye className="w-5 h-5" />
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

export default Orders;
