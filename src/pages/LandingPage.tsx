import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Accessibility, 
  Zap,
  LayoutDashboard,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Header/Nav */}
      <nav className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-8">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
              M
            </div>
            <span className="text-slate-900 font-bold text-xl tracking-tight">MAPA v2</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Recursos</a>
            <a href="#sobre" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Contato</a>
            <Link 
              to="/login" 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all"
            >
              Acessar Painel
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 text-primary px-5 py-2 rounded-2xl border-2 border-blue-100 shadow-sm">
              <Zap className="size-4 fill-current" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Inovação em Acessibilidade</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]">
              Gestão <br /> 
              Inteligente de <br /> 
              <span className="text-primary italic">Inclusão.</span>
            </h1>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              A plataforma definitiva para monitoramento de estudantes assistidos, gestão de tecnologias assistivas e fomento de políticas inclusivas institucionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-slate-300 hover:bg-primary active:scale-95 transition-all"
              >
                Configurar Unidade
                <ChevronRight className="size-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-700 px-10 py-5 rounded-3xl font-black text-lg hover:border-primary hover:text-primary shadow-sm hover:shadow-xl transition-all">
                Ver Demonstração
              </button>
            </div>
          </motion.div>

          {/* Hero Image / UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-4 border-white p-5 aspect-video relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="Dashboard Preview" 
                className="rounded-[2rem] w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-10">
                <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] border-2 border-white shadow-2xl flex items-center gap-6">
                  <div className="size-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                    <ShieldCheck className="size-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Índice de Acessibilidade</p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter">98.5% <span className="text-xs text-emerald-600 ml-1">EFICÁCIA</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating assets */}
            <div className="absolute -top-12 -right-12 bg-white p-8 rounded-[2.5rem] shadow-2xl border-2 border-slate-50 hidden lg:block hover:-translate-y-4 transition-transform duration-500">
               <div className="flex items-center gap-5">
                  <div className="size-14 bg-blue-50 text-primary rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                    <Accessibility className="size-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-950 text-4xl leading-none tracking-tighter">450+</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Novas Metas</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Gerenciamento Completo de Ponta a Ponta</h2>
            <p className="text-slate-600 font-medium">Automatize processos, elimine papéis e foque no que realmente importa: o bem-estar do estudante.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={LayoutDashboard}
              title="Painel Analítico"
              desc="Visualize tendências de desempenho, retenção e satisfação em tempo real através de dashboards inteligentes."
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard 
              icon={Users}
              title="Acompanhamento Individual"
              desc="Histórico completo de cada estudante assistido, com registros de entrevistas e planos personalizados."
              color="bg-purple-50 text-purple-600"
            />
            <FeatureCard 
              icon={Shield}
              title="Gestão de Políticas"
              desc="Controle centralizado de benefícios, editais e iniciativas de acessibilidade em toda a instituição."
              color="bg-amber-50 text-amber-600"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg">
              M
            </div>
            <span className="font-bold text-2xl tracking-tight">MAPA v2</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-sm font-semibold opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">POLÍTICAS</a>
            <a href="#" className="hover:opacity-100 transition-opacity">DIRETRIZES WCAG</a>
            <a href="#" className="hover:opacity-100 transition-opacity">DOCUMENTAÇÃO</a>
            <a href="#" className="hover:opacity-100 transition-opacity">INSTITUCIONAL</a>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-xs opacity-50 uppercase tracking-[0.3em] font-black">Plataforma em conformidade com</p>
            <div className="flex items-center justify-center gap-6 opacity-30">
               <span className="font-black text-xl italic tracking-tighter">FEDERAL UNIVERSITY</span>
               <span className="h-6 w-px bg-white"></span>
               <span className="font-black text-xl tracking-tighter">MINISTRY OF EDUCATION</span>
            </div>
          </div>
          
          <p className="text-[10px] opacity-30 font-bold">© 2024 MAPA - SISTEMA DE GESTÃO E INCLUSÃO ACADÊMICA</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-white transition-all group">
      <div className={cn("size-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", color)}>
        <Icon className="size-7" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
      <button className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
        Saiba mais
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
