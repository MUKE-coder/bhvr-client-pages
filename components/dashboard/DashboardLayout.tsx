
import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Layers, 
  BarChart2, 
  Users, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  Rocket,
  ChevronDown,
  User,
  Activity,
  Bot
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Products', path: '/dashboard/products', icon: <Package className="w-5 h-5" /> },
    { name: 'Categories', path: '/dashboard/categories', icon: <Layers className="w-5 h-5" /> },
    { name: 'Orders', path: '/dashboard/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Sales', path: '/dashboard/sales', icon: <BarChart2 className="w-5 h-5" /> },
    { name: 'Contributors', path: '/dashboard/contributors', icon: <Users className="w-5 h-5" /> },
    { name: 'Chats', path: '/dashboard/chats', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'AI Assistant', path: '/dashboard/ai-assistant', icon: <Bot className="w-5 h-5" /> },
  ];

  const userMenuItems = [
    { name: 'My Profile', path: '/dashboard/profile', icon: <User className="w-4 h-4" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings className="w-4 h-4" /> },
    { name: 'Billing', path: '/dashboard/billing', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'User Activity', path: '/dashboard/activity', icon: <Activity className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle click outside user menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } transform md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shrink-0 shadow-lg shadow-indigo-100">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && <span className="font-black text-xl tracking-tighter text-slate-900">BHVR.</span>}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="md:hidden p-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-3 py-3 rounded-2xl transition-all group ${
                isActive(item.path) 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 font-bold' 
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 font-medium'
              }`}
            >
              <span className={`shrink-0 transition-transform group-hover:scale-110 ${isActive(item.path) ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'}`}>
                {item.icon}
              </span>
              {isSidebarOpen && <span className="text-sm">{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* User Menu Bottom Section */}
        <div className="p-3 border-t border-slate-100 relative" ref={userMenuRef}>
          {isUserMenuOpen && isSidebarOpen && (
            <div className="absolute bottom-full left-3 right-3 mb-2 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 animate-in slide-in-from-bottom-2 duration-200 overflow-hidden">
              {userMenuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => { navigate(item.path); setIsUserMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  {item.icon} {item.name}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-1"></div>
              <button 
                onClick={() => navigate('/')}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          )}

          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className={`w-full flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-100 transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <img 
              src="https://picsum.photos/seed/admin/64/64" 
              className="w-10 h-10 rounded-xl border-2 border-slate-100 shadow-sm shrink-0" 
              alt="Profile" 
            />
            {isSidebarOpen && (
              <div className="flex-1 text-left">
                <div className="text-xs font-black text-slate-900">John Doe</div>
                <div className="text-[10px] text-slate-400 font-bold">Owner</div>
              </div>
            )}
            {isSidebarOpen && <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
              <Search className="w-4 h-4" />
              <input 
                type="text" 
                placeholder="Jump to..." 
                className="bg-transparent border-none text-sm font-medium focus:ring-0 text-slate-900 w-48"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <Link to="/shop" className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-900 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all">
               Visit Store <Rocket className="w-4 h-4 text-indigo-600" />
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="max-w-7xl mx-auto">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
