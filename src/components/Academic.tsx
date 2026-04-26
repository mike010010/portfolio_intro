import { motion } from 'motion/react';
import { BookOpen, Users, Star } from 'lucide-react';

const courses = [
  "자료구조 (Data Structure)", 
  "논리회로 (Logic Circuit)",
  "컴퓨터 구조 (Computer Architecture)",
  "운영체제 (Operating Systems)",
  "알고리즘 (Algorithms)"
];

const activities = [
  {
    name: "HIARK",
    role: "Algorithm Member",
    desc: "교내 알고리즘 소모임에서 정기적인 문제 풀이 및 논리 최적화 스터디",
    rating: 5
  },
  {
    name: "GDG Hongik",
    role: "Google Dev Groups",
    desc: "교내 개발 동아리에서 HTML, CSS, GIT, VS Code를 통한 웹배포",
    rating: 5
  }
];

export default function Academic() {
  return (
    <section id="about" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-24 max-w-2xl border-l-[12px] border-slate-900 pl-10 py-4">
          <h2 className="text-5xl font-black tracking-tighter text-slate-800 uppercase">Education & <br />Activities</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hongik Univ Computer Science</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <BookOpen size={16} className="text-blue-600" />
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-800">Cores Courses</h3>
            </div>
            <div className="flex flex-col border-t border-slate-200">
              {courses.map(course => (
                <div 
                  key={course}
                  className="py-5 border-b border-slate-200 flex items-center justify-between group hover:bg-white px-2 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                    {course}
                  </span>
                  <div className="w-1 h-1 bg-slate-300 group-hover:w-4 group-hover:bg-blue-600 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <Users size={16} className="text-blue-600" />
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-800">Communitites</h3>
            </div>
            <div className="space-y-6">
              {activities.map((act, idx) => (
                <motion.div
                  key={act.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 border border-slate-200 relative"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 bg-slate-50 rotate-45 -mr-4 -mt-4 border-l border-slate-200" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{act.name}</h4>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">{act.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(act.rating)].map((_, i) => (
                        <Star key={i} size={10} className="fill-slate-800 text-slate-800" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 italic font-medium leading-relaxed border-l-2 border-slate-100 pl-6 py-1">
                    "{act.desc}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
