
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, CreditCard, ChevronLeft } from 'lucide-react';
import Navbar from '../../components/landing/Navbar';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/order-success');
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter">Checkout</h1>

          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form Details */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                    <input required type="email" placeholder="john@doe.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                    <input required type="text" placeholder="John" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                    <input required type="text" placeholder="Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 font-medium" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Address</label>
                    <input required type="text" placeholder="123 Innovation Way" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 font-medium" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Payment Details</h2>
                <div className="bg-slate-900 text-white rounded-[40px] p-10 mb-8 shadow-2xl">
                  <div className="flex justify-between items-center mb-10">
                    <CreditCard className="w-10 h-10 text-indigo-400" />
                    <div className="font-black italic text-2xl tracking-tighter">BHVR.</div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Card Number</label>
                      <input required type="text" placeholder="•••• •••• •••• 4242" className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-bold placeholder-slate-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                       <div>
                         <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Expiry Date</label>
                         <input required type="text" placeholder="12 / 26" className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-bold placeholder-slate-600" />
                       </div>
                       <div>
                         <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">CVV</label>
                         <input required type="text" placeholder="•••" className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-bold placeholder-slate-600" />
                       </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sticky Summary */}
            <div className="lg:sticky lg:top-32 h-fit">
               <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Summary</h2>
                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center text-slate-500 font-medium">
                      <span>Titanium X Series Pro</span>
                      <span className="text-slate-900 font-bold">$1,499.00</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 font-medium">
                      <span>Shipping</span>
                      <span className="text-emerald-600 font-bold uppercase text-xs">Free</span>
                    </div>
                    <div className="h-px bg-slate-200 my-4"></div>
                    <div className="flex justify-between items-center text-2xl font-black text-slate-900">
                      <span>Total</span>
                      <span>$1,499.00</span>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center gap-3">
                    <Lock className="w-5 h-5" /> Complete Purchase
                  </button>
                  <p className="mt-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Secure SSL Encrypted Checkout
                  </p>
               </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
