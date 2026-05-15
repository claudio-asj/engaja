import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Clock,
  Download,
  FileText,
  FolderOpen,
  Info,
  Languages,
  Laptop,
  PlusCircle,
  Star,
  Zap,
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Modal } from '../components/ui/Modal';
import mockData from '../data/mockData.json';
import { cn } from '@/src/lib/utils';

const tags = ['Todas', 'Acadêmica', 'Infraestrutura', 'Tecnologia Assistiva', 'Financeira'];

export function Policies() {
  const [filter, setFilter] = useState('Todas');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPolicies = useMemo(() => {
    if (filter === 'Todas') {
      return mockData.policies;
    }

    return mockData.policies.filter((policy) => policy.category === filter);
  }, [filter]);

  const icons: Record<string, any> = {
    'Isenção de Material': BookMarked,
    'Intérprete de Libras': Languages,
    'Tempo Adicional': Clock,
    'Notebooks Emprestados': Laptop,
  };

  return (
    <>
      <Navbar title="Políticas e Iniciativas" />
      <main className="app-main">
        <div className="page-stack">
          <section className="page-header">
            <div>
              <h1 className="page-title">Estratégias de inclusão</h1>
              <p className="page-subtitle">
                Organize políticas, benefícios e ações de permanência com uma interface mais clara para leitura, comparação e priorização.
              </p>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="primary-button">
              <PlusCircle className="size-4" />
              Criar nova política
            </button>
          </section>

          <section className="section-card p-4 sm:p-5">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition',
                    filter === tag ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.95fr)]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredPolicies.map((policy) => (
                <PolicyCard
                  key={policy.id}
                  title={policy.title}
                  desc={policy.desc}
                  category={policy.category}
                  icon={icons[policy.title] || Zap}
                  count={policy.beneficiaries}
                  status={policy.status}
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_28px_60px_-34px_rgba(15,23,42,0.85)] sm:p-7">
                <div className="flex items-center gap-2 text-primary">
                  <Star className="size-4 fill-current" />
                  <span className="section-kicker text-blue-200">Destaque do semestre</span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Programa de monitoria inclusiva</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Estudantes veteranos atuam como mentores para ingressantes com deficiência, com foco em integração acadêmica,
                  circulação no campus e adaptação ao ritmo universitário.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="h-11 w-11 overflow-hidden rounded-2xl border-2 border-slate-950 bg-slate-800">
                        <img src={`https://randomuser.me/api/portraits/lego/${index}.jpg`} alt="Monitor" />
                      </div>
                    ))}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-slate-950 bg-primary/20 text-xs font-semibold text-primary">
                      +12
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold">45</p>
                    <p className="text-sm text-slate-400">Monitores ativos</p>
                  </div>
                </div>

                <button className="primary-button mt-6 w-full">Gerenciar programa</button>
              </div>

              <div className="section-card p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <FolderOpen className="size-5" />
                    </div>
                    <div>
                      <p className="section-kicker">Base de conhecimento</p>
                      <h2 className="section-title mt-1">Documentos e editais</h2>
                    </div>
                  </div>
                  <button className="ghost-button px-3">
                    Ver todos
                    <ArrowRight className="size-4" />
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  <DocItem title="Regulamento de Acessibilidade 2024.pdf" size="2.4 MB" />
                  <DocItem title="Edital_Monitoria_MAPA_v1.pdf" size="1.1 MB" />
                  <DocItem title="Guia_Tecnologia_Assistiva.pdf" size="4.8 MB" />
                  <DocItem title="Formulario_Solicitacao_Material.pdf" size="840 KB" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Criar nova política de inclusão">
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="space-y-2">
            <label className="section-kicker">Título da política</label>
            <input type="text" className="control-input" placeholder="Ex: Auxílio Órtese" />
          </div>

          <div className="space-y-2">
            <label className="section-kicker">Categoria principal</label>
            <select className="control-input">
              <option>Acadêmica</option>
              <option>Infraestrutura</option>
              <option>Tecnologia Assistiva</option>
              <option>Financeira</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="section-kicker">Descrição do benefício</label>
            <textarea
              rows={4}
              className="control-input resize-none"
              placeholder="Descreva os critérios de elegibilidade e o benefício ofertado..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="ghost-button flex-1">
              Cancelar
            </button>
            <button type="submit" className="primary-button flex-1">
              Publicar política
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function PolicyCard({
  title,
  desc,
  category,
  icon: Icon,
  count,
  status,
}: {
  key?: React.Key;
  title: string;
  desc: string;
  category: string;
  icon: any;
  count: number;
  status: string;
}) {
  const isWarning = status === 'Revisão';

  return (
    <div className="section-card flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-2xl',
            isWarning ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-primary',
          )}
        >
          <Icon className="size-5" />
        </div>
        <span
          className={cn(
            'rounded-full px-3 py-1.5 text-xs font-semibold',
            isWarning ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700',
          )}
        >
          {status}
        </span>
      </div>

      <div className="mt-5">
        <p className="section-kicker">{category}</p>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div>
          <p className="section-kicker">Beneficiados</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">{count}</p>
        </div>
        <button className="ghost-button h-11 w-11 rounded-2xl px-0" aria-label={`Mais informações sobre ${title}`}>
          <Info className="size-4" />
        </button>
      </div>
    </div>
  );
}

function DocItem({ title, size }: { title: string; size: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-500">
        <FileText className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{size} · PDF</p>
      </div>
      <button className="ghost-button h-10 w-10 rounded-2xl px-0" aria-label={`Baixar ${title}`}>
        <Download className="size-4" />
      </button>
    </div>
  );
}
