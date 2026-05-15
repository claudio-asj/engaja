import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLayout } from './LayoutContext';

const navItems = [
  { icon: LayoutDashboard, label: 'Visão Geral', path: '/app', exact: true, hint: 'Resumo executivo e indicadores' },
  { icon: Users, label: 'Estudantes', path: '/app/estudantes', hint: 'Cadastros, perfis e acompanhamento' },
  { icon: BookOpen, label: 'Políticas', path: '/app/politicas', hint: 'Benefícios, editais e iniciativas' },
  { icon: BarChart3, label: 'Relatórios', path: '/app/relatorios', hint: 'Indicadores e análises consolidadas' },
  { icon: Settings, label: 'Configurações', path: '/app/configuracoes', hint: 'Preferências e gestão de acesso' },
];

export function Sidebar() {
  const { isMobileMenuOpen, closeMobileMenu } = useLayout();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!isMobileMenuOpen}
        onClick={closeMobileMenu}
      />

      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-screen w-[88vw] max-w-xs flex-col border-r border-slate-800/80 bg-sidebar text-slate-300 shadow-2xl transition-transform duration-300 md:w-[17.5rem] md:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label="Menu principal"
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-5 md:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-base font-extrabold text-white shadow-lg shadow-primary/20">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold leading-tight tracking-tight text-white">MAPA</span>
              <span className="text-[11px] font-medium tracking-[0.14em] text-slate-400 uppercase">Portal Inclusão</span>
            </div>
          </div>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-4 flex-grow space-y-1 overflow-y-auto px-3 pb-6 md:mt-6 md:px-4">
          <div className="mb-4 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-4 md:hidden">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Acesso rápido</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Navegue entre estudantes, políticas e relatórios com menos rolagem e mais contraste.
            </p>
          </div>
          <div className="mb-3 px-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Módulos do sistema</p>
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.exact}
                  onClick={closeMobileMenu}
                  className={({ isActive }) => cn(
                    "group flex items-start gap-3 rounded-2xl px-4 py-3.5 transition-all duration-300",
                    isActive 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                  aria-label={item.label}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className="mt-0.5 size-5 shrink-0 transition-transform group-hover:scale-110" />
                      <div className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold tracking-tight">{item.label}</span>
                        <span className={cn(
                          "mt-1 block text-xs leading-5",
                          isActive ? "text-blue-100/90" : "text-slate-500 group-hover:text-slate-300"
                        )}>
                          {item.hint}
                        </span>
                      </div>
                      <ChevronRight className={cn("ml-auto mt-1 size-4 shrink-0 transition-all", isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ambiente institucional</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Uso interno da UFRJ para acompanhamento de acessibilidade, inclusão e permanência estudantil.
            </p>
          </div>
          <div className="mb-4 flex items-center gap-3 rounded-2xl bg-slate-800/50 p-3.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-xs font-bold text-white">AD</div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold text-white">Admin Portal</span>
              <span className="truncate text-[11px] text-slate-400">Gestão Acadêmica</span>
            </div>
          </div>
          <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white" aria-label="Sair do sistema">
            <LogOut className="size-5" />
            Sair
          </button>
        </div>
      </aside>
    </>
  );
}
