import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import UserMessage from './components/UserMessage'
import ArunMessage from './components/ArunMessage'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Recommendations from './sections/Recommendations'

const SECTIONS = ['about', 'experience', 'skills', 'education', 'recommendations', 'contact']

const CHAT_PAIRS = [
  {
    id: 'about',
    emoji: '👋',
    question: 'Who is Arun Pratap Singh?',
    intro: 'Hey there! Here\'s a quick overview of who I am and what I do:',
  },
  {
    id: 'experience',
    emoji: '💼',
    question: 'Walk me through your work experience',
    intro: 'I\'ve shipped products at <strong>3 startups</strong> over 5+ years, growing from UI Developer to Senior Fullstack Engineer. Here\'s my journey:',
  },
  {
    id: 'skills',
    emoji: '⚙️',
    question: 'What\'s your technical stack?',
    intro: 'I\'m comfortable across the full stack — from React/Next.js frontends to Java/Python backends. Here\'s a full breakdown:',
  },
  {
    id: 'education',
    emoji: '🎓',
    question: 'What\'s your educational background?',
    intro: 'I hold a B.Tech in Information Science Engineering with a strong academic record:',
  },
  {
    id: 'recommendations',
    emoji: '⭐',
    question: 'What do your colleagues say about you?',
    intro: 'Here\'s what people I\'ve worked with have said on LinkedIn:',
  },
  {
    id: 'contact',
    emoji: '📬',
    question: 'How can I get in touch with you?',
    intro: 'Always open to new opportunities and conversations! You can reach me through any of these:',
  },
]

const QUICK_CHIPS = [
  { id: 'about', label: '👋 About' },
  { id: 'experience', label: '💼 Experience' },
  { id: 'skills', label: '⚙️ Skills' },
  { id: 'education', label: '🎓 Education' },
  { id: 'recommendations', label: '⭐ Recommendations' },
  { id: 'contact', label: '📬 Contact' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [msgError, setMsgError] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const triggerError = () => {
    setMsgError(true)
    setTimeout(() => setMsgError(false), 2500)
  }

  const sendEmail = () => {
    if (!message.trim()) { triggerError(); return }
    const url = `mailto:218apsj@gmail.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(message.trim())}`
    window.open(url)
    setMessage('')
  }

  const sendWhatsApp = () => {
    if (!message.trim()) { triggerError(); return }
    const url = `https://wa.me/918318400720?text=${encodeURIComponent(message.trim())}`
    window.open(url, '_blank')
    setMessage('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendEmail() }
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    const container = scrollRef.current
    if (!el || !container) return
    const offset = el.offsetTop - 24
    container.scrollTo({ top: offset, behavior: 'smooth' })
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: container, rootMargin: '-20% 0px -70% 0px' }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="layout">
      <Sidebar
        activeSection={activeSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNav={scrollToSection}
      />

      {sidebarOpen && (
        <div className="overlay visible" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="main">
        {/* Chat Header */}
        <div className="chat-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: 'var(--text-muted)' }}>
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <span className="chat-header-title">Portfolio</span>
          <span className="chat-header-badge">Senior SWE · 5+ yrs</span>
          <div className="chat-header-actions">
            <a href="https://linkedin.com/in/arun-pratap-singh" target="_blank" rel="noopener noreferrer" className="header-icon-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/arunpratapsingh17" target="_blank" rel="noopener noreferrer" className="header-icon-btn" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-scroll" ref={scrollRef}>
          <div className="chat-content">
            {CHAT_PAIRS.map((pair, idx) => (
              <div key={pair.id} id={pair.id} className="chat-pair">
                <UserMessage emoji={pair.emoji}>{pair.question}</UserMessage>
                <ArunMessage intro={pair.intro}>
                  {pair.id === 'about' && <About />}
                  {pair.id === 'experience' && <Experience />}
                  {pair.id === 'skills' && <Skills />}
                  {pair.id === 'education' && <Education />}
                  {pair.id === 'recommendations' && <Recommendations />}
                  {pair.id === 'contact' && <Contact />}
                </ArunMessage>
                {idx < CHAT_PAIRS.length - 1 && <div className="section-divider" />}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Input Bar */}
        <div className="chat-input-area">
          <div className="chat-input-inner">
            <div className="quick-label">Quick navigate →</div>
            <div className="quick-chips">
              {QUICK_CHIPS.map((chip) => (
                <button key={chip.id} className="quick-chip" onClick={() => scrollToSection(chip.id)}>
                  {chip.label}
                </button>
              ))}
            </div>
            <div className={`input-box ${msgError ? 'input-error' : ''}`}>
              <input
                className="input-text"
                placeholder="Type a message — send via Email or WhatsApp…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="input-send-email" onClick={sendEmail} title="Send via Email (or press Enter)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </button>
              <button className="input-send-wa" onClick={sendWhatsApp} title="Send via WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>
            <div className={`input-hint ${msgError ? 'input-hint-error' : ''}`}>
              {msgError
                ? '⚠ Please type a message first'
                : <>↵ Enter sends via Email &nbsp;·&nbsp; <span style={{color:'#25D366'}}>●</span> button sends via WhatsApp</>}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
