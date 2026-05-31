import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {'<Luan />'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Desenvolvedor Full Stack com foco em soluções digitais e reais.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center md:items-end text-center md:text-right"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-3 justify-center md:justify-end">
                <Button
                  variant="outline"
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
                    <Github className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
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
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  asChild
                >
                  <a
                    href="mailto:machadoluaan@gmail.com"
                    aria-label="E-mail"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Luan Machado. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
