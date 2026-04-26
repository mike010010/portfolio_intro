import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 200 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);

    const rX = ((y - height / 2) / height) * -10;
    const rY = ((x - width / 2) / width) * 10;
    rotateX.set(rX);
    rotateY.set(rY);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="card-geometric group relative"
    >
      <div className="geometric-accent"></div>
      
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.07),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{project.client} // {project.label}</p>
          </div>
          <span className={`text-[9px] ${project.color} text-white px-2 py-0.5 uppercase font-bold tracking-widest`}>
            {project.tag}
          </span>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="relative aspect-video overflow-hidden mt-auto grayscale group-hover:grayscale-0 transition-all duration-500">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    id: 1,
    title: "V-python을 통한 3차원 운동 구현",
    client: "Project #1",
    label: "Algorithm & Math",
    tag: "Solution-Oriented",
    color: "bg-slate-800",
    description: "3차원 행성 시뮬레이션 구현, 3D Ping-Pong 스타일의 게임 구현(고등학교2학년활동).",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f97?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "반응형 웹 아키텍처",
    client: "Project #2",
    label: "Scalable Web",
    tag: "Web Standards",
    color: "bg-blue-600",
    description: "시맨틱 웹 표준 기반의 확장형 레이아웃 설계. SEO 최적화 및 디바이스 대응 반응형 아키텍처.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "구조적 알고리즘 연구",
    client: "Study Core",
    label: "Performance",
    tag: "Logic First",
    color: "bg-slate-800",
    description: "효율적인 연산을 위한 알고리즘 구조 개편 연구 및 Python 기반 대용량 데이터 전처리 스크립트.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="section-label-geo">Key Projects</h2>
            <h3 className="text-3xl font-black tracking-tighter text-slate-800">
              SYSTEM <br className="md:hidden" />
              IMPLEMENTATIONS
            </h3>
          </div>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest border-l-2 border-blue-600 pl-4 py-1">
            Structural Integrity & Scalability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
