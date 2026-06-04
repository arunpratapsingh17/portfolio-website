export interface Skill {
  name: string
  primary?: boolean
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  stack: string[]
  bullets: string[]
}

export const data = {
  name: 'Arun Pratap Singh',
  title: 'Senior Software Engineer',
  subtitle: 'Fullstack & Systems',
  email: '218apsj@gmail.com',
  phone: '+91 83184 00720',
  linkedin: 'https://www.linkedin.com/in/arunpratapsingh17/',
  github: 'https://github.com/arunpratapsingh17',
  summary:
    'High-agency fullstack engineer with <strong>5+ years at startups</strong>, having shipped products across 3 companies including a revenue line generating <span class="highlight">~20% of company ARR</span>. Experienced in making architectural decisions across microservices, SSR infrastructure, and <strong>LLM-powered product features</strong> across React/Next.js frontends and Java/Python backends. Comfortable owning system design end-to-end covering schema design, API contracts, third-party integrations, and production reliability at scale.',
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '3', label: 'Startups' },
    { value: '~20%', label: 'ARR Contribution' },
    { value: '99%', label: 'Crash-Free Sessions' },
  ],
  experience: [
    {
      company: 'ETMoney',
      role: 'Senior Software Engineer (Full Stack)',
      period: 'Jan 2023 – Present',
      location: 'Gurugram, India',
      stack: ['ReactJS', 'Next.js 14', 'TypeScript', 'Svelte', 'Java', 'Python / FastAPI', 'Redis', 'OpenAI'],
      bullets: [
        'Built and maintained the <strong>Health & Term Insurance engine</strong> end-to-end from scratch using Java, MySQL & Redis core and high-performance Svelte views, directly driving <span class="highlight">~20% of total company ARR</span>.',
        'Built a plug-and-play <strong>AI chat assistant</strong> as a decoupled micro-frontend integrated via Module Federation, backed by Python/FastAPI and OpenAI APIs, autonomously resolving <span class="highlight">~90% of real-time transaction queries</span>.',
        'Built a high-throughput ReactJS dashboard using <strong>raw Canvas APIs</strong> to render dense multi-asset portfolio records across <span class="highlight">~10K+ accounts</span>, bypassing third-party charting libraries for consistent frame rates.',
        'Led <strong>SSR migration</strong> from legacy JSP monolith to Next.js 14, implementing SSR vs SSG per route with Server Components and server-side caching — halving page weights and measurably improving Core Web Vitals & SEO.',
        'Debugged and resolved <strong>50 business-critical production vulnerabilities</strong> across the KYC/CKYC compliance engine via Sentry, lifting crash-free sessions from <span class="highlight">97% → 99%</span>.',
        'Slashed active open security alerts from <span class="highlight">300 to single digits</span> by enforcing dependency governance and NPM security policies without disrupting production releases.',
      ],
    },
    {
      company: 'Unolo',
      role: 'Frontend Developer',
      period: 'Mar 2022 – Dec 2022',
      location: 'Gurugram, India',
      stack: ['ReactJS', 'Next.js 13', 'TypeScript', 'GraphQL', 'Socket.io', 'Sass'],
      bullets: [
        'Designed and built the core <strong>enterprise Admin Panel</strong> from scratch on Next.js 13 using ReactJS, Redux, and Sass-based design tokens with modular architecture and custom React hooks.',
        'Shipped high-throughput operational dashboards with <strong>real-time Google Maps</strong> and Chart.js, providing instant fleet-wide visibility into expense tracking and task management across thousands of field agents.',
        'Architected the <strong>Sales & Targets module</strong> by integrating real-time chat via Socket.io and background geolocation tracking with a scalable event-driven pattern for synchronous field executive monitoring.',
      ],
    },
    {
      company: 'Divami',
      role: 'UI Developer',
      period: 'Sep 2021 – Feb 2022',
      location: 'Remote, India',
      stack: ['ReactJS', 'AngularJS', 'AWS Amplify', 'AWS Chime', 'Web Workers'],
      bullets: [
        "Sole Frontend Engineer for Rightdata's enterprise <strong>Dextrus suite</strong>; used Web Workers to offload heavy data pipelines off the main thread, building low-latency real-time client UI with minimised render bottlenecks.",
        'Engineered scalable client communication layouts using <strong>AWS Chime and AWS Amplify</strong>, unifying multi-client synchronised live cohort data streams for a global EdTech application.',
      ],
    },
  ] as ExperienceItem[],
  skillCategories: [
    {
      name: 'Frontend',
      skills: [
        { name: 'ReactJS', primary: true },
        { name: 'Next.js', primary: true },
        { name: 'TypeScript', primary: true },
        { name: 'JavaScript' },
        { name: 'Svelte' },
        { name: 'React Native' },
        { name: 'GraphQL' },
        { name: 'Redux Toolkit' },
        { name: 'Webpack' },
        { name: 'Vite' },
        { name: 'Tailwind CSS' },
        { name: 'Sass' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Java', primary: true },
        { name: 'Python', primary: true },
        { name: 'Node.js' },
        { name: 'FastAPI' },
        { name: 'Spring Boot' },
        { name: 'Microservices' },
        { name: 'REST APIs' },
        { name: 'Gradle' },
      ],
    },
    {
      name: 'Databases & Infrastructure',
      skills: [
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'Redis' },
        { name: 'SQL' },
        { name: 'AWS' },
        { name: 'HashiCorp Vault' },
        { name: 'CI/CD' },
      ],
    },
    {
      name: 'System Design & Architecture',
      skills: [
        { name: 'Microservices', primary: true },
        { name: 'SSR / SSG Strategies', primary: true },
        { name: 'LLM Integration Patterns' },
        { name: 'API Contract Design' },
        { name: 'Module Federation' },
        { name: 'Micro-frontends' },
      ],
    },
    {
      name: 'Testing & Tooling',
      skills: [
        { name: 'Vitest' },
        { name: 'Jest' },
        { name: 'JUnit' },
        { name: 'Postman' },
        { name: 'Sentry' },
        { name: 'Git' },
        { name: 'Claude Code' },
        { name: 'Cursor' },
        { name: 'GitHub Copilot' },
      ],
    },
  ] as SkillCategory[],
  education: {
    degree: 'B.Tech. Information Science Engineering',
    school: 'NMIT — Nitte Meenakshi Institute of Technology',
    location: 'Bengaluru, India',
    period: 'Aug 2017 – 2021',
    gpa: '8.5',
  },
  recommendations: [
    {
      name: 'Deepak Kathuria',
      title: 'Technical Lead at ET Money',
      relation: 'Managed Arun Pratap directly',
      date: 'May 2026',
      avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQHmymShty5GNA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516564183685?e=1782345600&v=beta&t=Gn_bfotBHoUydHAnqw424TgPT-6GBvUjCE084DUsC9I',
      text: 'I had the pleasure of managing Arun Pratap and watching him evolve into an incredibly versatile and impactful engineer. He initially joined the team focusing on frontend development, but what sets him apart is his exceptional adaptability. Recognizing a team need, he quickly stepped up and seamlessly transitioned into delivering high-quality backend work as a true full-stack engineer. Beyond his core development skills, he is highly proactive and constantly looks for ways to optimize workflows. He brilliantly leveraged AI-assisted development tools like Cursor to accelerate our delivery and elevate code quality. Outside of his technical prowess, his discipline carries over into his passion for fitness and health tech, bringing a high-energy, focused mindset to the team every day. He is a fast learner, a natural problem solver, and an asset to any engineering team. I highly recommend him!',
    },
    {
      name: 'Satish Tejankar',
      title: 'VP - Sales & Partnerships | Fintech Business Leader',
      relation: 'Senior to Arun Pratap at ET Money',
      date: 'May 2026',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHa-9R9zfhm-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1707157729794?e=1782345600&v=beta&t=hlD-Z8HI0yZ52Eh-ntpOqdhruOitiP5q5oV7ehU-4oo',
      text: 'I had the opportunity to work with Arun on Insurance Term and Health products, where he handled both frontend and backend development responsibilities. He was proactive, quick to take ownership, and consistently asked the right questions to understand business requirements thoroughly and deliver effectively. His ability to work across the stack and collaborate closely with business teams made him a valuable contributor to the team. I would gladly recommend him for full-stack development roles.',
    },
  ],
}
