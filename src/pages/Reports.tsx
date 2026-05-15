import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { 
  BarChart3, 
  Download, 
  Sparkles, 
  PieChart as PieChartIcon, 
  TrendingUp,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { cn } from '@/src/lib/utils';

const needsData = [
  { name: 'Visual', value: 85 },
  { name: 'Auditiva', value: 60 },
  { name: 'Motora', value: 45 },
  { name: 'Neurodiv.', value: 95 },
  { name: 'Outras', value: 30 },
];

const satisfactionData = [
  { name: 'Muito Satisfeito', value: 65, color: '#1e3a8a' },
  { name: 'Satisfeito', value: 27, color: '#00236f' },
  { name: 'Neutro/Insatisfeito', value: 8, color: '#dce1ff' },
];

const coursesRanking = [
  { course: "Pedagogia", students: 142, accessibility: 95, impact: 9.8, status: "EXCELENTE" },
  { course: "Arquitetura e Urbanismo", students: 88, accessibility: 88, impact: 9.2, status: "EXCELENTE" },
  { course: "Ciência da Computação", students: 64, accessibility: 82, impact: 8.5, status: "ACIMA DA MÉDIA" },
  { course: "Medicina", students: 35, accessibility: 75, impact: 8.1, status: "ACIMA DA MÉDIA" },
];

export function Reports() {
  return (
    <>
      <Navbar title="Relatórios de Impacto" />
      <main className="p-8 space-y-8 animate-in fade-in duration-500 overflow-y-auto flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Inteligência Estratégica</h1>
            <p className="text-slate-500 mt-2 text-sm">Análise de métricas de acessibilidade e impacto institucional.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <select className="bg-transparent border-none font-bold text-xs text-slate-600 focus:ring-0 cursor-pointer appearance-none px-4">
              <option>Semestre Atual (2024.1)</option>
              <option>Ano de 2023</option>
              <option>Histórico Geral</option>
            </select>
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all">
              <Download className="size-4" />
              Exportar Dashboard
            </button>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-8 relative overflow-hidden group">
          <div className="size-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shrink-0 border-2 border-blue-100 shadow-sm z-10 transition-transform group-hover:rotate-6">
            <Sparkles className="size-8 fill-current" />
          </div>
          <div className="space-y-3 z-10">
            <h3 className="font-black text-xl text-slate-900 tracking-tight">Resumo Executivo do Semestre</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl font-medium">
              O progresso deste semestre indica um aumento de <span className="text-emerald-600 font-black">14% na taxa de retenção</span> de estudantes assistidos pelo MAPA. A implementação da política de materiais didáticos adaptados atingiu 88% dos cursos de graduação, resultando em uma melhoria perceptível no desempenho acadêmico médio. Recomenda-se focar a próxima fase na expansão do suporte psicopedagógico para as áreas de Ciências Exatas.
            </p>
          </div>
          <div className="absolute top-0 right-0 p-8 text-primary/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-700">
             <TrendingUp className="size-48" />
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col h-[450px]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-black text-lg text-slate-900 tracking-tight">Distribuição de Necessidades</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Volume de Estudantes por Categoria</p>
              </div>
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-400">
                <BarChart3 className="size-5" />
              </div>
            </div>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={needsData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <XAxis 
                    dataKey="name" 
                    fontSize={10} 
                    fontWeight="900" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8' }}
                  />
                  <YAxis 
                    fontSize={10} 
                    fontWeight="900" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8' }}
                  />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9', radius: 10}} 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px 16px' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="value" fill="var(--color-primary)" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col h-[450px]">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h3 className="font-black text-lg text-slate-900 tracking-tight">Eficácia Geral</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Pesquisa de Satisfação Discente</p>
               </div>
               <div className="p-2.5 bg-slate-100 rounded-xl text-slate-400">
                <PieChartIcon className="size-5" />
               </div>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center relative">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="45%"
                      innerRadius={75}
                      outerRadius={95}
                      paddingAngle={8}
                      dataKey="value"
                      cornerRadius={10}
                    >
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
               </ResponsiveContainer>
               <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">92%</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Score</p>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-2.5 mt-auto">
              {satisfactionData.map(item => (
                <div key={item.name} className="flex justify-between items-center p-3 bg-slate-50 rounded-2xl border border-slate-100 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <span className="size-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></span>
                    <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider">{item.name}</span>
                  </div>
                  <span className="text-xs font-black text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ranking Table */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="font-black text-xl text-slate-900 tracking-tight leading-none">Índice de Inclusão Acadêmica</h3>
              <p className="text-[10px] font-bold text-slate-400 capitalize tracking-widest mt-2 px-1">Ranking de Conformidade por Unidade Acadêmica</p>
            </div>
            <button className="text-primary font-black text-xs hover:gap-3 transition-all flex items-center gap-2 uppercase tracking-widest">
              Relatório Geral
              <ChevronRight className="size-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-8 py-5">Unidade Acadêmica / Curso</th>
                  <th className="px-8 py-5 text-center">Inscritos</th>
                  <th className="px-8 py-5">Adaptabilidade Geral</th>
                  <th className="px-8 py-5 text-center">Performance</th>
                  <th className="px-8 py-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {coursesRanking.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-8 py-6 font-black text-slate-900 text-sm">{row.course}</td>
                    <td className="px-8 py-6 text-center text-sm font-bold text-slate-500">{row.students}</td>
                    <td className="px-8 py-6">
                      <div className="w-full max-w-[120px] h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 shadow-sm" 
                          style={{ width: `${row.accessibility}%` }} 
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 mt-1 block px-1">{row.accessibility}%</span>
                    </td>
                    <td className="px-8 py-6 text-center text-primary font-black text-lg tracking-tighter">{row.impact.toFixed(1)}<span className="text-[10px] text-slate-400 ml-0.5">/10</span></td>
                    <td className="px-8 py-6 text-right">
                      <span className={cn(
                        "text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest border-2",
                        row.status === "EXCELENTE" 
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                          : "bg-blue-50 text-primary border-blue-100"
                      )}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex justify-end gap-4 pb-12">
          <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-widest rounded-2xl hover:border-primary/20 hover:bg-slate-50 transition-all shadow-sm">
            Configurar Alertas
          </button>
          <button className="px-8 py-4 bg-primary text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all flex items-center gap-3">
             <Layers className="size-4" />
            Compartilhar Resultados
          </button>
        </div>
      </main>
    </>
  );
}
