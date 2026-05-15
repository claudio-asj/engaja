import React, { useMemo, useState } from 'react';
import {
  CalendarDays,
  Download,
  FileEdit,
  Filter,
  Plus,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Navbar } from '../components/layout/Navbar';
import { Modal } from '../components/ui/Modal';
import mockData from '../data/mockData.json';
import { cn } from '@/src/lib/utils';

const chartData = [
  { name: 'Sem 01', desempenho: 6.2, bemEstar: 7.0 },
  { name: 'Sem 02', desempenho: 6.8, bemEstar: 6.8 },
  { name: 'Sem 03', desempenho: 7.4, bemEstar: 8.2 },
  { name: 'Sem 04', desempenho: 7.8, bemEstar: 7.5 },
];

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pendingStudents = useMemo(
    () => mockData.students.filter((student) => student.status === 'PENDENTE'),
    [],
  );

  return (
    <>
      <Navbar title="Gestão de Inclusão Acadêmica" />
      <main className="app-main">
        <div className="page-stack">
          <section className="page-header">
            <div>
              <h1 className="page-title">Painel de controle</h1>
              <p className="page-subtitle">
                Uma visão central do programa de acompanhamento, com indicadores principais, prioridades de atendimento e evolução do semestre.
              </p>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="primary-button">
              <Plus className="size-4" />
              Novo registro
            </button>
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Inscritos ativos"
              value={mockData.stats.activeStudents.toLocaleString()}
              detail="Semestre atual"
              trend="+2,4%"
              icon={Users}
            />
            <StatCard
              label="Necessidades específicas"
              value={mockData.stats.pcdTotal}
              detail="Base DIRAC / SIGA"
              icon={ShieldCheck}
            />
            <StatCard
              label="Recursos ativos"
              value={mockData.stats.techAssistive}
              detail="Softwares e hardwares"
              icon={CalendarDays}
            />
            <StatCard
              label="Média CR"
              value={mockData.stats.avgCr}
              detail="Desempenho geral"
              icon={TrendingUp}
            />
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(340px,1fr)]">
            <div className="section-card p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-kicker">Indicadores semestrais</p>
                  <h2 className="section-title mt-1">Evolução acadêmica e bem-estar</h2>
                </div>
                <div className="flex gap-4 text-sm text-slate-500">
                  <LegendDot color="bg-primary" label="CR médio" />
                  <LegendDot color="bg-emerald-500" label="Bem-estar" />
                </div>
              </div>

              <div className="mt-6 h-[320px] sm:h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -24, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorDesempenho" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.18} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorBemEstar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.18} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: '18px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 18px 35px -28px rgba(15, 23, 42, 0.45)',
                      }}
                    />
                    <Area type="monotone" dataKey="desempenho" stroke="#2563eb" strokeWidth={2.5} fill="url(#colorDesempenho)" />
                    <Area type="monotone" dataKey="bemEstar" stroke="#10b981" strokeWidth={2.5} fill="url(#colorBemEstar)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="section-card p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <FileEdit className="size-5" />
                </div>
                <div>
                  <p className="section-kicker">Check-in rápido</p>
                  <h2 className="section-title mt-1">Registrar acompanhamento</h2>
                </div>
              </div>

              <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="section-kicker">Estudante</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                    <select className="control-input pl-11">
                      <option value="">Selecione...</option>
                      {mockData.students.map((student) => (
                        <option key={student.id} value={student.id}>
                          {student.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <label className="section-kicker">Percepção de autonomia</label>
                    <span className="text-sm font-medium text-slate-500">3/5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    defaultValue="3"
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-primary"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Muito dependente</span>
                    <span>Plena autonomia</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="section-kicker">Observações qualitativas</label>
                  <textarea
                    rows={5}
                    placeholder="Notas sobre a evolução do aluno, barreiras observadas e próximos passos..."
                    className="control-input min-h-[132px] resize-none"
                  />
                </div>

                <button className="primary-button w-full">Finalizar registro</button>
              </form>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)]">
            <div className="section-card overflow-hidden">
              <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
                <div>
                  <p className="section-kicker">Monitoramento ativo</p>
                  <h2 className="section-title mt-1">Prioridades de acompanhamento</h2>
                </div>
                <div className="flex gap-3">
                  <button className="ghost-button">
                    <Filter className="size-4" />
                    Filtrar
                  </button>
                  <button className="primary-button">
                    <Download className="size-4" />
                    Gerar PDF
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-50 text-sm text-slate-500">
                    <tr>
                      <th className="px-5 py-4 font-semibold sm:px-6">Estudante</th>
                      <th className="px-5 py-4 font-semibold sm:px-6">Curso e campus</th>
                      <th className="px-5 py-4 font-semibold sm:px-6">Perfil</th>
                      <th className="px-5 py-4 font-semibold sm:px-6">CR</th>
                      <th className="px-5 py-4 text-right font-semibold sm:px-6">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mockData.students.slice(0, 8).map((student) => (
                      <TableRow key={student.id} student={student} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="section-card-muted p-5 sm:p-6">
              <div>
                <p className="section-kicker">Fila de atenção</p>
                <h2 className="section-title mt-1">Casos que pedem retorno rápido</h2>
              </div>

              <div className="mt-5 space-y-3">
                {pendingStudents.map((student) => (
                  <div key={student.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{student.name}</p>
                        <p className="mt-1 text-xs text-slate-500">{student.course}</p>
                      </div>
                      <StatusPill status={student.status} />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                      <span className="rounded-full bg-slate-100 px-3 py-1">{student.need}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{student.campus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Novo registro de acompanhamento">
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="space-y-2">
            <label className="section-kicker">Tipo de atendimento</label>
            <select className="control-input">
              <option>Entrevista inicial</option>
              <option>Acompanhamento periódico</option>
              <option>Solicitação de recurso TA</option>
              <option>Avaliação de desempenho</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="section-kicker">Estudante</label>
            <select className="control-input">
              {mockData.students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.mat})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="section-kicker">Descrição</label>
            <textarea rows={4} className="control-input resize-none" placeholder="Detalhes do atendimento..." />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="ghost-button flex-1">
              Cancelar
            </button>
            <button type="submit" className="primary-button flex-1">
              Salvar registro
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  trend,
}: {
  label: string;
  value: string | number;
  detail: string;
  icon: any;
  trend?: string;
}) {
  return (
    <div className="section-card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="section-kicker">{label}</p>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{value}</p>
          <p className="mt-2 text-sm text-slate-500">
            {trend ? <span className="mr-2 font-semibold text-emerald-600">{trend}</span> : null}
            {detail}
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn('h-2.5 w-2.5 rounded-full', color)} />
      <span>{label}</span>
    </div>
  );
}

function TableRow({ student }: { key?: React.Key; student: any }) {
  return (
    <tr className="transition-colors hover:bg-slate-50/80">
      <td className="px-5 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <img src={student.avatar} alt={student.name} className="h-11 w-11 rounded-2xl border border-slate-200 object-cover" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">{student.name}</p>
            <p className="mt-1 text-xs text-slate-500">{student.mat}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-4 sm:px-6">
        <p className="text-sm font-medium text-slate-900">{student.course}</p>
        <p className="mt-1 text-xs text-slate-500">{student.campus}</p>
      </td>
      <td className="px-5 py-4 sm:px-6">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary">{student.need}</span>
      </td>
      <td className="px-5 py-4 sm:px-6 text-sm font-semibold text-slate-900">{student.cr.toFixed(2)}</td>
      <td className="px-5 py-4 text-right sm:px-6">
        <StatusPill status={student.status} />
      </td>
    </tr>
  );
}

function StatusPill({ status }: { status: string }) {
  const isPositive = status === 'ATENDIDO';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold',
        isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700',
      )}
    >
      <span className={cn('h-2 w-2 rounded-full', isPositive ? 'bg-emerald-500' : 'bg-amber-500')} />
      {status}
    </span>
  );
}
