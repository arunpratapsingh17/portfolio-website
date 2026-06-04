import { data } from '../data'

export default function Skills() {
  return (
    <div className="skills-list">
      {data.skillCategories.map((cat) => (
        <div key={cat.name} className="skill-category">
          <div className="skill-category-name">{cat.name}</div>
          <div className="skill-tags">
            {cat.skills.map((s) => (
              <span key={s.name} className={`skill-tag ${s.primary ? 'primary' : ''}`}>{s.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
