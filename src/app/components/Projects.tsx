import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cardapioImg from '@/img/project/cardapio.png';
import mcdflixImg from '@/img/project/mcdflix.png';
import fuelCalcImg from '@/img/project/fuel-calc.png';
import initProgImg from '@/img/project/init-prog.png';
import imcCalcImg from '@/img/project/imc-calc.png';

const projects = [
  {
    id: 1,
    title: 'Mcd Burguer - Cardápio Digital',
    description:
      'Aplicação web de cardápio digital interativo para hamburguerias, permitindo navegar entre os produtos, gerenciar o carrinho e finalizar pedidos via WhatsApp.',
    image: cardapioImg,
    technologies: ['JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/mcdcwb/cardapio',
    demo: 'https://cardapio-khaki-nine.vercel.app/',
  },
  {
    id: 2,
    title: 'McdFlix - Filmes e Séries',
    description:
      'Veja a sinopse e a avaliação de uma lista de filmes. Contém aba Favoritos',
    image: mcdflixImg,
    technologies: ['ReactJS', 'API Rest'],
    github: 'https://github.com/mcdcwb/mcdflix',
    demo: 'https://mcdflix.vercel.app/',
  },
  {
    id: 3,
    title: 'Fuel Calculator',
    description:
      'Ferramenta que auxilia o usuário a identificar a opção mais econômica entre álcool e gasolina, com base nos preços atuais dos combustíveis.',
    image: fuelCalcImg,
    technologies: ['ReactJS', 'TypeScript', 'Vite'],
    github: 'https://github.com/mcdcwb/fuel-calculator',
    demo: 'https://fuel-calculator-seven.vercel.app/',
  },
  {
    id: 4,
    title: 'Initial Programs',
    description:
      'Projeto desenvolvido afim de facilitar o download de programas e ferramentas comuns utilizadas no dia dia de uma só vez',
    image: initProgImg,
    technologies: ['JavaScript'],
    github: 'https://github.com/mcdcwb/projeto-initial-programs',
    demo: 'https://projeto-initial-programs-dpln.vercel.app/',
  },
  {
    id: 5,
    title: 'IMC Calculator',
    description:
      'Calculadora de IMC.',
    image: imcCalcImg,
    technologies: ['JavaScript'],
    github: 'https://github.com/mcdcwb/IMC-Calculator',
    demo: 'https://imc-calculator-gamma-eight.vercel.app/',
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
              Uma seleção dos meus trabalhos mais recentes e projetos pessoais
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
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

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Código
                        </a>
                      </Button>

                      <Button
                        size="sm"
                        className="flex-1 gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
