import React from 'react';
import {
  BarChart3,
  ChevronRight,
  Download,
  Layers,
  PieChart as PieChartIcon,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Navbar } from '../components/layout/Navbar';
import { cn } from '@/src/lib/utils';

const needsData = [
  { name: 'Visual', value: 85 },
  { name: 'Auditiva', value: 60 },
  { name: 'Motora', value: 45 },
  { name: 'Neurodiv.', value: 95 },
  { name: 'Outras', value: 30 },
];

const satisfactionData = [
  { name: 'Muito satisfeito', value: 65, color: '#1e3a8a' },
  { name: 'Satisfeito', value: 27, color: '#2563eb' },
  { name: 'Neutro/insatisfeito', value: 8, color: '#cbd5e1' },
];

const coursesRanking = [
  { course: 'Pedagogia', students: 142, accessibility: 95, impact: 9.8, status: 'Excelente' },
  { course: 'Arquitetura e Urbanismo', students: 88, accessibility: 88, impact: 9.2, status: 'Excelente' },
  { course: 'Ciência da Computação', students: 64, accessibility: 82, impact: 8.5, status: 'Acima da média' },
  { course: 'Medicina', students: 35, accessibility: 75, impact: 8.1, status: 'Acima da média' },
];

export function Reports() {
  return (
    <>
      <Navbar title="Relatórios de Impacto" />
      <main className="app-main">
        <div className="page-stack">
          <section className="page-header">
            <div>
              <h1 className="page-title">Inteligência estratégica</h1>
              <p className="page-subtitle">
                Leituras consolidadas de impacto, satisfação e distribuição das necessidades acompanhadas pelo programa.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <select className="control-input min-w-[220px]">
                <option>Semestre atual (2024.1)</option>
                <option>Ano de 2023</option>
                <option>Histórico geral</option>
              </select>
              <button className="primary-button">
                <Download className="size-4" />
                Exportar dashboard
              </button>
            </div>
          </section>

          <section className="section-card p-5 sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="section-kicker">Resumo executivo</p>
                <h2 className="section-title mt-1">Leitura rápida do semestre</h2>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
                  O semestre indica crescimento de 14% na retenção de estudantes assistidos. A política de materiais adaptados alcançou 88%
                  dos cursos de graduação e contribuiu para a melhora do desempenho médio. O próximo foco recomendado é ampliar suporte
                  psicopedagógico nas áreas de Ciências Exatas e reforçar respostas para demandas neurodivergentes.
                </p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.95fr)]">
            <div className="section-card p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">Distribuição de necessidades</p>
                  <h2 className="section-title mt-1">Volume por categoria</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <BarChart3 className="size-5" />
                </div>
              </div>

              <div className="mt-6 h-[320px] sm:h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={needsData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <Tooltip
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{
                        borderRadius: '18px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 18px 35px -28px rgba(15, 23, 42, 0.45)',
                      }}
                    />
                    <Bar dataKey="value" fill="var(--color-primary)" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="section-card p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">Eficácia geral</p>
                  <h2 className="section-title mt-1">Satisfação discente</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <PieChartIcon className="size-5" />
                </div>
              </div>

              <div className="relative mt-6 flex h-[300px] items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={92}
                      paddingAngle={4}
                      dataKey="value"
                      cornerRadius={8}
                    >
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: '18px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 18px 35px -28px rgba(15, 23, 42, 0.45)',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute text-center">
                  <p className="text-4xl font-extrabold tracking-tight text-slate-950">92%</p>
                  <p className="mt-1 text-sm text-slate-500">score consolidado</p>
                </div>
              </div>

              <div className="mt-2 space-y-3">
                {satisfactionData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-medium text-slate-700">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-card overflow-hidden">
            <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
              <div>
                <p className="section-kicker">Índice de inclusão acadêmica</p>
                <h2 className="section-title mt-1">Ranking por unidade</h2>
              </div>
              <button className="ghost-button px-3">
                Relatório geral
                <ChevronRight className="size-4" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-slate-50 text-sm text-slate-500">
                  <tr>
                    <th className="px-5 py-4 font-semibold sm:px-6">Curso</th>
                    <th className="px-5 py-4 text-center font-semibold sm:px-6">Inscritos</th>
                    <th className="px-5 py-4 font-semibold sm:px-6">Adaptabilidade</th>
                    <th className="px-5 py-4 text-center font-semibold sm:px-6">Impacto</th>
                    <th className="px-5 py-4 text-right font-semibold sm:px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {coursesRanking.map((row) => (
                    <tr key={row.course} className="transition-colors hover:bg-slate-50/80">
                      <td className="px-5 py-4 text-sm font-semibold text-slate-900 sm:px-6">{row.course}</td>
                      <td className="px-5 py-4 text-center text-sm text-slate-600 sm:px-6">{row.students}</td>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="max-w-[150px]">
                          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${row.accessibility}%` }} />
                          </div>
                          <p className="mt-2 text-xs text-slate-500">{row.accessibility}%</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center text-sm font-semibold text-slate-900 sm:px-6">
                        {row.impact.toFixed(1)}
                        <span className="ml-1 text-xs text-slate-500">/10</span>
                      </td>
                      <td className="px-5 py-4 text-right sm:px-6">
                        <span
                          className={cn(
                            'rounded-full px-3 py-1.5 text-xs font-semibold',
                            row.status === 'Excelente' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-primary',
                          )}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="flex flex-col justify-end gap-3 sm:flex-row">
            <button className="ghost-button">
              <TrendingUp className="size-4" />
              Configurar alertas
            </button>
            <button className="primary-button">
              <Layers className="size-4" />
              Compartilhar resultados
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
