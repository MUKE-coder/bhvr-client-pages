
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Filter, Star, ArrowRight, Zap, ShieldCheck, Heart } from 'lucide-react';
import Navbar from '../../components/landing/Navbar';

const STORE_PRODUCTS = [
  { id: '1', name: 'Titanium X Series', category: 'Laptops', price: 1499, img: 'https://picsum.photos/seed/laptop/800/800', badge: 'New Arrival' },
  { id: '2', name: 'Sonic Studio Pro', category: 'Audio', price: 299, img: 'https://picsum.photos/seed/headphone/800/800', badge: 'Best Seller' },
  { id: '3', name: 'Horizon Watch 5', category: 'Wearables', price: 399, img: 'https://picsum.photos/seed/watch/800/800' },
  { id: '4', name: 'GigaPad Air', category: 'Tablets', price: 599, img: 'https://picsum.photos/seed/tablet/800/800' },
  { id: '5', name: 'Cloud Cam Ultra', category: 'Smart Home', price: 129, img: 'https://picsum.photos/seed/cam/800/800' },
  { id: '6', name: 'Ether Earbuds', category: 'Audio', price: 159, img: 'https://picsum.photos/seed/buds/800/800' },
];

const ShopPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[48px] overflow-hidden bg-slate-900 h-[500px] flex items-center px-12 md:px-24">
            <div className="absolute inset-0 opacity-40">
               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Hero background" />
            </div>
            <div className="relative z-10 max-w-2xl text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">Summer Edition 2024</span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                Innovation for <br />
                Your Workflow.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-lg">
                High-performance hardware designed for developers, creators, and visionaries.
              </p>
              <div className="flex gap-4">
                 <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                   Shop Collection <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-8 border-b border-slate-100 sticky top-16 z-30 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto no-scrollbar gap-8">
           <div className="flex gap-8">
             {['All Products', 'Laptops', 'Audio', 'Wearables', 'Tablets', 'Smart Home'].map(cat => (
               <button key={cat} className="whitespace-nowrap text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors relative group">
                 {cat}
                 <span className="absolute bottom-[-10px] left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
               </button>
             ))}
           </div>
           <div className="flex items-center gap-4 shrink-0">
              <button className="p-2.5 text-slate-400 hover:text-indigo-600 transition-colors"><Search className="w-5 h-5" /></button>
              <button className="p-2.5 text-slate-400 hover:text-indigo-600 transition-colors"><Filter className="w-5 h-5" /></button>
           </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
             {STORE_PRODUCTS.map((product) => (
               <Link 
                to={`/product/${product.id}`} 
                key={product.id} 
                className="group flex flex-col"
               >
                 <div className="relative rounded-[40px] aspect-square overflow-hidden bg-slate-100 mb-6 group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={product.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={product.name} 
                    />
                    {product.badge && (
                      <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                        {product.badge}
                      </div>
                    )}
                    <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl">
                       <Heart className="w-5 h-5 text-slate-400 hover:text-red-500 transition-colors" />
                    </button>
                 </div>
                 <div className="flex justify-between items-start px-2">
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{product.category}</p>
                     <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                   </div>
                   <div className="text-xl font-black text-slate-900">
                     ${product.price}
                   </div>
                 </div>
                 <div className="mt-4 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4" />
                    <span className="text-xs font-bold text-slate-400 ml-2">(42 reviews)</span>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="max-w-2xl mx-auto">
             <h2 className="text-4xl font-black mb-6 tracking-tight">Stay in the Loop</h2>
             <p className="text-slate-500 font-medium mb-12">Get early access to drops, exclusive discounts, and innovation news.</p>
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all font-medium"
                />
                <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                  Join Newsletter
                </button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
