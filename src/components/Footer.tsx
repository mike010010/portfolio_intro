import { Github, Mail, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 items-end">
          <div className="md:col-span-8 flex flex-col md:flex-row md:items-end gap-12">
            <div>
              <div className="text-3xl font-black tracking-tighter text-slate-800 uppercase mb-2">[PARK JIN-HEUNG]</div>
              <p className="text-xs font-bold text-blue-600 tracking-[0.4em] uppercase">Structural Logic Specialist</p>
            </div>
            <div className="flex border-l border-slate-200 pl-10 h-fit md:mb-1">
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] max-w-[200px]">
                Built for Scalability. <br />
                Deployed for Impact.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 flex justify-end gap-2">
            {[
              { Icon: Github, url: "https://github.com/mike010010" },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/jinheungpark" },
              { Icon: Globe, url: "https://m.blog.naver.com/mike071120" },
              { Icon: Mail, url: "mailto:mike010010010@gmail.com" }
            ].map(({ Icon, url }, i) => (
              <a 
                key={i} 
                href={url}
                target={url.startsWith('http') ? "_blank" : undefined}
                rel={url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white hover:bg-blue-600 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              © {currentYear} PARK JIN-HEUNG. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.1em]">
              Designed for Vercel Deployment // Geometric Balance v1.0
            </p>
          </div>

          <div className="flex gap-10">
            {[
              { label: 'GitHub', url: "https://github.com/mike010010" },
              { label: 'Blog', url: "https://m.blog.naver.com/mike071120" },
              { label: 'LinkedIn', url: "https://www.linkedin.com/in/jinheungpark" },
              { label: 'Contact', url: "mailto:mike010010010@gmail.com" }
            ].map(link => (
              <a 
                key={link.label} 
                href={link.url}
                target={link.url.startsWith('http') ? "_blank" : undefined}
                rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
