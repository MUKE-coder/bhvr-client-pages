
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, Download, Mail } from 'lucide-react';
import Navbar from '../../components/landing/Navbar';

const OrderSuccessPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-green-50 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100">
             <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Order Placed!</h1>
          <p className="text-xl text-slate-500 font-medium mb-12">
            Your order <span className="text-slate-900 font-black">#BHVR-8829</span> has been confirmed. 
            We'll send you an email once your items ship.
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-10 mb-12 text-left">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Order Details</h3>
            <div className="space-y-6">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 overflow-hidden">
                    <img src="https://picsum.photos/seed/product/100/100" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Titanium X Series Pro</div>
                    <div className="text-xs text-slate-400">Quantity: 1 • $1,499.00</div>
                  </div>
               </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200 flex justify-between items-center font-black text-xl text-slate-900">
               <span>Total Amount</span>
               <span>$1,499.00</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <Link 
              to="/dashboard/orders" 
              className="bg-indigo-600 text-white h-16 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-indigo-100 hover:bg-indigo-700 transition-all"
             >
                <Package className="w-5 h-5" /> View Order Status
             </Link>
             <button className="bg-white text-slate-900 h-16 rounded-2xl border border-slate-200 font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                <Download className="w-5 h-5" /> Download Invoice
             </button>
          </div>
          
          <p className="mt-12 text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> Need help? <a href="#" className="text-indigo-600 font-bold hover:underline">Contact Support</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccessPage;
