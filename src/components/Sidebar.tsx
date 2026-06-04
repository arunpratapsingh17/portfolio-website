import { data } from '../data'

interface SidebarProps {
  activeSection: string
  isOpen: boolean
  onClose: () => void
  onNav: (id: string) => void
}

const conversations = [
  { id: 'about',      label: 'About Me',           time: 'Now' },
  { id: 'experience', label: 'Work Experience',     time: 'Now' },
  { id: 'skills',     label: 'Technical Skills',    time: 'Now' },
  { id: 'education',  label: 'Education',           time: 'Now' },
  { id: 'contact',    label: 'Contact & Socials',   time: 'Now' },
]

export default function Sidebar({ activeSection, isOpen, onClose, onNav }: SidebarProps) {
  const handleNav = (id: string) => {
    onNav(id)
    onClose()
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-top">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNav('about') }}>
          <div className="logo-icon">APS</div>
          <div className="logo-info">
            <span className="logo-name">Arun Pratap Singh</span>
            <span className="logo-role">Senior Software Engineer</span>
          </div>
        </a>
        <a href={`mailto:${data.email}`} className="new-chat-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M12 5v14M5 12h14" />
          </svg>
          Start a Conversation
        </a>
      </div>

      <div className="sidebar-nav">
        <div className="nav-group-label">Portfolio</div>
        {conversations.map((conv) => (
          <button
            key={conv.id}
            className={`nav-conversation ${activeSection === conv.id ? 'active' : ''}`}
            onClick={() => handleNav(conv.id)}
          >
            <span className="conv-dot" />
            <span className="conv-label">{conv.label}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-profile">
          <div className="profile-avatar">APS</div>
          <div className="profile-info">
            <span className="profile-name">Arun Pratap Singh</span>
            <span className="profile-status">
              <span className="status-dot" />
              Open to work
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
