import { data } from '../data'

export default function Education() {
  const edu = data.education
  return (
    <div className="edu-card">
      <div>
        <div className="edu-degree">{edu.degree}</div>
        <div className="edu-school">{edu.school}</div>
        <div className="edu-location">{edu.location}</div>
      </div>
      <div className="edu-meta">
        <div className="edu-date">{edu.period}</div>
        <div className="edu-gpa">{edu.gpa}<sub>/10</sub></div>
        <div className="edu-gpa-label">GPA</div>
      </div>
    </div>
  )
}
