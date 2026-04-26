import { motion } from 'motion/react';
import { Mail, Github, CheckCircle2 } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="w-full lg:w-1/2">
          <h2 className="heading-display mb-12">
            FUTURE <br />
            <span className="text-blue-600">DRIVEN.</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-10">
            {[
              { title: "Stable & Scalable", desc: "유지보수가 쉬운 안정적 구조 설계를 지향합니다." },
              { title: "Continuous Learning", desc: "새로운 기술 스택 학습에 주저하지 않습니다." },
              { title: "Collaborative Growth", desc: "협업을 통해 팀과 함께 성장합니다." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className="text-blue-600 mt-1">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                   <h4 className="text-sm font-black text-slate-800 uppercase tracking-tighter mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-tighter">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex items-center gap-6">
            <a 
              href="mailto:mike010010010@gmail.com"
              className="px-10 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all"
            >
              Get In Touch
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/mike010010" target="_blank" className="p-4 border border-slate-200 hover:border-slate-800 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 -z-10" />
          <div className="relative border-[20px] border-slate-50 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" 
              alt="Engineering Minds"
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 bg-slate-900 p-8 text-white hidden md:block">
              <p className="text-3xl font-black tracking-tighter leading-none mb-2">2026</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Visionary Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
