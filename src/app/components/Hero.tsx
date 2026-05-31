import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '@/img/img-profile.png';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-50" />
                <ImageWithFallback
                  src={profileImage}
                  alt="Foto de perfil"
                  className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white">
                Luan Machado
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300">
                Desenvolvedor Full Stack
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Sou fascinado por tecnologia e pela facilidade que ela gera no cotidiano. Atuo com foco na lógica e em resolução de problemas.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Button
                size="lg"
                onClick={() => onNavigate('projects')}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Ver Projetos
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Entre em Contato
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 mt-4"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                asChild
              >
                <a
                  href="https://github.com/mcdcwb"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/luanmachadof/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                asChild
              >
                <a href="mailto:machadoluaan@gmail.com" aria-label="E-mail">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
