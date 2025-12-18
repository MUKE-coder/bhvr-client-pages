
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Users, 
  BarChart3,
  ArrowRight,
  Rocket,
  CreditCard,
  Mail,
  ShoppingBag,
  HardDrive,
  FileText,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/landing/Navbar';

const BentoCard = ({ title, description, icon: Icon, className = "" }: any) => (
  <div className={`p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group ${className}`}>
    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100/30 blur-[120px] rounded-full -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-8 border border-indigo-100 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Launch in record time
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
            Build SaaS <br />
            <span className="text-indigo-600">Faster than ever.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
            The BHVR starter kit combines the power of Bun, Hono, Vite, and React into a high-performance foundation for your next big idea.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/signup" className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-2">
              Get Lifetime Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/shop" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-xl hover:border-slate-300 transition-all flex items-center justify-center gap-2">
              Browse Demo Store
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Everything you need to scale</h2>
            <p className="text-slate-500 text-lg">Stop worrying about infrastructure. Start building features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <BentoCard 
              className="md:col-span-3 lg:col-span-4"
              title="Modern Dashboard" 
              description="A pixel-perfect admin panel built with Recharts and Tailwind CSS. Fully responsive and ready for your data." 
              icon={LayoutDashboard} 
            />
            <BentoCard 
              className="md:col-span-3 lg:col-span-2"
              title="Global Auth" 
              description="Secure authentication with multi-factor support and social logins out of the box." 
              icon={ShieldCheck} 
            />
            <BentoCard 
              className="md:col-span-2"
              title="Stripe Billing" 
              description="Subscription management, checkout flows, and invoice generation ready to go." 
              icon={CreditCard} 
            />
            <BentoCard 
              className="md:col-span-2"
              title="Transactional Email" 
              description="Pre-configured templates for welcome emails, password resets, and notifications." 
              icon={Mail} 
            />
            <BentoCard 
              className="md:col-span-2"
              title="Online Store" 
              description="A high-conversion e-commerce storefront with cart, checkout, and inventory." 
              icon={ShoppingBag} 
            />
            <BentoCard 
              className="md:col-span-3"
              title="S3 File Storage" 
              description="Seamless integration for file uploads and management using AWS S3 or compatible storage." 
              icon={HardDrive} 
            />
            <BentoCard 
              className="md:col-span-3"
              title="WYSIWYG Editor" 
              description="Powerful rich text editing for your blogs, products, and CMS content." 
              icon={FileText} 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black mb-2">99.9%</div>
              <div className="text-indigo-100 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">10ms</div>
              <div className="text-indigo-100 font-medium">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">50k+</div>
              <div className="text-indigo-100 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="text-indigo-100 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-6 tracking-tight">One Price. Lifetime Updates.</h2>
          <p className="text-slate-500 mb-16 max-w-xl mx-auto text-lg">Join 2,000+ developers building the future on BHVR.</p>
          
          <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-[40px] p-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Founder Edition</h3>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-6xl font-black">$199</span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">USD</span>
            </div>
            <ul className="text-left space-y-6 mb-10">
              {['Unlimited Projects', 'Private Discord Access', 'Next.js & Hono Templates', 'Stripe & Lemonsqueezy', 'Free Lifetime Updates'].map(feature => (
                <li key={feature} className="flex items-center gap-4 font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/signup" className="block w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
              Get Started Now
            </Link>
            <p className="mt-6 text-sm text-slate-400 font-medium">No subscription. No hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">BHVR.</span>
            </div>
            <p className="max-w-xs text-lg leading-relaxed">
              Build high-performance SaaS applications with the fastest tech stack on the planet.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Community</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 BHVR Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Internal icon fix
const LayoutDashboard = (props: any) => <BarChart3 {...props} />;

export default LandingPage;
