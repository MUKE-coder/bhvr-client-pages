
import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import { Product } from '../../types';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Premium Hoodie', price: 89.99, status: 'active', category: 'Clothing', stock: 120 },
  { id: '2', name: 'Digital Planner', price: 14.99, status: 'active', category: 'Digital', stock: 1500 },
  { id: '3', name: 'Coffee Mug v2', price: 24.50, status: 'draft', category: 'Accessories', stock: 45 },
  { id: '4', name: 'Tech Stickers', price: 5.00, status: 'active', category: 'Accessories', stock: 300 },
  { id: '5', name: 'Wool Beanie', price: 32.00, status: 'archived', category: 'Clothing', stock: 0 },
  { id: '6', name: 'Canvas Backpack', price: 120.00, status: 'active', category: 'Clothing', stock: 85 },
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Products</h1>
          <p className="text-slate-500 font-medium">Inventory management for your digital and physical goods.</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-2xl shadow-indigo-100 transition-all active:scale-95">
          <Plus className="w-5 h-5" /> Add New Product
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Table Controls */}
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name, SKU or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:bg-white transition-all" 
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Table Body */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-8 py-5">Product Name</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Price</th>
                <th className="px-8 py-5">Stock</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedProducts.map((product) => (
                <tr key={product.id} className="group hover:bg-slate-50/80 transition-all">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                         <img src={`https://picsum.photos/seed/${product.id}/100/100`} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{product.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">SKU-{product.id}00X</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                      product.status === 'active' ? 'bg-emerald-50 text-emerald-600' :
                      product.status === 'draft' ? 'bg-amber-50 text-amber-600' :
                      'bg-slate-100 text-slate-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-600">{product.category}</td>
                  <td className="px-8 py-5 text-sm font-black text-slate-900">${product.price.toFixed(2)}</td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col gap-1.5">
                       <span className={`text-sm font-bold ${product.stock < 10 ? 'text-red-500' : 'text-slate-600'}`}>
                         {product.stock} Units
                       </span>
                       <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${product.stock < 10 ? 'bg-red-400' : 'bg-indigo-400'}`} 
                            style={{ width: `${Math.min(product.stock, 100)}%` }}
                          ></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm hover:shadow-md border border-transparent hover:border-slate-100">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-white rounded-xl transition-all shadow-sm hover:shadow-md border border-transparent hover:border-slate-100">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900">{Math.min(filteredProducts.length, (page - 1) * itemsPerPage + 1)}-{Math.min(filteredProducts.length, page * itemsPerPage)}</span> of <span className="text-slate-900">{filteredProducts.length}</span> items
          </div>
          <div className="flex items-center gap-2">
            <button 
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="p-2 text-slate-400 hover:text-indigo-600 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-xl text-xs font-black transition-all ${
                  page === i + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button 
              disabled={page === totalPages}
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

export default Products;
