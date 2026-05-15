import React from 'react';
import { Bell, ChevronRight, Menu } from 'lucide-react';
import { useLayout } from './LayoutContext';

export function Navbar({ title }: { title: string }) {
  const { toggleMobileMenu } = useLayout();
  const today = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 xl:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-label="Abrir menu principal"
          >
            <Menu className="size-5" />
          </button>

          <div className="min-w-0 md:hidden">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">Portal de acessibilidade</p>
            <h2 className="truncate text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">{title}</h2>
          </div>

          <div className="hidden min-w-0 md:block">
            <nav aria-label="Caminho de navegação" className="flex items-center gap-2 text-sm text-slate-500">
              <span className="text-slate-400">Painel</span>
              <ChevronRight className="h-4 w-4" />
              <span className="font-semibold text-slate-800">{title}</span>
            </nav>
            <p className="mt-1 text-sm text-slate-500">
              Ambiente interno para gestão de inclusão, acessibilidade e permanência.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-right lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Data</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{today}</p>
          </div>

          <button className="relative rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-500 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Notificações">
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
          </button>

          <button className="flex items-center gap-3 rounded-2xl border border-transparent py-1.5 pl-1.5 pr-2 transition-all hover:border-slate-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Perfil do usuário">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold leading-tight text-slate-900">Admin Portal</p>
              <p className="text-[11px] leading-tight text-slate-500">Coordenadoria</p>
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop" 
                alt="Avatar" 
                className="h-full w-full object-cover"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
