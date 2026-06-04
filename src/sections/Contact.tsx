import { useState } from 'react'
import { data } from '../data'

const contacts = [
  {
    label: 'Email',
    value: data.email,
    copyValue: data.email,
    href: `mailto:${data.email}`,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: 'Phone',
    value: data.phone,
    copyValue: data.phone,
    href: `tel:${data.phone.replace(/\s/g, '')}`,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>,
  },
  {
    label: 'LinkedIn',
    value: 'arun-pratap-singh',
    copyValue: data.linkedin,
    href: data.linkedin,
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'GitHub',
    value: 'arunpratapsingh17',
    copyValue: data.github,
    href: data.github,
    external: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>,
  },
]

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (e: React.MouseEvent, label: string, value: string) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(value)
    setCopiedKey(label)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <div className="contact-grid">
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          className="contact-card"
          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <div className="contact-icon">{c.icon}</div>
          <div className="contact-text">
            <div className="contact-label">{c.label}</div>
            <div className="contact-value">{c.value}</div>
          </div>
          <button
            className={`copy-btn ${copiedKey === c.label ? 'copied' : ''}`}
            onClick={(e) => handleCopy(e, c.label, c.copyValue)}
            title={copiedKey === c.label ? 'Copied!' : 'Copy to clipboard'}
          >
            {copiedKey === c.label ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            )}
          </button>
        </a>
      ))}
    </div>
  )
}
