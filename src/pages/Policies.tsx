import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { 
  BookOpen, 
  PlusCircle, 
  ArrowRight, 
  BookMarked, 
  Languages, 
  Clock, 
  Laptop,
  FolderOpen,
  FileText,
  Download,
  Star,
  Zap,
  Info
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import mockData from '../data/mockData.json';
import { Modal } from '../components/ui/Modal';

export function Policies() {
  const [filter, setFilter] = useState('Todas');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons: any = {
    "Isenção de Material": BookMarked,
    "Intérprete de Libras": Languages,
    "Tempo Adicional": Clock,
    "Notebooks Emprestados": Laptop
  };

  return (
    <>
      <Navbar title="Políticas e Iniciativas" />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Estratégias de Inclusão</h1>
            <p className="text-slate-500 mt-2 text-sm">Gerencie as diretrizes de apoio e os benefícios institucionais para discentes.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all"
          >
            <PlusCircle className="size-5" />
            Criar Nova Política
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {['Todas', 'Acadêmica', 'Infraestrutura', 'Tecnologia Assistiva', 'Financeira'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                "px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all border-2",
                filter === tag 
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                  : "bg-white text-slate-400 border-slate-100 hover:border-primary/20"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {mockData.policies.map((policy) => (
            <PolicyCard 
              key={policy.id}
              title={policy.title} 
              desc={policy.desc}
              icon={icons[policy.title] || Zap}
              count={policy.beneficiaries}
              status={policy.status}
              variant={policy.status === 'Revisão' ? 'warning' : 'default'}
            />
          ))}
          
          <div className="lg:col-span-2 bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-primary mb-6">
                <Star className="size-5 fill-current" />
                <span className="text-[10px] uppercase font-black tracking-[0.2em]">Destaque do Semestre</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight leading-tight">Programa de <br/> Monitoria Inclusiva</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-8 font-medium">
                Estudantes veteranos atuando como mentores e facilitadores para ingressantes com deficiência, promovendo integração social e acadêmica sólida.
              </p>
              
              <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="size-11 rounded-2xl border-4 border-slate-900 bg-slate-800 overflow-hidden shadow-xl">
                        <img src={`https://randomuser.me/api/portraits/lego/${i}.jpg`} alt="Monitor" />
                      </div>
                    ))}
                    <div className="size-11 rounded-2xl border-4 border-slate-900 bg-primary/20 flex items-center justify-center text-[10px] font-black text-primary backdrop-blur-sm">+12</div>
                  </div>
                  <div>
                    <p className="text-white font-black text-lg leading-none">45</p>
                    <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mt-1">Monitores Ativos</p>
                  </div>
                </div>
                <button className="sm:ml-auto w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-primary-container transition-all active:scale-95 shadow-xl shadow-primary/30">
                  Gerenciar Programa
                </button>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 p-8 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-700">
               <BookOpen className="size-80 rotate-12" />
            </div>
          </div>
        </div>

        <section className="bg-white border border-slate-200 rounded-[2rem] p-5 sm:p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-slate-100 rounded-2xl flex items-center justify-center text-primary">
                <FolderOpen className="size-6" />
              </div>
              <div>
                <h3 className="font-black text-xl text-slate-900 tracking-tight">Base de Conhecimento</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Editais e Documentação</p>
              </div>
            </div>
            <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all px-4 py-2 hover:bg-primary/5 rounded-xl">
              Ver Todos
              <ArrowRight className="size-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DocItem title="Regulamento de Acessibilidade 2024.pdf" size="2.4 MB" />
            <DocItem title="Edital_Monitoria_MAPA_v1.pdf" size="1.1 MB" />
            <DocItem title="Guia_Tecnologia_Assistiva.pdf" size="4.8 MB" />
            <DocItem title="Formulario_Solicitacao_Material.pdf" size="840 KB" />
          </div>
        </section>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Criar Nova Política de Inclusão"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Título da Política</label>
              <input type="text" className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold" placeholder="Ex: Auxílio Órtese" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Categoria Principal</label>
              <select className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold appearance-none">
                <option>Acadêmica</option>
                <option>Infraestrutura</option>
                <option>Tecnologia Assistiva</option>
                <option>Financeira</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Descrição do Benefício</label>
              <textarea rows={4} className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold resize-none" placeholder="Descreva os critérios de elegibilidade e o benefício ofertado..."></textarea>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-6 py-4 border-2 border-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="flex-1 px-6 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-container shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              Publicar Política
              <PlusCircle className="size-5" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function PolicyCard({ title, desc, icon: Icon, count, status, variant = 'default' }: any) {
  const isWarning = variant === 'warning';
  
  return (
    <div className="bg-white border-2 border-slate-100 p-5 sm:p-6 lg:p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-transparent transition-all group flex flex-col h-full relative overflow-hidden">
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className={cn(
          "size-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm",
          isWarning ? "bg-amber-100 text-amber-600" : "bg-blue-50 text-primary"
        )}>
          <Icon className="size-7" />
        </div>
        <span className={cn(
          "text-[10px] font-black px-3.5 py-1.5 rounded-xl uppercase tracking-widest border-2",
          isWarning ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"
        )}>
          {status}
        </span>
      </div>
      
      <div className="relative z-10">
        <h4 className="font-black text-xl text-slate-900 mb-3 tracking-tight">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow font-medium">{desc}</p>
      </div>
      
      <div className="pt-8 border-t border-slate-50 flex justify-between items-end mt-auto relative z-10">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Beneficiados</p>
          <p className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{count}</p>
        </div>
        <button className="size-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:rotate-12">
          <Info className="size-6" />
        </button>
      </div>
      
      <div className="absolute -bottom-4 -right-4 size-32 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
    </div>
  );
}

function DocItem({ title, size }: { title: string, size: string }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-50 hover:bg-slate-50/50 hover:border-primary/10 transition-all cursor-pointer group">
      <div className="size-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <FileText className="size-7" />
      </div>
      <div className="flex-grow min-w-0">
        <h5 className="font-bold text-sm text-slate-900 truncate tracking-tight">{title}</h5>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{size} • PDF</p>
      </div>
      <div className="size-10 rounded-xl flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:bg-primary/5 transition-all">
        <Download className="size-5" />
      </div>
    </div>
  );
}
