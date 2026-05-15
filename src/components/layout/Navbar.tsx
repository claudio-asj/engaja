import React from 'react';
import { Search, Bell, ChevronRight, Menu } from 'lucide-react';
import { useLayout } from './LayoutContext';

export function Navbar({ title }: { title: string }) {
  const { toggleMobileMenu } = useLayout();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-label="Abrir menu principal"
          >
            <Menu className="size-5" />
          </button>

          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary md:hidden">Portal de acessibilidade</p>
            <h2 className="truncate text-base font-black tracking-tight text-slate-900 sm:text-lg md:hidden">{title}</h2>
          </div>

          <nav aria-label="Caminho de navegação" className="hidden items-center gap-2 text-sm text-slate-500 md:flex">
            <span className="text-slate-400">Início</span>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-slate-800">{title}</span>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative rounded-full p-2.5 text-slate-500 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Notificações">
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
          </button>

          <button className="flex items-center gap-3 rounded-full py-1 pl-1 pr-2 transition-all hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Perfil do usuário">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-bold leading-tight text-slate-900">Admin Portal</p>
              <p className="text-[10px] font-medium leading-tight text-slate-500">Coordenadoria</p>
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

      <div className="border-t border-slate-100 px-4 py-3 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary" />
            <input 
              type="text" 
              placeholder="Buscar estudante, matrícula ou política..." 
              className="w-full rounded-full border-none bg-slate-100 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:ring-2 focus:ring-primary"
              aria-label="Campo de busca"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
