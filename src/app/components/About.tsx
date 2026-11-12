import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Server,
  Palette,
} from 'lucide-react';
import { Card } from './ui/card';

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'Django'],
  },
  {
    icon: Database,
    title: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Ionic', 'PWA'],
  },
  {
    icon: Globe,
    title: 'DevOps',
    technologies: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions'],
  },
  {
    icon: Palette,
    title: 'Design',
    technologies: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping'],
  },
];

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 scroll-mt-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Me chamo Luan, sou desenvolvedor full stack formado em Análise e Desenvolvimento de
                Sistemas. Trabalho com React, TypeScript, Node.js (Express), Prisma e PostgreSQL, cuidando
                de uma aplicação do modelo de dados ao deploy.
              </p>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Antes do código, passei quatro anos na manutenção de computadores e notebooks. Foi ali que
              aprendi a diagnosticar problemas com método, e esse interesse por entender como as coisas
              funcionam me levou para o desenvolvimento de software.

              </p>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Meu projeto principal é a MCD Store, um e-commerce com painel administrativo, autenticação
                JWT, testes automatizados e integração contínua. Hoje busco uma vaga em equipe de
                desenvolvimento, onde eu possa contribuir e evoluir junto com o time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Experiência & Competências
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Desenvolvedor Web Full Stack
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Autônomo • 2024 - Presente
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Desenvolvimento da MCD Store, e-commerce full-stack com React, TypeScript, Express, Prisma e
                    PostgreSQL: painel administrativo, autenticação JWT, testes automatizados e CI com GitHub Actions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Desenvolvedor Front-end
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Voala Records (freelance) • Fev 2025 - Jun 2025
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Landing page responsiva para uma gravadora de Curitiba, com React, Vite, TypeScript e
                    Tailwind CSS.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Mecânico de Manutenção
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Eceel-Tec Eletroeletrônica, Informática & Climatização LTDA  • 2019 - 2023
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Análise técnica de computadores e notebooks, manutenção preventiva e corretiva, instalação de software e hardware.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tecnologias & Habilidades
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 group hover:border-blue-500 dark:hover:border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                            {skill.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
