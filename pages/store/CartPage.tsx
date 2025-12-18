
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, Minus, Plus, ChevronLeft, ShoppingBag } from 'lucide-react';
import Navbar from '../../components/landing/Navbar';

const CartPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter">Your Bag</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 pb-8 border-b border-slate-100 last:border-0">
                  <div className="w-full sm:w-40 aspect-square rounded-[32px] overflow-hidden bg-slate-50 shrink-0 border border-slate-100 shadow-sm">
                    <img src={`https://picsum.photos/seed/cart${i}/400/400`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="text-2xl font-bold text-slate-900">Titanium Series Pro {i}</h3>
                         <div className="text-xl font-black text-slate-900">$1,499</div>
                      </div>
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">Laptops • Space Gray</p>
                      <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-1 w-fit border border-slate-100">
                        <button className="p-2 text-slate-500 hover:text-indigo-600 rounded-lg"><Minus className="w-3 h-3" /></button>
                        <span className="px-3 font-bold text-sm">1</span>
                        <button className="p-2 text-slate-500 hover:text-indigo-600 rounded-lg"><Plus className="w-3 h-3" /></button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2">
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                      <span className="text-xs font-bold text-green-600 uppercase">In Stock</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-slate-50 rounded-[40px] p-10 h-fit border border-slate-100 shadow-sm sticky top-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">$2,998.00</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-slate-900 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 font-medium">
                  <span>Estimated Tax</span>
                  <span className="text-slate-900 font-bold">$124.00</span>
                </div>
                <div className="h-px bg-slate-200 my-2"></div>
                <div className="flex justify-between items-center text-xl font-black text-slate-900">
                  <span>Total</span>
                  <span>$3,122.00</span>
                </div>
              </div>
              
              <Link to="/checkout" className="block w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-center text-lg shadow-2xl shadow-indigo-100 hover:bg-indigo-700 transition-all mb-4">
                Proceed to Checkout
              </Link>
              <Link to="/shop" className="block w-full text-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
