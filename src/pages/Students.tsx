import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  CalendarDays,
  Eye,
  Filter,
  GraduationCap,
  Plus,
  Search,
  TrendingUp,
  UserPlus,
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Modal } from '../components/ui/Modal';
import mockData from '../data/mockData.json';
import { cn } from '@/src/lib/utils';

export function Students() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = useMemo(() => {
    const query = searchTerm.toLowerCase();

    return mockData.students.filter((student) => {
      return (
        student.name.toLowerCase().includes(query) ||
        student.mat.includes(searchTerm) ||
        student.course.toLowerCase().includes(query) ||
        student.need.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  return (
    <>
      <Navbar title="Estudantes Assistidos" />
      <main className="app-main">
        <div className="page-stack">
          <section className="page-header">
            <div>
              <h1 className="page-title">Gerenciamento de alunos</h1>
              <p className="page-subtitle">
                Visualize estudantes acompanhados, filtre por critérios relevantes e mantenha o histórico institucional mais organizado.
              </p>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="primary-button">
              <UserPlus className="size-4" />
              Cadastrar novo aluno
            </button>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="section-card p-5 sm:p-6">
              <label className="section-kicker mb-3 block">Pesquisa global</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome, matrícula, curso ou necessidade"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="control-input pl-11"
                />
              </div>
            </div>

            <FilterSelect
              label="Acessibilidade"
              options={['Todas as demandas', 'Visual', 'Auditiva', 'Motora', 'TEA']}
            />
            <FilterSelect
              label="Status"
              options={['Todos os status', 'Atendido', 'Pendente']}
            />
            <FilterSelect
              label="Campus"
              options={['Todos os campi', 'Campus Central', 'Campus Leste', 'Campus Norte', 'Campus Oeste', 'Campus Sul']}
            />
          </section>

          <section className="section-card overflow-hidden">
            <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
              <div>
                <p className="section-kicker">Base monitorada</p>
                <h2 className="section-title mt-1">Estudantes em acompanhamento</h2>
              </div>
              <p className="text-sm text-slate-500">
                Exibindo <span className="font-semibold text-slate-900">{filteredStudents.length}</span> de{' '}
                <span className="font-semibold text-slate-900">{mockData.stats.pcdTotal}</span> registros estimados.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[840px] text-left">
                <thead className="bg-slate-50 text-sm text-slate-500">
                  <tr>
                    <th className="px-5 py-4 font-semibold sm:px-6">Estudante</th>
                    <th className="px-5 py-4 font-semibold sm:px-6">Curso e campus</th>
                    <th className="px-5 py-4 font-semibold sm:px-6">Necessidade</th>
                    <th className="px-5 py-4 font-semibold sm:px-6">CR</th>
                    <th className="px-5 py-4 font-semibold sm:px-6">Status</th>
                    <th className="px-5 py-4 text-right font-semibold sm:px-6">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="align-top transition-colors hover:bg-slate-50/80">
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="h-12 w-12 rounded-2xl border border-slate-200 object-cover"
                          />
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
                        <NeedBadge need={student.need} />
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <span className="text-sm font-semibold text-slate-900">{student.cr.toFixed(2)}</span>
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <StatusBadge status={student.status} />
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex justify-end gap-2">
                          <ActionButton icon={Eye} label="Ver detalhes" />
                          <ActionButton icon={Filter} label="Editar filtros do aluno" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <FooterStat
              icon={TrendingUp}
              label="Inscritos ativos"
              value={mockData.stats.activeStudents.toLocaleString()}
              helper="Crescimento de 12% no semestre"
              tone="dark"
            />
            <FooterStat
              icon={CalendarDays}
              label="Entrevistas concluídas"
              value="24"
              helper="Cadência semanal estabilizada"
            />
            <FooterStat
              icon={AlertTriangle}
              label="Planos prioritários"
              value="15"
              helper="Demandam retorno em até 7 dias"
            />
            <FooterStat
              icon={GraduationCap}
              label="Egressos acompanhados"
              value="312"
              helper="Histórico acumulado do programa"
            />
          </section>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Cadastrar novo aluno">
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="space-y-2">
            <label className="section-kicker">Nome completo</label>
            <input type="text" className="control-input" placeholder="Ex: João da Silva" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="section-kicker">Matrícula</label>
              <input type="text" className="control-input" placeholder="2024.1.XXXX" />
            </div>

            <div className="space-y-2">
              <label className="section-kicker">Curso</label>
              <select className="control-input">
                <option>Psicologia</option>
                <option>Ciência da Computação</option>
                <option>Engenharia Civil</option>
                <option>Direito</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="section-kicker">Necessidade acadêmica principal</label>
            <select className="control-input">
              <option>Deficiência Visual (Baixa Visão/Cegueira)</option>
              <option>Deficiência Auditiva (Libras)</option>
              <option>Autismo (TEA)</option>
              <option>Mobilidade Reduzida</option>
              <option>Outros</option>
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="ghost-button flex-1">
              Cancelar
            </button>
            <button type="submit" className="primary-button flex-1">
              Criar cadastro
              <Plus className="size-4" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="section-card p-5 sm:p-6">
      <label className="section-kicker mb-3 block">{label}</label>
      <select className="control-input">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function NeedBadge({ need }: { need: string }) {
  return (
    <span className="inline-flex max-w-full rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary">
      {need}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isAttended = status === 'ATENDIDO' || status === 'Ativo';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold',
        isAttended ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700',
      )}
    >
      <span className={cn('h-2 w-2 rounded-full', isAttended ? 'bg-emerald-500' : 'bg-amber-500')} />
      {status}
    </span>
  );
}

function ActionButton({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition hover:border-primary/20 hover:text-primary"
      aria-label={label}
    >
      <Icon className="size-4" />
    </button>
  );
}

function FooterStat({
  icon: Icon,
  label,
  value,
  helper,
  tone,
}: {
  icon: any;
  label: string;
  value: string | number;
  helper: string;
  tone?: 'dark';
}) {
  return (
    <div className={cn('section-card p-5 sm:p-6', tone === 'dark' && 'border-slate-950 bg-slate-950 text-white')}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn('section-kicker', tone === 'dark' && 'text-slate-400')}>{label}</p>
          <p className={cn('mt-3 text-3xl font-extrabold tracking-tight', tone === 'dark' ? 'text-white' : 'text-slate-950')}>
            {value}
          </p>
          <p className={cn('mt-2 text-sm leading-6', tone === 'dark' ? 'text-slate-300' : 'text-slate-500')}>{helper}</p>
        </div>
        <div
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-2xl',
            tone === 'dark' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700',
          )}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}
