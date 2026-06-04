import { data } from '../data'

export default function Experience() {
  return (
    <div className="exp-list">
      {data.experience.map((exp) => (
        <div key={exp.company} className="exp-card">
          <div className="exp-header">
            <div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
            </div>
            <div className="exp-meta">
              <div className="exp-date">{exp.period}</div>
              <div className="exp-location">{exp.location}</div>
            </div>
          </div>
          <div className="exp-stack">
            {exp.stack.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <ul className="exp-bullets">
            {exp.bullets.map((b, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
