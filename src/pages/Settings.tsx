import React from 'react';
import {
  Accessibility,
  Activity,
  Bell,
  Contrast,
  Edit2,
  ShieldCheck,
  SlidersHorizontal,
  Type,
  User,
  Users,
  Volume2,
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { cn } from '@/src/lib/utils';

export function Settings() {
  const [activeTab, setActiveTab] = React.useState('Acessibilidade');

  const tabs = [
    { id: 'Perfil', icon: User },
    { id: 'Usuários e Permissões', icon: ShieldCheck },
    { id: 'Notificações', icon: Bell },
    { id: 'Acessibilidade', icon: Accessibility },
  ];

  return (
    <>
      <Navbar title="Configurações do Sistema" />
      <main className="app-main">
        <div className="page-stack">
          <section className="page-header">
            <div>
              <h1 className="page-title">Configurações do sistema</h1>
              <p className="page-subtitle">
                Ajustes de operação, acessibilidade e governança com uma estrutura mais limpa e fácil de navegar.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="section-card h-fit p-4">
              <div className="flex items-center gap-3 border-b border-slate-100 px-2 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <SlidersHorizontal className="size-5" />
                </div>
                <div>
                  <p className="section-kicker">Preferências</p>
                  <h2 className="section-title mt-1">Navegação</h2>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition',
                      activeTab === tab.id ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100',
                    )}
                  >
                    <tab.icon className="size-4" />
                    <span className="font-medium">{tab.id}</span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="space-y-4">
              {activeTab === 'Acessibilidade' && (
                <section className="section-card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                      <Accessibility className="size-5" />
                    </div>
                    <div>
                      <p className="section-kicker">Acessibilidade</p>
                      <h2 className="section-title mt-1">Personalização da interface</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Ajustes de leitura e navegação para melhorar legibilidade, contraste e compatibilidade com tecnologias assistivas.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <SettingToggle title="Alto contraste" desc="Aumenta o contraste entre texto, fundo e estados de foco." icon={Contrast} />
                    <SettingToggle
                      title="Aumentar fonte"
                      desc="Eleva a escala base de leitura para usuários que precisam de mais conforto visual."
                      icon={Type}
                      enabled
                    />
                    <SettingToggle
                      title="Leitor de tela"
                      desc="Prioriza semântica, rótulos e ordem de leitura para tecnologias assistivas."
                      icon={Volume2}
                    />
                  </div>
                </section>
              )}

              <section className="section-card p-5 sm:p-6">
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                      <Users className="size-5" />
                    </div>
                    <div>
                      <p className="section-kicker">Equipe gestora</p>
                      <h2 className="section-title mt-1">Colaboradores e permissões</h2>
                    </div>
                  </div>
                  <button className="primary-button">Novo membro</button>
                </div>

                <div className="mt-5 space-y-3">
                  <TeamRow
                    name="Ana Souza"
                    email="ana.souza@instituto.edu"
                    role="Administradora"
                    level="Full access"
                    img="https://randomuser.me/api/portraits/women/11.jpg"
                  />
                  <TeamRow
                    name="Ricardo Lima"
                    email="ricardo.lima@instituto.edu"
                    role="Tutor sênior"
                    level="Editor"
                    img="https://randomuser.me/api/portraits/men/32.jpg"
                  />
                </div>
              </section>

              <section className="rounded-[28px] bg-slate-950 p-5 text-white shadow-[0_28px_60px_-34px_rgba(15,23,42,0.85)] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <Activity className="size-5" />
                  </div>
                  <div>
                    <p className="section-kicker text-blue-200">Logs de auditoria</p>
                    <h2 className="section-title mt-1 text-white">Atividades recentes</h2>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <LogItem time="14:32" log="Ana Souza alterou as permissões de acesso do perfil Tutor." type="Segurança" />
                  <LogItem time="11:05" log="Novo usuário Ricardo Lima adicionado à equipe administrativa." type="Usuários" />
                  <LogItem time="09:12" log="Backup automático do banco de dados concluído com sucesso." type="Sistema" />
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function SettingToggle({ title, desc, icon: Icon, enabled = false }: any) {
  return (
    <div className="section-card-muted p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
          <Icon className="size-5" />
        </div>
        <div className={cn('relative h-7 w-12 rounded-full p-1 transition-colors', enabled ? 'bg-primary' : 'bg-slate-300')}>
          <div className={cn('h-5 w-5 rounded-full bg-white shadow-sm transition-transform', enabled ? 'translate-x-5' : 'translate-x-0')} />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function TeamRow({ name, email, role, level, img }: any) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="h-12 w-12 rounded-2xl border border-slate-200 object-cover" />
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="mt-1 text-xs text-slate-500">{email}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600">{role}</span>
        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary">{level}</span>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">Ativo</span>
        <button className="ghost-button h-10 w-10 rounded-2xl px-0" aria-label={`Editar ${name}`}>
          <Edit2 className="size-4" />
        </button>
      </div>
    </div>
  );
}

function LogItem({ time, log, type }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="rounded-xl bg-white/10 px-3 py-1 text-xs font-semibold text-primary">{time}</span>
          <p className="text-sm leading-6 text-slate-200">{log}</p>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-300">{type}</span>
      </div>
    </div>
  );
}
