import React from 'react';
import { 
  BookOpen, 
  User, 
  Lock, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  Accessibility 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Login({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col antialiased font-sans">
      <main className="flex-grow flex items-center justify-center p-6 bg-slate-50/50">
        <div className="w-full max-w-[480px] bg-white border-2 border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-12 space-y-10 animate-in zoom-in duration-500">
          <header className="flex flex-col items-center">
            <div className="bg-slate-900 p-5 rounded-3xl mb-6 shadow-2xl shadow-slate-200 group hover:rotate-6 transition-transform">
              <Accessibility className="text-white size-10" />
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Acesso MAPA</h1>
            <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em] mt-3">Portal Administrativo v2.4</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1" htmlFor="username">
                Credencial Institucional
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-300 group-focus-within:text-primary transition-all" />
                <input 
                  id="username"
                  type="text" 
                  placeholder="E-mail ou Matrícula" 
                  className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm focus:ring-8 focus:ring-primary/5 outline-none transition-all font-black text-slate-900 placeholder:text-slate-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]" htmlFor="password">
                  Senha de Acesso
                </label>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-300 group-focus-within:text-primary transition-all" />
                <input 
                  id="password"
                  type="password" 
                  placeholder="********" 
                  className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm focus:ring-8 focus:ring-primary/5 outline-none transition-all font-black text-slate-900 placeholder:text-slate-300"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs py-1">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer size-5 rounded-lg border-2 border-slate-200 text-primary focus:ring-primary appearance-none checked:bg-primary checked:border-primary transition-all" />
                  <ShieldCheck className="absolute size-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="font-black text-slate-500 uppercase tracking-widest text-[9px]">Lembrar sessão</span>
              </label>
              <a href="#" className="font-black text-primary hover:opacity-70 transition-opacity uppercase tracking-widest text-[9px]">Recuperar senha</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-white py-6 rounded-3xl font-black text-sm flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all"
            >
              Autenticar
              <LogIn className="size-5" />
            </button>
          </form>

          <footer className="pt-10 border-t border-slate-50 space-y-6 text-center">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">Novo gestor de inclusão no campus?<br/>Solicite sua permissão abaixo</p>
            <button className="w-full bg-white border-2 border-slate-100 text-slate-900 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-primary/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-sm">
              <UserPlus className="size-5 text-primary" />
              Solicitar Acesso
            </button>
          </footer>
        </div>
      </main>

      <footer className="w-full py-10 px-8 flex flex-col items-center gap-8 bg-slate-100/50">
        <div className="flex items-center gap-8 text-[10px] font-black text-slate-400 tracking-widest">
          <a href="#" className="hover:text-primary transition-all">POLÍTICA DE PRIVACIDADE</a>
          <span className="size-1 rounded-full bg-slate-200"></span>
          <a href="#" className="hover:text-primary transition-all">TERMOS DE USO</a>
          <span className="size-1 rounded-full bg-slate-200"></span>
          <a href="#" className="hover:text-primary transition-all">SUPORTE TÉCNICO</a>
        </div>

        <div className="max-w-2xl text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#00236f]">
            <Accessibility className="size-5" />
            <h4 className="text-[10px] font-black uppercase tracking-widest">Declaração de Acessibilidade</h4>
          </div>
          <p className="text-xs text-[#757682] leading-relaxed font-medium">
            O MAPA é projetado para ser acessível a todos. Estamos em conformidade com as diretrizes <strong>WCAG 2.1 nível AA</strong> para garantir que administradores de todas as habilidades possam gerir o sistema com eficiência e autonomia absoluta.
          </p>
        </div>

        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
          <FooterInstitution
            acronym="UFRJ"
            name="Universidade Federal do Rio de Janeiro"
          />
          <FooterInstitution
            acronym="SGAADA"
            name="Superintendência-Geral de Ações Afirmativas, Diversidade e Acessibilidade"
          />
          <FooterInstitution
            acronym="DIRAC"
            name="Diretoria de Acessibilidade"
          />
        </div>

        <p className="text-[9px] font-black text-[#c5c5d3] uppercase tracking-[0.3em]">
          © 2024 MAPA - Ministério da Gestão e Acessibilidade Acadêmica
        </p>
      </footer>
    </div>
  );
}

function FooterInstitution({
  acronym,
  name,
}: {
  acronym: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-4 text-left">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-[11px] font-extrabold tracking-[0.14em] text-white">
        {acronym}
      </div>
      <p className="max-w-[220px] text-sm font-semibold leading-5 text-slate-900">{name}</p>
    </div>
  );
}
