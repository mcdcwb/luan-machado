import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner';

const CONTACT_EMAIL = 'machadoluaan@gmail.com';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error('Informe um e-mail válido');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error(
        'Formulário temporariamente indisponível. Use o botão do WhatsApp para falar comigo.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Contato do portfólio - ${trimmedName}`,
          from_name: 'Portfólio Luan Machado',
          replyto: trimmedEmail,
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          'Mensagem enviada com sucesso! Entrarei em contato em breve.'
        );
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      throw new Error(result.message ?? 'Falha ao enviar');
    } catch {
      toast.error(
        'Não foi possível enviar a mensagem. Tente novamente ou use o botão do WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success('E-mail copiado para a área de transferência');
    } catch {
      toast.error('Não foi possível copiar o e-mail');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mcdcwb',
      link: 'https://github.com/mcdcwb',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/luanmachadof',
      link: 'https://www.linkedin.com/in/luanmachadof/',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: CONTACT_EMAIL,
      onClick: copyEmail,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 scroll-mt-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Vamos
              conversar!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 sm:p-8 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                    >
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                      rows={6}
                      className="w-full resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Send className="h-5 w-5" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Outras formas de contato
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prefere usar outras plataformas? Você pode me encontrar nos
                  seguintes canais:
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const card = (
                    <Card className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500 group">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {method.label}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );

                  const motionProps = {
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.1 * index },
                    className: 'block w-full',
                  };

                  if ('onClick' in method) {
                    return (
                      <motion.button
                        key={method.label}
                        type="button"
                        onClick={method.onClick}
                        {...motionProps}
                        className="block w-full text-left p-0 border-0 bg-transparent cursor-pointer"
                      >
                        {card}
                      </motion.button>
                    );
                  }

                  return (
                    <motion.a
                      key={method.label}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...motionProps}
                    >
                      {card}
                    </motion.a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <Card className="p-6 border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Tempo de Resposta
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Geralmente respondo a todas as mensagens dentro de 24-48
                  horas. Para projetos urgentes, entre em contato diretamente
                  pelo LinkedIn.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
