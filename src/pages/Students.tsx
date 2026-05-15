import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Eye, 
  History, 
  Edit2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CalendarDays,
  AlertTriangle,
  GraduationCap,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import mockData from '../data/mockData.json';
import { Modal } from '../components/ui/Modal';

export function Students() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = mockData.students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.mat.includes(searchTerm)
  );

  return (
    <>
      <Navbar title="Estudantes Assistidos" />
      <main className="p-8 space-y-8 animate-in fade-in duration-500 overflow-y-auto flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Gerenciamento de Alunos</h1>
            <p className="text-slate-500 mt-2 text-sm">Central de monitoramento e suporte acadêmico inclusivo.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all"
          >
            <UserPlus className="size-5" />
            Cadastrar Novo Aluno
          </button>
        </div>

        {/* Filters Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm space-y-5 hover:border-primary/10 transition-all group">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Pesquisa Global</label>
            <div className="relative group/input">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-300 group-focus-within/input:text-primary transition-all" />
              <input 
                type="text" 
                placeholder="Busca por Nome ou Matrícula..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl text-sm focus:border-primary/20 focus:bg-white focus:ring-8 focus:ring-primary/5 outline-none transition-all font-black text-slate-900 placeholder:text-slate-300"
              />
            </div>
          </div>
          
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FilterSelect label="Acessibilidade" options={["Todas as Demandas", "Visual", "Auditiva", "Motora", "TEA"]} />
            <FilterSelect label="Status" options={["Todos Status", "Ativo", "Formante", "Suspenso"]} />
            <FilterSelect label="Unidade" options={["Todos Campus", "Rio de Janeiro", "São Paulo", "Brasília"]} />
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm overflow-hidden flex flex-col mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Identificação Discente</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Formação Acadêmica</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tipo Inclusão</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Rendimento</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-all">
                          <img src={student.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-black text-sm text-slate-900 tracking-tight">{student.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mat: {student.mat}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <p className="text-sm font-black text-slate-700 tracking-tight">{student.course}</p>
                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{student.campus}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-black bg-blue-50 text-primary border-2 border-blue-100 px-4 py-2 rounded-xl uppercase tracking-widest shadow-sm">
                        {student.need}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm font-black text-slate-900 tracking-tighter">
                       {student.cr.toFixed(2)}
                       <span className="text-[8px] text-slate-400 ml-1">CR</span>
                    </td>
                    <td className="px-8 py-6">
                      <StatusBadge status={student.status} />
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ActionButton icon={Eye} label="Ver Detalhes" />
                        <ActionButton icon={Edit2} label="Editar Aluno" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-8 py-6 flex flex-col sm:flex-row items-center justify-between bg-slate-50/50 gap-6 border-t border-slate-100">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
               Exibindo <span className="text-slate-900">{filteredStudents.length}</span> de <span className="text-slate-900">{mockData.stats.pcdTotal}</span> estudantes
            </span>
            <div className="flex items-center gap-2">
                <PaginationButton icon={ChevronLeft} disabled />
                {[1, 2, 3].map(i => (
                  <button key={i} className={cn(
                    "size-10 rounded-xl text-[10px] font-black transition-all",
                    i === 1 ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-white border-2 border-slate-100 text-slate-500 hover:border-primary/20"
                  )}>{i}</button>
                ))}
                <PaginationButton icon={ChevronRight} />
            </div>
          </div>
        </div>

        {/* Footer Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterStat color="bg-slate-950" icon={TrendingUp} value={mockData.stats.activeStudents} label="Inscritos Ativos" trend="+12%" />
          <FooterStat color="bg-white" icon={CalendarDays} value="24" label="Entrevistas efetuadas" darkText />
          <FooterStat color="bg-white" icon={AlertTriangle} value="15" label="Plano de Metas" darkText iconColor="text-red-500" />
          <FooterStat color="bg-white" icon={GraduationCap} value="312" label="Graduados PCDs" darkText />
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Cadastrar Novo Aluno Assistido"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Nome Completo</label>
              <input type="text" className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold" placeholder="Ex: João da Silva" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Matrícula</label>
                <input type="text" className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold" placeholder="2024.1.XXXX" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Curso</label>
                <select className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold appearance-none">
                  <option>Psicologia</option>
                  <option>Ciência da Computação</option>
                  <option>Engenharia Civil</option>
                  <option>Direito</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Necessidade Acadêmica Principal</label>
              <select className="w-full p-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm outline-none transition-all font-semibold appearance-none">
                <option>Deficiência Visual (Baixa Visão/Cegueira)</option>
                <option>Deficiência Auditiva (Libras)</option>
                <option>Autismo (TEA)</option>
                <option>Mobilidade Reduzida</option>
                <option>Outros</option>
              </select>
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
              Criar Cadastro
              <Plus className="size-5" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm space-y-4 hover:border-primary/10 transition-all flex flex-col justify-center">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1 leading-none">{label}</label>
      <select className="w-full bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl py-4 px-5 text-sm outline-none cursor-pointer font-black transition-all appearance-none text-slate-900 mt-2">
        {options.map(opt => <option key={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isAtendido = status === 'ATENDIDO' || status === 'Ativo';
  
  return (
    <span className={cn(
      "inline-flex items-center gap-2 text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-[0.2em] border-2",
      isAtendido ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
    )}>
      <span className={cn("size-2 rounded-full", isAtendido ? "bg-emerald-500" : "bg-amber-500 shadow-sm")}></span>
      {status}
    </span>
  );
}

function ActionButton({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="size-11 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:rotate-6 shadow-sm" aria-label={label}>
      <Icon className="size-5" />
    </button>
  );
}

function PaginationButton({ icon: Icon, disabled = false }: any) {
  return (
    <button 
      disabled={disabled}
      className={cn(
        "size-10 flex items-center justify-center rounded-xl border-2 border-slate-100 transition-all",
        disabled ? "opacity-30 cursor-not-allowed" : "bg-white text-slate-400 hover:border-primary/20 hover:text-primary shadow-sm"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}

function FooterStat({ color, icon: Icon, value, label, trend, darkText = false, iconColor }: any) {
  return (
    <div className={cn("p-8 rounded-[2.5rem] shadow-sm border-2 border-slate-100 flex flex-col justify-between h-44 group hover:shadow-2xl transition-all relative overflow-hidden", color)}>
      <div className="flex justify-between items-start relative z-10">
        <div className={cn("size-12 rounded-2xl flex items-center justify-center shadow-sm", darkText ? "bg-slate-50 border border-slate-100" : "bg-white/10 backdrop-blur-md")}>
           <Icon className={cn("size-6", iconColor || (darkText ? "text-primary" : "text-white"))} />
        </div>
        {trend && <span className="text-[10px] font-black bg-white text-primary px-4 py-2 rounded-xl shadow-lg shadow-black/5">{trend}</span>}
      </div>
      <div className="space-y-1 relative z-10">
        <div className={cn("text-4xl font-black tracking-tighter leading-none", darkText ? "text-slate-900" : "text-white")}>{value}</div>
        <div className={cn("text-[10px] font-black uppercase tracking-[0.2em] mt-2", darkText ? "text-slate-400" : "text-white/40")}>{label}</div>
      </div>
      <div className={cn("absolute -bottom-6 -right-6 size-32 rounded-full transition-transform duration-700 group-hover:scale-150 opacity-10", darkText ? "bg-slate-100" : "bg-white/10")} />
    </div>
  );
}
