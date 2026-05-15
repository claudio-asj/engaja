import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { 
  Users, 
  ShieldCheck, 
  CalendarClock, 
  TrendingUp, 
  Plus, 
  Search,
  Filter,
  Download,
  CalendarDays,
  FileEdit,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import mockData from '../data/mockData.json';
import { Modal } from '../components/ui/Modal';

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const chartData = [
  { name: 'Sem 01', desempenho: 6.2, bemEstar: 7.0 },
  { name: 'Sem 02', desempenho: 6.8, bemEstar: 6.8 },
  { name: 'Sem 03', desempenho: 7.4, bemEstar: 8.2 },
  { name: 'Sem 04', desempenho: 7.8, bemEstar: 7.5 },
];

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar title="Gestão de Inclusão Acadêmica" />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 lg:space-y-10 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">Painel de Controle</h1>
            <p className="text-slate-500 mt-2 text-sm font-medium">Bem-vindo(a) ao seu centro de gestão e acessibilidade acadêmica.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all"
          >
            <Plus className="size-5" />
            Novo Registro
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <StatCard 
            label="Inscritos Ativos" 
            value={mockData.stats.activeStudents.toLocaleString()} 
            trend="+2.4%" 
            trendLabel="Semestre Atual" 
            icon={Users} 
            iconBg="bg-blue-50"
            iconColor="text-primary"
          />
          <StatCard 
            label="Necessidades Específicas" 
            value={mockData.stats.pcdTotal} 
            subLabel="Base DIRAC / SIGA" 
            icon={ShieldCheck} 
            iconBg="bg-purple-50"
            iconColor="text-purple-600"
          />
          <StatCard 
            label="Recursos Ativos" 
            value={mockData.stats.techAssistive} 
            subLabel="Softwares e Hardwares" 
            icon={CalendarDays} 
            iconBg="bg-amber-50"
            iconColor="text-amber-600"
          />
          <StatCard 
            label="Média Coeficiente (CR)" 
            value={mockData.stats.avgCr} 
            subLabel="Performance Geral" 
            icon={TrendingUp} 
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-8 bg-white p-5 sm:p-6 lg:p-8 rounded-[2rem] border-2 border-slate-100 shadow-sm flex flex-col min-h-[320px] sm:min-h-[420px] lg:min-h-[450px] relative overflow-hidden group">
             <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 lg:mb-10 relative z-10">
              <div>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none">Evolução Sistêmica</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2 px-1">Performance Acadêmica vs Bem-estar</p>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-sm"></span>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CR Médio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></span>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Social</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDesempenho" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorBemEstar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 700 }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="desempenho" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorDesempenho)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="bemEstar" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorBemEstar)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Action Side Card */}
          <div className="lg:col-span-4 bg-white p-5 sm:p-6 lg:p-8 rounded-[2rem] border-2 border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="p-3 bg-blue-50 text-primary rounded-2xl border border-blue-100">
                <FileEdit className="size-6" />
              </div>
              <div>
                <h3 className="font-black text-lg text-slate-900 tracking-tight leading-none">Check-in Rápido</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Registro de Entrevista</p>
              </div>
            </div>
            
            <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Identificar Estudante</label>
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <select className="w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm font-bold text-slate-700 outline-none appearance-none transition-all">
                    <option value="">Selecione...</option>
                    {mockData.students.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Percepção de Autonomia</label>
                <input type="range" min="1" max="5" defaultValue="3" className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between px-1">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Muito Dependente</span>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Plena Autonomia</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Observações Qualitativas</label>
                <textarea rows={4} placeholder="Notas sobre a evolução do aluno..." theme-variant="modern" className="w-full p-4 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl text-sm font-medium text-slate-700 outline-none resize-none transition-all"></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white py-4 sm:py-5 rounded-[1.25rem] font-black text-sm shadow-xl shadow-slate-200 hover:bg-primary active:scale-[0.98] transition-all">
                Finalizar Registro
              </button>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="bg-white rounded-[2rem] border-2 border-slate-100 shadow-sm overflow-hidden flex flex-col mb-12">
          <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-slate-100 rounded-2xl flex items-center justify-center text-primary">
                <Users className="size-6" />
              </div>
              <div>
                <h2 className="font-black text-xl text-slate-900 tracking-tight leading-none">Monitoramento Ativo</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 px-1">Prioridades de Acompanhamento Semestral</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border-2 border-slate-100 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-primary/20 transition-all">
                <Filter className="size-4" />
                Filtrar
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary-container transition-all">
                <Download className="size-4" />
                Gerar PDF
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">
                  <th className="px-8 py-5">Identificação Discente</th>
                  <th className="px-8 py-5">Eixo / Campus</th>
                  <th className="px-8 py-5">Perfil de Inclusão</th>
                  <th className="px-8 py-5">Performance</th>
                  <th className="px-8 py-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {mockData.students.map((student) => (
                  <TableRow 
                    key={student.id}
                    student={student}
                  />
                ))}
              </tbody>
            </table>
          </div>
          
          <footer className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Exibindo <span className="text-slate-900">{mockData.students.length}</span> de <span className="text-slate-900">{mockData.stats.pcdTotal}</span> monitorados
            </p>
            <div className="flex items-center gap-2">
              <button className="size-10 flex items-center justify-center border-2 border-slate-100 bg-white rounded-xl hover:border-primary/20 transition-all">
                 <ChevronLeft className="size-4 text-slate-400" />
              </button>
              {[1, 2, 3].map(i => (
                <button 
                  key={i} 
                  className={cn(
                    "size-10 flex items-center justify-center rounded-xl text-[10px] font-black transition-all",
                    i === 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white border-2 border-slate-100 text-slate-500 hover:border-primary/20"
                  )}
                >
                  {i}
                </button>
              ))}
              <button className="size-10 flex items-center justify-center border-2 border-slate-100 bg-white rounded-xl hover:border-primary/20 transition-all">
                 <ChevronRight className="size-4 text-slate-400" />
              </button>
            </div>
          </footer>
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Novo Registro de Acompanhamento"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tipo de Atendimento</label>
              <select className="w-full p-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none appearance-none">
                <option>Entrevista Inicial</option>
                <option>Acompanhamento Periódico</option>
                <option>Solicitação de Recurso TA</option>
                <option>Avaliação de Desempenho</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Estudante</label>
              <select className="w-full p-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none appearance-none">
                {mockData.students.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.mat})</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Descrição</label>
              <textarea rows={4} className="w-full p-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Detalhes do atendimento..."></textarea>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-6 py-3 border-2 border-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-container shadow-lg shadow-primary/10 transition-all"
            >
              Salvar Registro
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function StatCard({ label, value, trend, trendLabel, subLabel, icon: Icon, iconBg, iconColor }: any) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm flex flex-col justify-between h-40 group hover:border-transparent hover:shadow-xl transition-all relative overflow-hidden">
      <div className="flex justify-between items-start relative z-10">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">{label}</span>
        <div className={cn("size-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm", iconBg, iconColor)}>
          <Icon className="size-6" />
        </div>
      </div>
      <div className="relative z-10">
        <div className="text-4xl font-black text-slate-900 leading-none tracking-tighter">{value}</div>
        {trend ? (
          <div className="text-[10px] text-emerald-500 mt-3 flex items-center font-black uppercase tracking-widest">
            {trend} <span className="text-slate-400 ml-1.5 font-bold">{trendLabel}</span>
          </div>
        ) : (
          <div className="text-[10px] text-slate-400 mt-3 font-black uppercase tracking-widest">
            {subLabel}
          </div>
        )}
      </div>
      <div className="absolute -bottom-4 -right-4 size-24 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none opacity-50" />
    </div>
  );
}

