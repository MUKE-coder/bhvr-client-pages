
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCcw, Star, Plus, Minus, Heart } from 'lucide-react';
import Navbar from '../../components/landing/Navbar';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  // Mock product data
  const product = {
    id,
    name: 'Titanium X Series Pro',
    price: 1499,
    description: "The most powerful laptop ever built for the BHVR ecosystem. Featuring an M3-inspired custom chip, 32GB unified memory, and a pixel-perfect Retina-grade display. This machine is designed for the modern SaaS founder.",
    category: 'Laptops',
    images: [
      'https://picsum.photos/seed/laptop1/1000/1000',
      'https://picsum.photos/seed/laptop2/1000/1000',
      'https://picsum.photos/seed/laptop3/1000/1000',
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-indigo-600 mb-12 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="rounded-[40px] overflow-hidden bg-slate-50 border border-slate-100 aspect-square shadow-sm">
                 <img src={product.images[activeImg]} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`rounded-2xl overflow-hidden border-2 transition-all aspect-square bg-slate-50 ${
                      activeImg === idx ? 'border-indigo-600 p-1' : 'border-transparent'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-xl" alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="mb-10">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-4 inline-block">Pro Collection</span>
                <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">{product.name}</h1>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="text-sm font-bold text-slate-400 border-l border-slate-200 pl-4">120+ Verified Reviews</span>
                </div>
                <div className="text-4xl font-black text-slate-900 mb-8">${product.price}</div>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  {product.description}
                </p>
              </div>

              {/* Controls */}
              <div className="space-y-8 mb-12">
                <div>
                   <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block">Select Color</label>
                   <div className="flex gap-4">
                      {['#1e293b', '#64748b', '#cbd5e1'].map(color => (
                        <button key={color} className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-slate-100" style={{ backgroundColor: color }}></button>
                      ))}
                   </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-slate-100 rounded-2xl p-1.5 border border-slate-200">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-white rounded-xl transition-all"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-black text-slate-900">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-white rounded-xl transition-all"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1 flex gap-4">
                    <Link 
                      to="/cart" 
                      className="flex-1 bg-indigo-600 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </Link>
                    <button className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 transition-all">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                    <Truck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase">1 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                    <RefreshCcw className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
