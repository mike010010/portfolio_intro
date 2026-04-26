import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-slate-800 uppercase">[PORTFOLIO]</span>
            <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase leading-none">박진흥</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Home</a>
            <a href="#work" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Work</a>
            <a href="#about" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">About</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="mailto:mike010010010@gmail.com" 
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">Connect</span>
          </a>
          <a 
            href="/resume.pdf" 
            download="Park_Jinheung_Resume.pdf"
            className="px-4 py-2 bg-slate-800 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
