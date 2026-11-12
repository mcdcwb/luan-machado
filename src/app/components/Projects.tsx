import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pringlesImg from '@/img/project/pringles.png';
import cardapioImg from '@/img/project/cardapio.png';
import mcdflixImg from '@/img/project/mcdflix.png';
import fuelCalcImg from '@/img/project/fuel-calc.png';
import mcdStore from '@/img/project/mcd-store.png';
import voalaImg from '@/img/project/voala.png';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  /** Vídeo opcional (em /public). Toca no hover (desktop) ou quando o card está visível (mobile). */
  video?: string;
  technologies: string[];
  github?: string;
  demo: string;
  note?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Mcd Store - Loja virtual',
    description:
      'E-commerce full-stack com catálogo, variantes por cor e tamanho, carrinho, favoritos e checkout. Painel administrativo com produtos, categorias, carrossel e relatórios de pedidos. API REST em camadas com autenticação JWT, testes automatizados e CI.',
    image: mcdStore,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Playwright'],
    github: 'https://github.com/mcdcwb/mcd-store',
    demo: 'https://mcd-store-self.vercel.app/',
    note: 'Crie uma conta e ative o Modo Demonstrativo no seu perfil para explorar o painel administrativo.',
  },
  {
    id: 2,
    title: 'Voala Records - Landing Page',
    description:
      'Trabalho freelance para uma gravadora de Curitiba: landing page responsiva com história do coletivo, agenda de eventos, artistas e contato.',
    image: voalaImg,
    video: '/videos/voala.mp4',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    demo: 'https://voala-rec.vercel.app/',
  },
  {
    id: 3,
    title: 'Mcd Burguer - Cardápio Digital',
    description:
      'Cardápio digital para hamburguerias: navegação entre produtos, carrinho e envio do pedido pelo WhatsApp.',
    image: cardapioImg,
    technologies: ['JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/mcdcwb/cardapio',
    demo: 'https://cardapio-khaki-nine.vercel.app/',
  },
  {
    id: 4,
    title: 'Pringles - Landing Page',
    description:
      'Landing page interativa para a marca Pringles, com animações e transições fluidas entre produtos.',
    image: pringlesImg,
    technologies: ['JavaScript', 'GSAP'],
    github: 'https://github.com/mcdcwb/pringles',
    demo: 'https://pringles-kappa.vercel.app/',
  },
  {
    id: 5,
    title: 'McdFlix - Filmes e Séries',
    description:
      'Catálogo de filmes inspirado na Netflix, consumindo uma API REST, com sinopse, avaliação e lista de favoritos.',
    image: mcdflixImg,
    technologies: ['React', 'API REST'],
    github: 'https://github.com/mcdcwb/mcdflix',
    demo: 'https://mcdflix.vercel.app/',
  },
  {
    id: 6,
    title: 'Fuel Calculator',
    description:
      'Calcula se compensa abastecer com álcool ou gasolina a partir dos preços atuais.',
    image: fuelCalcImg,
    technologies: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/mcdcwb/fuel-calculator',
    demo: 'https://fuel-calculator-seven.vercel.app/',
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meus Projetos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Projetos pessoais e trabalhos para clientes, do mais recente ao mais antigo
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Altura do bloco de descrição + tecnologias quando o card está recolhido (igual para todos). */
const COLLAPSED_HEIGHT = 112;

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [expandable, setExpandable] = useState(false);
  const [fullHeight, setFullHeight] = useState(COLLAPSED_HEIGHT);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const canHover = useCanHover();

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setPlaying(true)).catch(() => {});
  };

  const pauseVideo = (reset: boolean) => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    if (reset) video.currentTime = 0;
    setPlaying(false);
  };

  // Mobile/touch: toca enquanto o card está bem visível na tela e pausa ao sair
  useEffect(() => {
    if (!project.video || canHover || !cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? playVideo() : pauseVideo(false)),
      { threshold: 0.6 },
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [project.video, canHover]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      setFullHeight(el.scrollHeight);
      setExpandable(el.scrollHeight > COLLAPSED_HEIGHT + 2);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = () => setExpanded((value) => !value);
  const stop = (event: MouseEvent) => event.stopPropagation();

  return (
    <div ref={cardRef}>
    <Card
      onClick={expandable ? toggle : undefined}
      onMouseEnter={project.video && canHover ? playVideo : undefined}
      onMouseLeave={project.video && canHover ? () => pauseVideo(true) : undefined}
      className={`overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out group flex flex-col gap-0 ${
        expandable ? 'cursor-pointer' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
        />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
              playing ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1" title={project.title}>
          {project.title}
        </h3>

        {/* Descrição + tecnologias: recolhido com altura fixa, expandido com altura total */}
        <div
          className="relative overflow-hidden transition-[height] duration-500 ease-out"
          style={{ height: expanded ? fullHeight : COLLAPSED_HEIGHT }}
        >
          <div ref={contentRef}>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {project.note && (
              <p className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2 mt-4">
                {project.note}
              </p>
            )}
          </div>

          {expandable && (
            <div
              className={`pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-gray-900 to-transparent transition-opacity duration-500 ${
                expanded ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}
        </div>

        {/* Expandir / recolher (mesma altura em todos os cards) */}
        <div className="h-9 mt-1 flex items-center justify-center">
          {expandable && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                toggle();
              }}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {expanded ? 'Ver menos' : 'Ver mais'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          {project.github && (
            <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={stop}>
                <Github className="h-4 w-4" />
                Código
              </a>
            </Button>
          )}

          <Button
            size="sm"
            className="flex-1 gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={stop}>
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </Card>
    </div>
  );
}

/** true em telas com mouse (hover real); false em celular/tablet touch. */
function useCanHover() {
  const query = '(hover: hover) and (pointer: fine)';
  const [canHover, setCanHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setCanHover(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return canHover;
}
