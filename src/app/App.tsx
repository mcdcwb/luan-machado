import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Toaster } from './components/ui/sonner';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll suave para a seção
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Detectar seção ativa durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamar uma vez ao montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header onNavigate={scrollToSection} activeSection={activeSection} />

      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}