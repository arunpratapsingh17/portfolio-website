import type { ReactNode } from 'react'

interface ArunMessageProps {
  intro: string
  children: ReactNode
}

export default function ArunMessage({ intro, children }: ArunMessageProps) {
  return (
    <div className="ai-message-wrap">
      <div className="ai-avatar">APS</div>
      <div className="ai-content">
        <div className="ai-name">Arun Pratap Singh</div>
        <p className="ai-intro" dangerouslySetInnerHTML={{ __html: intro }} />
        {children}
      </div>
    </div>
  )
}
