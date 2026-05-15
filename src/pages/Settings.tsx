import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { 
  User, 
  ShieldCheck, 
  Bell, 
  Accessibility, 
  ChevronRight, 
  Contrast, 
  Type, 
  Volume2,
  Users,
  Plus,
  Edit2,
  History,
  Activity
} from 'lucide-react';
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
      <main className="p-8 animate-in slide-in-from-left-4 duration-500 overflow-y-auto flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-1">
            <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm p-4 space-y-1">
              <div className="px-4 py-4 mb-4 border-b border-slate-50 flex items-center gap-3">
                 <div className="size-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Settings className="size-5" />
                 </div>
                 <h2 className="font-black text-slate-900 tracking-tight">Preferências</h2>
              </div>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-4 px-5 py-4 text-left transition-all rounded-3xl group outline-none",
                    activeTab === tab.id 
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                      : "text-slate-400 hover:bg-slate-50 font-bold hover:text-slate-600"
                  )}
                >
                  <tab.icon className={cn("size-5 transition-transform group-hover:scale-110", activeTab === tab.id ? "text-primary" : "text-slate-400")} />
                  <span className="text-xs uppercase tracking-widest font-black">{tab.id}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-10">
            {activeTab === 'Acessibilidade' && (
              <section className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-10 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center gap-4 relative">
                  <div className="size-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary border border-blue-100">
                    <Accessibility className="size-7" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-slate-900 tracking-tight leading-none">Acessibilidade</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 px-1">Personalização da Interface Visual</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SettingToggle 
                    title="Alto Contraste" 
                    desc="Aumenta o contraste das cores para melhor legibilidade." 
                    icon={Contrast} 
                  />
                  <SettingToggle 
                    title="Aumentar Fonte" 
                    desc="Ajusta o tamanho base dos textos para 18px em todo o sistema." 
                    icon={Type} 
                    enabled
                  />
                  <SettingToggle 
                    title="Leitor de Tela" 
                    desc="Otimiza a estrutura do DOM para tecnologias assistivas." 
                    icon={Volume2} 
                  />
                </div>
              </section>
            )}

            <section className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-10 animate-in fade-in duration-700">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-50 pb-8">
                  <div className="flex items-center gap-4">
                    <div className="size-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 border border-purple-100">
                      <Users className="size-7" />
                    </div>
                    <div>
                      <h3 className="font-black text-2xl text-slate-900 tracking-tight leading-none">Equipe Gestora</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 px-1">Colaboradores e Administradores</p>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all">
                    <Plus className="size-5" />
                    Novo Membro
                  </button>
               </div>

               <div className="space-y-4">
                 <TeamRow 
                    name="Ana Souza" 
                    email="ana.souza@instituto.edu" 
                    role="Administradora" 
                    level="FULL ACCESS" 
                    img="https://randomuser.me/api/portraits/women/11.jpg" 
                 />
                 <TeamRow 
                    name="Ricardo Lima" 
                    email="ricardo.lima@instituto.edu" 
                    role="Tutor Sênior" 
                    level="EDITOR" 
                    img="https://randomuser.me/api/portraits/men/32.jpg" 
                 />
               </div>
            </section>

            <section className="bg-slate-950 rounded-[2.5rem] p-10 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="flex items-center gap-4 relative z-10">
                <div className="size-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary backdrop-blur-md">
                   <Activity className="size-6" />
                </div>
                <div>
                  <h3 className="font-black text-xl text-white tracking-tight leading-none">Logs de Auditoria</h3>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2 px-1">Atividades Recentes do Sistema</p>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <LogItem time="14:32" log="Ana Souza alterou as permissões de acesso do perfil 'Tutor'." type="SECURITY" />
                <LogItem time="11:05" log="Novo usuário 'Ricardo Lima' adicionado à equipe administrativa." type="USER_MGT" />
                <LogItem time="09:12" log="Backup automático do banco de dados concluído com sucesso." type="SYSTEM" />
              </div>

              <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none">
                 <ShieldCheck className="size-64" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

function SettingToggle({ title, desc, icon: Icon, enabled = false }: any) {
  return (
    <div className="p-6 border-2 border-slate-50 bg-slate-50/30 rounded-3xl flex flex-col gap-5 hover:border-primary/20 hover:bg-white transition-all cursor-pointer group shadow-sm hover:shadow-xl">
      <div className="flex justify-between items-start">
        <div className="size-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
           <Icon className="text-slate-400 group-hover:text-primary transition-colors size-6" />
        </div>
        <div className={cn(
          "w-12 h-7 rounded-full relative p-1 transition-colors duration-500",
          enabled ? "bg-primary" : "bg-slate-200"
        )}>
          <div className={cn(
            "size-5 bg-white rounded-full transition-all duration-500 shadow-md",
            enabled ? "translate-x-5" : "translate-x-0"
          )}></div>
        </div>
      </div>
      <div>
        <h4 className="font-black text-slate-900 tracking-tight">{title}</h4>
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1.5">{desc}</p>
      </div>
    </div>
  );
}

function TeamRow({ name, email, role, level, img }: any) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-50/50 rounded-3xl hover:bg-white transition-all cursor-pointer border-2 border-transparent hover:border-slate-100 group gap-6 hover:shadow-xl">
      <div className="flex items-center gap-5 w-full">
        <div className="size-14 rounded-2xl overflow-hidden border-4 border-white shadow-xl transition-transform group-hover:scale-105">
           <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="font-black text-base text-slate-900 tracking-tight leading-none">{name}</p>
          <p className="text-xs text-slate-400 font-bold mt-1.5">{email}</p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-10 w-full sm:w-auto">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{role}</p>
          <span className="text-[10px] font-black bg-blue-50 text-primary px-3 py-1 rounded-lg tracking-[0.1em] mt-1 inline-block border border-blue-100">{level}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Ativo</span>
        </div>
        <button className="p-3 text-slate-300 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all">
          <Edit2 className="size-5" />
        </button>
      </div>
    </div>
  );
}

function LogItem({ time, log, type }: any) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors px-4 rounded-2xl group">
      <div className="flex items-center gap-6">
        <span className="font-black text-xs text-primary font-mono shrink-0 py-1 px-3 bg-white/5 rounded-lg">{time}</span>
        <p className="text-sm text-slate-300 font-medium leading-tight group-hover:text-white transition-colors">{log}</p>
      </div>
      <span className="text-[9px] font-black bg-white/10 text-slate-500 px-3 py-1.5 rounded-lg tracking-widest uppercase">{type}</span>
    </div>
  );
}
