import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleMenuClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-x-hidden transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-16 sm:h-20 min-w-0">
          {/* Logo */}
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              onNavigate('home');
              setIsMenuOpen(false);
            }}
            className="font-bold text-sm sm:text-xl md:text-2xl text-gray-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0 p-0 min-w-0 truncate max-w-[calc(100%-6rem)] sm:max-w-none text-left"
            aria-label="Ir para o início"
          >
            <span className="sm:hidden">{'<Luan />'}</span>
            <span className="hidden sm:inline">{'<Luan Machado />'}</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => onNavigate(item.id)}
                  className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${activeSection === item.id
                    ? 'text-gray-900 dark:text-white font-medium'
                    : ''
                    }`}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2"
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1 shrink-0 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <button
              type="button"
              aria-label="Fechar menu"
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-hidden box-border bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg pt-16 sm:pt-20"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    type="button"
                    variant="ghost"
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full justify-start text-left ${activeSection === item.id
                      ? 'bg-gray-100 dark:bg-gray-800 font-medium'
                      : ''
                      }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