function TableRow({ student }: { student: any }) {
  return (
    <tr className="hover:bg-slate-50/80 transition-colors group">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-all">
            <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-slate-900 tracking-tight">{student.name}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mat: {student.mat}</span>
          </div>
        </div>
      </td>
      <td className="px-8 py-6 font-black text-slate-700 text-xs uppercase tracking-wider">
        {student.course}
        <br/>
        <span className="text-[10px] text-slate-400 font-bold tracking-widest mt-1 block">{student.campus}</span>
      </td>
      <td className="px-8 py-6">
        <span className="px-4 py-2 bg-blue-50 text-primary text-[10px] font-black rounded-xl uppercase tracking-widest border-2 border-blue-100 flex items-center gap-2 w-fit">
          <div className="size-1.5 rounded-full bg-primary shadow-sm" />
          {student.need}
        </span>
      </td>
      <td className="px-8 py-6 text-sm font-black text-slate-900 tracking-tighter">
        {student.cr.toFixed(2)}
        <span className="text-[8px] text-slate-400 ml-1 font-black">CR</span>
      </td>
      <td className="px-8 py-6 text-right">
        <span className={cn(
          "inline-flex items-center gap-2 px-4 py-2 text-[9px] font-black rounded-xl uppercase tracking-[0.2em] border-2",
          student.status === 'ATENDIDO' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
        )}>
          <span className={cn("w-2 h-2 rounded-full", student.status === 'ATENDIDO' ? "bg-emerald-500" : "bg-amber-500 shadow-sm")}></span>
          {student.status}
        </span>
      </td>
    </tr>
  );
}
