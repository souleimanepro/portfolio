import { useState } from 'react'
import { translations } from './data/content'

/* ── SVG Icons ── */
const Ic = ({ children, cls = "w-3.5 h-3.5" }) => (
  <svg className={`${cls} shrink-0`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{children}</svg>
)

const IcLocation   = () => <Ic cls="w-3 h-3 text-gray-400"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></Ic>
const IcPhone      = () => <Ic cls="w-3 h-3 text-gray-400"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.62 19a19.5 19.5 0 01-6-6A19.79 19.79 0 012.7 4.18 2 2 0 014.68 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></Ic>
const IcMail       = () => <Ic cls="w-3 h-3 text-gray-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></Ic>
const IcScreen     = () => <Ic cls="w-3 h-3 text-gray-400"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></Ic>
const IcCar        = () => <Ic cls="w-3 h-3 text-gray-400"><path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h14l4 4v4a2 2 0 01-2 2h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></Ic>
const IcDownload   = () => <Ic cls="w-3 h-3"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></Ic>
const IcArrow      = () => <Ic cls="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></Ic>
const IcArrowUp    = () => <Ic cls="w-3 h-3 text-emerald-600"><path d="M7 17L17 7M7 7h10v10"/></Ic>

/* Card section icons */
const IcProjects   = () => <Ic cls="w-4 h-4 text-gray-500"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></Ic>
const IcBriefcase  = () => <Ic cls="w-4 h-4 text-gray-500"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></Ic>
const IcDiploma    = () => <Ic cls="w-4 h-4 text-gray-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></Ic>
const IcServices   = () => <Ic cls="w-4 h-4 text-gray-500"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></Ic>

/* Service type icons */
const IcArchitecture = () => <Ic cls="w-4 h-4 text-gray-400"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></Ic>
const IcPipeline     = () => <Ic cls="w-4 h-4 text-gray-400"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></Ic>
const IcReporting    = () => <Ic cls="w-4 h-4 text-gray-400"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></Ic>
const IcConsulting   = () => <Ic cls="w-4 h-4 text-gray-400"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></Ic>

const IcLinkedIn = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const IcGitHub = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const serviceIconMap = {
  architecture: <IcArchitecture />,
  pipeline:     <IcPipeline />,
  reporting:    <IcReporting />,
  consulting:   <IcConsulting />,
}

/* ── Modal ── */
function Modal({ Icon, title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col shadow-2xl border border-gray-100"
        style={{ animation: 'slideUp 0.18s ease' }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
            <Icon />
          </div>
          <span className="font-bold text-gray-900 text-sm tracking-tight">{title}</span>
          <button onClick={onClose} className="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 text-[10px] transition-colors cursor-pointer">✕</button>
        </div>
        <div className="p-5 overflow-y-auto flex flex-col gap-4">{children}</div>
      </div>
    </div>
  )
}

/* ── Sidebar ── */
function Sidebar({ t }) {
  return (
    <aside className="w-[260px] shrink-0 bg-white border-r border-gray-100 flex flex-col overflow-hidden px-4 py-4 gap-3">

      {/* Identity */}
      <div className="flex items-center gap-2.5 shrink-0">
        <img src="/photo.jpg" alt="Souleimane Hadbi"
          className="w-11 h-11 rounded-full object-cover object-top border border-gray-200 shrink-0 grayscale" />
        <div>
          <div className="font-bold text-gray-900 text-[13px] leading-tight tracking-tight">Souleimane Hadbi</div>
          <div className="text-[9.5px] font-semibold text-gray-400 uppercase tracking-widest mt-0.5">{t.role}</div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-[10.5px] text-gray-600 leading-snug font-medium shrink-0 border-l-2 border-gray-200 pl-2.5 italic">
        {t.bio}
      </p>

      {/* CTA */}
      <div className="flex gap-2 shrink-0">
        <a href={`mailto:${t.email}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-gray-900 text-white text-[10.5px] font-semibold py-2 rounded-lg hover:bg-gray-700 transition-colors">
          <IcMail />{t.cta}
        </a>
        <a href={t.cvFile} download
          className="flex items-center justify-center gap-1.5 border border-gray-200 text-gray-500 text-[10.5px] font-semibold px-3 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors">
          <IcDownload />{t.downloadCv}
        </a>
      </div>

      <hr className="border-gray-100 shrink-0" />

      {/* Contact */}
      <div className="shrink-0">
        <div className="text-[8.5px] font-bold text-gray-300 uppercase tracking-[1.5px] mb-1.5">Contact</div>
        <div className="flex flex-col gap-1.5">
          {[
            { icon: <IcLocation />, text: t.location },
            { icon: <IcPhone />,   text: t.phone },
            { icon: <IcMail />,    text: <a href={`mailto:${t.email}`} className="hover:text-gray-800 transition-colors">{t.email}</a> },
            { icon: <IcScreen />,  text: t.availability },
            { icon: <IcCar />,     text: t.license },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[10.5px] text-gray-500">
              {item.icon}<span>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          <a href={t.linkedin} target="_blank" rel="noreferrer"
            className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 hover:text-blue-600 transition-colors">
            <IcLinkedIn />LinkedIn
          </a>
          <span className="text-gray-200 text-xs">|</span>
          <a href={t.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 hover:text-gray-900 transition-colors">
            <IcGitHub />GitHub
          </a>
        </div>
      </div>

      <hr className="border-gray-100 shrink-0" />

      {/* Freelance */}
      <div className="shrink-0">
        <div className="text-[8.5px] font-bold text-gray-300 uppercase tracking-[1.5px] mb-1.5">{t.freelance.title}</div>
        <div className="bg-gray-50 rounded-lg border border-gray-100 px-2.5 py-2 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[10.5px] text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-sm" />
            <span className="font-medium">{t.freelance.dispo}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10.5px]">
            <span className="text-gray-300 font-bold text-xs">€</span>
            <span className="font-bold text-gray-800 tracking-tight">{t.freelance.tjm}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10.5px] text-gray-500">
            <IcScreen />{t.freelance.mode}
          </div>
        </div>
      </div>

      <hr className="border-gray-100 shrink-0" />

      {/* Stack */}
      <div className="shrink-0">
        <div className="text-[8.5px] font-bold text-gray-300 uppercase tracking-[1.5px] mb-1.5">{t.stack.title}</div>
        <div className="flex flex-col gap-1.5">
          {t.stack.categories.map(cat => (
            <div key={cat.name}>
              <div className="text-[8px] font-bold text-gray-300 uppercase tracking-wider mb-1">{cat.name}</div>
              <div className="flex flex-wrap gap-1">
                {cat.items.map(item => (
                  <span key={item} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold border border-gray-200 tracking-tight">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </aside>
  )
}

/* ── Card shell ── */
function Card({ Icon, title, count, preview, cta, onClick }) {
  return (
    <div onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 overflow-hidden">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
          <Icon />
        </div>
        <span className="font-bold text-gray-900 text-sm tracking-tight">{title}</span>
        <span className="ml-auto text-[10px] font-bold text-gray-300 bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full tabular-nums">{count}</span>
      </div>
      <div className="flex-1 flex flex-col gap-3">{preview}</div>
      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-300 group-hover:text-gray-600 transition-colors mt-auto tracking-wide">
        {cta} <IcArrow />
      </div>
    </div>
  )
}

/* ── Projects ── */
function ProjectsCard({ t }) {
  const [open, setOpen] = useState(false)
  const allTags = [...new Set(t.projects.flatMap(p => p.tags))]

  return (
    <>
      <Card Icon={IcProjects} title={t.sections.projects} count={`0${t.projects.length}`}
        cta={t.preview.cta} onClick={() => setOpen(true)}
        preview={
          <>
            <div className="text-[42px] font-black text-gray-900 tracking-tight leading-none tabular-nums">
              {t.projects.length}<span className="text-xs font-medium text-gray-400 ml-2 tracking-normal">{t.preview.projects.stat}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {t.preview.projects.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-[11.5px] font-semibold text-gray-700">
                  <span className="w-4 h-px bg-gray-300 shrink-0" />{h}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map(tag => <span key={tag} className="text-[10.5px] px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold border border-gray-200">{tag}</span>)}
            </div>
          </>
        }
      />
      {open && (
        <Modal Icon={IcProjects} title={t.sections.projects} onClose={() => setOpen(false)}>
          {t.projects.map((p, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 flex flex-col gap-2.5 hover:border-gray-200 transition-colors">
              <div className="font-bold text-gray-900 text-sm tracking-tight">{p.title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{p.description}</div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-gray-800 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                <IcArrowUp />{p.impact}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-400 font-semibold border border-gray-200">{tag}</span>)}
              </div>
            </div>
          ))}
        </Modal>
      )}
    </>
  )
}

/* ── Experience ── */
function ExperienceCard({ t }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card Icon={IcBriefcase} title={t.sections.experience} count={`0${t.experience.length}`}
        cta={t.preview.cta} onClick={() => setOpen(true)}
        preview={
          <>
            <div className="text-[42px] font-black text-gray-900 tracking-tight leading-none tabular-nums">
              4<span className="text-xs font-medium text-gray-400 ml-2 tracking-normal">{t.preview.experience.stat}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {t.preview.experience.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-[11.5px] font-semibold text-gray-700">
                  <span className="w-4 h-px bg-gray-300 shrink-0" />{h}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Azure Databricks', 'Power BI', 'Python', 'SQL'].map(tag => (
                <span key={tag} className="text-[10.5px] px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold border border-gray-200">{tag}</span>
              ))}
            </div>
          </>
        }
      />
      {open && (
        <Modal Icon={IcBriefcase} title={t.sections.experience} onClose={() => setOpen(false)}>
          {t.experience.map((exp, i) => (
            <div key={i} className={`flex flex-col gap-2.5 ${i < t.experience.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="font-bold text-gray-900 text-sm tracking-tight">{exp.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">{exp.company} · {exp.location}</div>
                </div>
                <div className="text-[10.5px] text-gray-400 whitespace-nowrap shrink-0 font-semibold">{exp.period}</div>
              </div>
              <div className="flex flex-col gap-1">
                {exp.points.map((p, j) => (
                  <div key={j} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                    <span className="text-gray-300 shrink-0">–</span>{p}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.tools.map(tool => <span key={tool} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-bold border border-gray-200">{tool}</span>)}
              </div>
            </div>
          ))}
        </Modal>
      )}
    </>
  )
}

/* ── Education ── */
function EducationCard({ t }) {
  const [open, setOpen] = useState(false)
  const diplomas = t.education.filter(e => e.type === 'diploma')
  const certs    = t.education.filter(e => e.type === 'certification')

  return (
    <>
      <Card Icon={IcDiploma} title={t.sections.education} count={`0${t.education.length}`}
        cta={t.preview.cta} onClick={() => setOpen(true)}
        preview={
          <>
            <div className="flex items-baseline gap-5 leading-none">
              <div className="text-[42px] font-black text-gray-900 tracking-tight tabular-nums">
                {diplomas.length}<span className="text-xs font-medium text-gray-400 ml-1">{t.preview.education.statDiploma}</span>
              </div>
              <div className="text-[42px] font-black text-gray-900 tracking-tight tabular-nums">
                {certs.length}<span className="text-xs font-medium text-gray-400 ml-1">{t.preview.education.statCert}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {t.education.map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-[11.5px] font-semibold text-gray-700">
                  <span className="w-4 h-px bg-gray-300 shrink-0" />{e.title} · {e.school}
                </div>
              ))}
            </div>
          </>
        }
      />
      {open && (
        <Modal Icon={IcDiploma} title={t.sections.education} onClose={() => setOpen(false)}>
          {t.education.map((edu, i) => (
            <div key={i} className={`flex items-start gap-3 ${i < t.education.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
              <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                {edu.type === 'certification'
                  ? <Ic cls="w-4 h-4 text-gray-500"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></Ic>
                  : <Ic cls="w-4 h-4 text-gray-500"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></Ic>
                }
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm tracking-tight">{edu.title}</div>
                <div className="text-xs text-gray-500 mt-0.5 font-medium">{edu.school}</div>
                <div className="text-[10.5px] text-gray-400 mt-0.5">{edu.period}</div>
              </div>
            </div>
          ))}
        </Modal>
      )}
    </>
  )
}

/* ── Services ── */
function ServicesCard({ t }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card Icon={IcServices} title={t.sections.services} count={`0${t.services.length}`}
        cta={t.preview.cta} onClick={() => setOpen(true)}
        preview={
          <>
            <div className="text-[42px] font-black text-gray-900 tracking-tight leading-none tabular-nums">
              {t.services.length}<span className="text-xs font-medium text-gray-400 ml-2 tracking-normal">{t.preview.services.stat}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {t.services.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-[11.5px] font-semibold text-gray-700">
                  <span className="w-4 h-px bg-gray-300 shrink-0" />{s.title}
                </div>
              ))}
            </div>
          </>
        }
      />
      {open && (
        <Modal Icon={IcServices} title={t.sections.services} onClose={() => setOpen(false)}>
          {t.services.map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 flex flex-col gap-2.5 hover:border-gray-200 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  {serviceIconMap[s.type]}
                </div>
                <div className="font-bold text-gray-900 text-sm tracking-tight">{s.title}</div>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.description}</div>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(tag => <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-400 font-bold border border-gray-200">{tag}</span>)}
              </div>
            </div>
          ))}
        </Modal>
      )}
    </>
  )
}

/* ── App ── */
export default function App() {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]

  return (
    <div className="flex h-screen bg-[#f5f5f7] overflow-hidden">
      <Sidebar t={t} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-end px-4 py-2.5 border-b border-gray-100 bg-[#f5f5f7] shrink-0">
          <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="text-[10.5px] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 cursor-pointer">
            {t.lang}
          </button>
        </div>

        <main className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 p-3 overflow-hidden">
          <ProjectsCard t={t} />
          <ExperienceCard t={t} />
          <EducationCard t={t} />
          <ServicesCard t={t} />
        </main>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .flex.h-screen { flex-direction: column; height: auto; overflow: auto; }
          aside { width: 100% !important; }
          main  { grid-template-columns: 1fr 1fr !important; height: auto !important; overflow: visible !important; }
        }
        @media (max-width: 480px) {
          main { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
