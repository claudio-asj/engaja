import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings, 
  LifeBuoy,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Visão Geral', path: '/app' },
  { icon: Users, label: 'Estudantes Assistidos', path: '/app/estudantes' },
  { icon: BookOpen, label: 'Políticas e Iniciativas', path: '/app/politicas' },
  { icon: BarChart3, label: 'Relatórios de Impacto', path: '/app/relatorios' },
  { icon: Settings, label: 'Configurações', path: '/app/configuracoes' },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-sidebar text-slate-300 fixed left-0 top-0 z-50 border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
          M
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold leading-tight tracking-tight">MAPA v2</span>
          <span className="text-[10px] uppercase tracking-widest opacity-60">Portal Inclusão</span>
        </div>
      </div>

      <nav className="flex-grow mt-6 px-4 space-y-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group",
                  isActive 
                    ? "bg-primary text-white font-black shadow-lg shadow-primary/20" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
                aria-label={item.label}
              >
                {({ isActive }) => (
                  <>
                    <item.icon className="size-5 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-xs uppercase tracking-widest font-black">{item.label}</span>
                    <ChevronRight className={cn("size-4 ml-auto transition-all", isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0")} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800 mt-auto">
        <div className="bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-white">AD</div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-white font-medium truncate">Admin Portal</span>
            <span className="text-[10px] opacity-50 truncate">Gestão Acadêmica</span>
          </div>
        </div>
        <button className="flex items-center gap-3 w-full px-3 py-2 text-slate-400 hover:text-white transition-colors text-sm font-medium" aria-label="Sair do sistema">
          <LogOut className="size-5" />
          Sair
        </button>
      </div>
    </aside>
  );
}
