import React from 'react';
import { Search, Bell, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar({ title }: { title: string }) {
  return (
    <header className="h-16 w-full flex items-center justify-between px-8 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-8 flex-1">
        <nav aria-label="Caminho de navegação" className="hidden md:flex items-center gap-2 text-sm text-slate-500">
          <span className="text-slate-400">Início</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-slate-800">{title}</span>
        </nav>
        
        <div className="max-w-md w-full ml-auto hidden lg:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar estudante, matrícula ou política..." 
              className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
              aria-label="Campo de busca"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 ml-6">
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Notificações">
            <Bell className="size-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
        
        <div className="h-8 w-px bg-slate-200"></div>

        <button className="flex items-center gap-3 pl-2 pr-1 py-1 hover:bg-slate-100 rounded-full transition-all focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Perfil do usuário">
          <div className="text-right hidden sm:block">
            <p className="font-bold text-xs text-slate-900 leading-tight">Admin Portal</p>
            <p className="text-[10px] text-slate-500 font-medium leading-tight">Coordenadoria</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-slate-100 overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
