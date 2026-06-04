interface UserMessageProps {
  emoji: string
  children: string
}

export default function UserMessage({ emoji, children }: UserMessageProps) {
  return (
    <div className="user-message-wrap">
      <div className="user-bubble">
        <span className="user-bubble-emoji">{emoji}</span>
        {children}
      </div>
      <div className="user-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="8" r="4" />
          <path d="M20 21a8 8 0 10-16 0" />
        </svg>
      </div>
    </div>
  )
}
