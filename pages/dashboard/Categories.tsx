
import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, ChevronLeft, ChevronRight, MoreVertical, Layers } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  status: 'active' | 'archived';
  lastUpdated: string;
}

const CATEGORIES: Category[] = [
  { id: '1', name: 'Laptops', slug: 'laptops', productCount: 12, status: 'active', lastUpdated: '2024-05-20' },
  { id: '2', name: 'Audio & Sound', slug: 'audio', productCount: 45, status: 'active', lastUpdated: '2024-05-18' },
  { id: '3', name: 'Wearables', slug: 'wearables', productCount: 8, status: 'active', lastUpdated: '2024-05-15' },
  { id: '4', name: 'Smart Home', slug: 'smart-home', productCount: 22, status: 'active', lastUpdated: '2024-05-10' },
  { id: '5', name: 'Tablets', slug: 'tablets', productCount: 15, status: 'active', lastUpdated: '2024-05-05' },
  { id: '6', name: 'Accessories', slug: 'accessories', productCount: 102, status: 'active', lastUpdated: '2024-05-01' },
  { id: '7', name: 'Software', slug: 'software', productCount: 4, status: 'archived', lastUpdated: '2024-04-20' },
];

const Categories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = CATEGORIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Categories</h1>
          <p className="text-slate-500 font-medium">Organize your product catalog for better discoverability.</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-2xl shadow-indigo-100 transition-all active:scale-95">
          <Plus className="w-5 h-5" /> New Category
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all" 
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Filter className="w-4 h-4" /> All Status
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-8 py-5">Category Name</th>
                <th className="px-8 py-5">Slug</th>
                <th className="px-8 py-5">Products</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Last Updated</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.map((cat) => (
                <tr key={cat.id} className="group hover:bg-slate-50/80 transition-all">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                         <Layers className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-900">{cat.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">/{cat.slug}</td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                      {cat.productCount} items
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                      cat.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {cat.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-400">{cat.lastUpdated}</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2.5 text-slate-400 hover:text-indigo-600 rounded-xl transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 text-slate-400 hover:text-red-600 rounded-xl transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900">{paginated.length}</span> categories
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

export default Categories;
