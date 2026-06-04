import { data } from '../data'

export default function Recommendations() {
  return (
    <div className="rec-list">
      {data.recommendations.map((rec) => (
        <div key={rec.name} className="rec-card">
          <div className="rec-quote-mark">"</div>
          <p className="rec-text">{rec.text}</p>
          <div className="rec-footer">
            <div className="rec-avatar">
              {rec.avatar
                ? <img src={rec.avatar} alt={rec.name} />
                : rec.name.split(' ').map((n) => n[0]).join('').slice(0, 2)
              }
            </div>
            <div className="rec-info">
              <div className="rec-name">{rec.name}</div>
              <div className="rec-title">{rec.title}</div>
              <div className="rec-relation">{rec.relation} · {rec.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
