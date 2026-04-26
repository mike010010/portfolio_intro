import { motion, useMotionValue, useSpring } from 'motion/react';
import { Layers } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set((clientX - window.innerWidth / 2) / 25);
      mouseY.set((clientY - window.innerHeight / 2) / 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Interactive Background Elements */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ x: useSpring(mouseX, { damping: 40 }), y: useSpring(mouseY, { damping: 40 }) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10" 
      />

      {/* Structural accent - geometric shape background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="heading-sub">Logic & Structure Oriented Developer</span>
            </div>
            <h1 className="heading-display mb-10">
              BUILDING VALUE <br />
              THROUGH RIGOROUS <br />
              <span className="text-blue-600">ARCHITECTURE.</span>
            </h1>
            <div className="max-w-xl border-l-4 border-slate-800 pl-8 py-2">
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                "단순한 코딩을 넘어, 효율적인 시스템 구조를 설계하는 것에 <br className="hidden sm:block" />
                가치를 두는 박진흥입니다."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-end gap-8">
          {/* Name Display Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="text-[120px] font-black leading-none text-slate-100 select-none tracking-tighter absolute right-0 top-0 -translate-y-1/2 -z-20">
              JINHEUNG
            </div>
            <div className="text-right">
              <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 block mb-2">Portfolio</span>
              <h2 className="text-6xl font-black text-slate-800 tracking-tighter lowercase italic">
                박진흥
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full bg-slate-900 p-10 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                <Layers size={16} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Core Philosophy</span>
            </div>
            
            <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 border-b border-white/10 pb-10">
              논리적 무결성과 구조적 안정성을 최우선 가치로 삼는 개발 철학을 보유하고 있습니다. 유지보수가 쉽고 안정적인 시스템을 설계합니다.
            </p>

            <div className="flex flex-col gap-4">
              <a href="#work" className="w-full py-4 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-white hover:text-slate-900 transition-all">
                See System Designs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
