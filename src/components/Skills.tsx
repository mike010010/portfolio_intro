import { motion } from 'motion/react';

const skills = [
  {
    category: "Languages",
    items: [
      { 
        name: "Python", 
        desc: "자료구조 및 알고리즘 문제 해결 역량, 데이터 처리 자동화",
        icon: "https://cdn.simpleicons.org/python/3776AB"
      },
      { 
        name: "HTML/CSS", 
        desc: "웹 표준 준수 시맨틱 마크업, UX 최적화 레이아웃 구조 설계",
        icon: "https://cdn.simpleicons.org/html5/E34F26"
      }
    ]
  },
  {
    category: "Tools & OS",
    items: [
      { 
        name: "Development", 
        desc: "Git/GitHub, VS Code, PyCharm",
        icon: "https://cdn.simpleicons.org/git/F05032"
      },
      { 
        name: "Systems", 
        desc: "Linux (Ubuntu/Bash), Windows PowerShell",
        icon: "https://cdn.simpleicons.org/linux/FCC624"
      }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-32 px-6 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <h2 className="section-label-geo">Technical Skills</h2>
          <h3 className="text-3xl font-black tracking-tighter text-slate-800 mb-8">
            STACK & <br />
            ARCHITECTURE
          </h3>
          <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
            <p className="text-xs font-bold text-blue-700 leading-relaxed uppercase tracking-tighter">
              효율적인 시스템 구조 설계를 위해 <br />
              필요한 핵심 기술 스택을 보유하고 있습니다.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-6 flex items-center gap-4">
                {skillGroup.category}
                <div className="h-[1px] flex-grow bg-slate-100" />
              </h4>
              
              <div className="grid grid-cols-1 gap-6">
                {skillGroup.items.map(item => (
                  <div key={item.name} className="flex flex-col md:flex-row md:items-center gap-4 group">
                    <div className="w-full md:w-56 flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 p-2 bg-white border border-slate-100 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                          <img 
                            src={item.icon} 
                            alt={item.name} 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="font-bold text-sm tracking-tight text-slate-800 uppercase">{item.name}</span>
                      </div>
                    </div>
                    <div className="flex-grow p-4 bg-slate-50 group-hover:bg-slate-100 transition-colors">
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
