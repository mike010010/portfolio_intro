import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certifications = [
  {
    organization: "License",
    items: [
      { name: "1종 보통 운전면허 자격증", date: "2026", desc: "도로교통공단 시행 운전면허 취득" }
    ]
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <Award size={18} className="text-blue-600" />
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Credentials</h2>
          </div>
          <h3 className="text-3xl font-black tracking-tighter text-slate-800 mb-8 lowercase italic">
            Certifications & <br />
            License
          </h3>
          <div className="p-6 bg-white border border-slate-200 contrast-125">
            <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-tighter">
              지속적인 자기계발을 통해 <br />
              증명된 전문 역량을 보유하고 있습니다.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          {certifications.map((group, idx) => (
            <motion.div 
              key={group.organization}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-6 flex items-center gap-4">
                {group.organization}
                <div className="h-[1px] flex-grow bg-slate-200" />
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {group.items.map(item => (
                  <div key={item.name} className="flex flex-col md:flex-row md:items-center gap-4 group">
                    <div className="flex-grow p-6 bg-white border border-slate-200 group-hover:border-blue-600 group-hover:shadow-xl transition-all duration-500">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-base tracking-tight text-slate-800 uppercase">{item.name}</span>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1">{item.date}</span>
                      </div>
                      <p className="text-xs font-medium text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
