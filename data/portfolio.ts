import { PersonalInfo, Project, BlogPost, NavItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Aviraj Khare",
  title: "Product Engineer & DevOps Specialist",
  bio: "Product Engineer with expertise in Python, TypeScript, and DevOps. Former Gojek engineer, Web3 Foundation grant awardee, and multiple hackathon winner. I build scalable products from 0 to production, specialize in DevSecOps, and have deep experience in generative AI and blockchain technologies.",
  location: "India",
  email: "avirajkhare00@gmail.com",
  avatar: "/avatar.jpg",
  resume: "/avirajkhare00_resume_v8.7.4.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/avirajkhare00",
      icon: "github",
      platform: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/avirajkhare00",
      icon: "linkedin",
      platform: "linkedin"
    },
    {
      name: "Peerlist",
      url: "https://peerlist.io/avirajkhare00",
      icon: "website",
      platform: "website"
    },
    {
      name: "Email",
      url: "mailto:avirajkhare00@gmail.com",
      icon: "mail",
      platform: "email"
    }
  ],
  skills: [
    { name: "Python", category: "languages", level: "expert", yearsOfExperience: 6 },
    { name: "TypeScript", category: "languages", level: "expert", yearsOfExperience: 5 },
    { name: "Golang", category: "languages", level: "intermediate", yearsOfExperience: 2 },
    { name: "Ruby", category: "languages", level: "intermediate", yearsOfExperience: 2 },
    { name: "JavaScript", category: "languages", level: "advanced", yearsOfExperience: 5 },
    { name: "React", category: "frontend", level: "advanced", yearsOfExperience: 4 },
    { name: "Next.js", category: "frontend", level: "advanced", yearsOfExperience: 3 },
    { name: "Node.js", category: "backend", level: "advanced", yearsOfExperience: 4 },
    { name: "GCP", category: "cloud", level: "advanced", yearsOfExperience: 3 },
    { name: "AWS", category: "cloud", level: "intermediate", yearsOfExperience: 2 },
    { name: "Docker", category: "tools", level: "advanced", yearsOfExperience: 4 },
    { name: "Kubernetes", category: "tools", level: "advanced", yearsOfExperience: 3 },
    { name: "Terraform", category: "tools", level: "advanced", yearsOfExperience: 3 },
    { name: "PostgreSQL", category: "database", level: "advanced", yearsOfExperience: 4 },
    { name: "MongoDB", category: "database", level: "intermediate", yearsOfExperience: 3 }
  ],
  experience: [
    {
      id: "1",
      company: "Independent",
      position: "Product Engineer & Entrepreneur",
      startDate: "2025-01",
      description: "Building AI-powered products from 0 to production. Created GitMentor (top 10 on Peerlist), Domanzy, DramaJS, and various DevOps tools.",
      technologies: ["TypeScript", "Python", "OpenAI", "Next.js", "Terraform", "PostgreSQL"],
      achievements: [
        "GitMentor: AI GitHub profile analyzer - reached top 10 on Peerlist",
        "Built and deployed multiple products in 48-hour cycles",
        "Created open-source DevOps tools used by the community"
      ],
      location: "India",
      type: "full-time"
    },
    {
      id: "2",
      company: "Likeo",
      position: "Founding Engineer",
      startDate: "2025-01",
      endDate: "2025-01",
      description: "Built Likeo from scratch with interns. Developed Web and Telegram interfaces. Successfully acquired by KiranaPro.",
      technologies: ["TypeScript", "React", "Node.js", "Telegram Bot API"],
      achievements: [
        "Built entire product from 0 to acquisition",
        "Developed web and Telegram interfaces",
        "Successfully acquired by KiranaPro"
      ],
      location: "Remote",
      type: "full-time"
    },
    {
      id: "3",
      company: "Gojek",
      position: "Product Engineer",
      startDate: "2019-07",
      endDate: "2021-12",
      description: "Platform team engineer managing infrastructure for 900+ engineers. Worked on Apache Airflow, GitOps, visualization tools, and enterprise PaaS platform.",
      technologies: ["Python", "Terraform", "Kubernetes", "GCP", "Apache Airflow", "GitLab"],
      achievements: [
        "Owned Apache Airflow infrastructure for critical data pipelines",
        "Built infrastructure visualization using Vizceral for real-time monitoring",
        "Managed 300+ GitLab runners across cloud and on-prem",
        "Contributed to enterprise PaaS platform serving 900+ engineers",
        "Migrated services to event-driven microservices with Kafka"
      ],
      location: "Jakarta, Indonesia",
      type: "full-time"
    },
    {
      id: "4",
      company: "Web3 Foundation",
      position: "Grant Awardee",
      startDate: "2023-01",
      endDate: "2023-06",
      description: "Developed Ink Wizard CLI tool and Ink boxes for Polkadot ecosystem. Created developer tooling for smart contract scaffolding.",
      technologies: ["Rust", "Polkadot", "Smart Contracts", "CLI"],
      achievements: [
        "Received Web3 Foundation grant for developer tooling",
        "Created Ink Wizard CLI for smart contract scaffolding",
        "Built collection of helpful Ink smart contract boilerplates"
      ],
      location: "Remote",
      type: "contract"
    }
  ],
  availability: {
    status: "available",
    message: "Open to new opportunities and freelance projects"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "GitMentor",
    description: "AI-powered GitHub profile summary generator that reached top 10 on Peerlist. Built from 0 to production in 48 hours.",
    longDescription: "GitMentor analyzes GitHub profiles using AI to generate comprehensive summaries and insights. The product gained massive traction, reaching 1000+ profiles analyzed globally and becoming a top 10 product on Peerlist within days of launch.",
    technologies: ["TypeScript", "Next.js", "OpenAI", "GitHub API", "Railway"],
    githubUrl: "https://github.com/avirajkhare00/gitmentor",
    liveUrl: "https://gitmentor.io",
    featured: true,
    status: "completed",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-03",
    category: "web",
    stats: {
      stars: 150,
      forks: 25,
      language: "TypeScript"
    }
  },
  {
    id: "2",
    title: "Ink Wizard",
    description: "CLI tool for scaffolding Polkadot smart contracts. Web3 Foundation grant awardee project.",
    longDescription: "Ink Wizard is a command-line tool that scaffolds Flipper, PSP-22, PSP-34, PSP-37 smart contracts for the Polkadot ecosystem. Users can specify functionality requirements and the CLI generates appropriate smart contract boilerplates.",
    technologies: ["Rust", "CLI", "Polkadot", "Smart Contracts", "Ink!"],
    githubUrl: "https://github.com/avirajkhare00/ink-wizard",
    featured: true,
    status: "completed",
    createdAt: "2023-01-01",
    updatedAt: "2023-06-30",
    category: "tool",
    stats: {
      stars: 89,
      forks: 32,
      language: "Rust"
    }
  },
  {
    id: "3",
    title: "DramaJS",
    description: "JavaScript library to detect drama in text using sentiment analysis. NPM package for community use.",
    longDescription: "DramaJS is a lightweight JavaScript library that analyzes text content to detect dramatic or emotional language patterns. Perfect for content moderation, social media analysis, and community management tools.",
    technologies: ["JavaScript", "Node.js", "NPM", "Sentiment Analysis", "NLP"],
    githubUrl: "https://github.com/avirajkhare00/drama-js",
    featured: true,
    status: "completed",
    createdAt: "2024-11-01",
    updatedAt: "2024-12-15",
    category: "library",
    stats: {
      stars: 67,
      forks: 18,
      language: "JavaScript"
    }
  },
  {
    id: "4",
    title: "pg_setup",
    description: "PostgreSQL infrastructure setup using Terraform and Ansible for automated database deployment.",
    longDescription: "Complete infrastructure-as-code solution for PostgreSQL deployment. Combines Terraform for infrastructure provisioning and Ansible for configuration management, enabling one-click database setup with best practices.",
    technologies: ["Terraform", "Ansible", "PostgreSQL", "DevOps", "Infrastructure"],
    githubUrl: "https://github.com/avirajkhare00/pg_setup",
    featured: false,
    status: "completed",
    createdAt: "2024-10-01",
    updatedAt: "2024-11-20",
    category: "tool",
    stats: {
      stars: 45,
      forks: 12,
      language: "HCL"
    }
  },
  {
    id: "5",
    title: "Ink Boxes",
    description: "Collection of Polkadot smart contract boilerplates with frontend integration using polkadot.js.",
    longDescription: "Ink boxes provide ready-to-use smart contract templates for the Polkadot ecosystem. Each box includes both the smart contract code and a corresponding frontend application that demonstrates interaction with the deployed contract.",
    technologies: ["Rust", "JavaScript", "Polkadot.js", "Smart Contracts", "React"],
    githubUrl: "https://github.com/avirajkhare00/ink-boxes",
    featured: false,
    status: "completed",
    createdAt: "2023-02-01",
    updatedAt: "2023-06-30",
    category: "library",
    stats: {
      stars: 78,
      forks: 23,
      language: "Rust"
    }
  },
  {
    id: "6",
    title: "Domanzy",
    description: "AI-powered domain name and business idea generator with availability checking and pricing.",
    longDescription: "Domanzy helps entrepreneurs and developers find perfect domain names using AI. The tool generates creative domain suggestions, checks availability across multiple TLDs, and provides pricing information from various registrars.",
    technologies: ["TypeScript", "Next.js", "OpenAI", "Domain APIs", "React"],
    githubUrl: "https://github.com/avirajkhare00/domanzy",
    liveUrl: "https://domanzy.com",
    featured: true,
    status: "completed",
    createdAt: "2024-12-01",
    updatedAt: "2025-01-15",
    category: "web",
    stats: {
      stars: 34,
      forks: 8,
      language: "TypeScript"
    }
  },
  {
    id: "7",
    title: "Likeo",
    description: "Social platform with web and Telegram interfaces. Successfully acquired by KiranaPro.",
    longDescription: "Likeo was built from scratch as a social platform offering both web and Telegram bot interfaces. The product gained significant traction and was successfully acquired by KiranaPro for their Gen Z fashion app integration.",
    technologies: ["TypeScript", "React", "Node.js", "Telegram Bot API", "PostgreSQL"],
    githubUrl: "https://github.com/avirajkhare00/likeo",
    featured: true,
    status: "completed",
    createdAt: "2024-12-01",
    updatedAt: "2025-01-15",
    category: "web",
    stats: {
      stars: 56,
      forks: 14,
      language: "TypeScript"
    }
  },
  {
    id: "8",
    title: "Infrastructure Visualization Tools",
    description: "Real-time infrastructure monitoring and visualization tools built at Gojek using Vizceral and WebGL.",
    longDescription: "Created comprehensive infrastructure visualization system for Gojek's entire infrastructure using Vizceral. Built Grafana dashboards for GCP inventory tracking and developed real-time traffic monitoring solutions for 900+ engineers.",
    technologies: ["JavaScript", "WebGL", "Vizceral", "Grafana", "GCP", "Python"],
    githubUrl: "https://github.com/avirajkhare00/infra-viz",
    featured: false,
    status: "completed",
    createdAt: "2020-01-01",
    updatedAt: "2021-12-31",
    category: "tool",
    stats: {
      stars: 92,
      forks: 28,
      language: "JavaScript"
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "GitMentor | From 0 to Production in 3 Hours",
    excerpt: "The incredible 48-hour journey of building GitMentor, from idea conception to reaching top 10 on Peerlist. A story of rapid development, community feedback, and product-market fit.",
    externalUrl: "https://blog.srecraft.io/posts/gitmentor",
    publishedAt: "2025-02-05",
    readingTime: 8,
    tags: ["Startup", "Product Development", "AI", "GitHub"],
    featured: true,
    type: "external",
    platform: "Personal Blog",
    imageUrl: "/blog/gitmentor-journey.jpg"
  },
  {
    id: "2",
    title: "DevSecOps at Scale: Lessons from Gojek",
    excerpt: "How we managed infrastructure for 900+ engineers at Gojek. Insights into GitOps, Apache Airflow, and building enterprise PaaS platforms.",
    content: "# DevSecOps at Scale: Lessons from Gojek\n\nManaging infrastructure for 900+ engineers requires robust practices, automation, and the right tooling. Here's what I learned during my time at Gojek...",
    publishedAt: "2024-12-15",
    readingTime: 12,
    tags: ["DevOps", "Platform Engineering", "GitOps", "Scale"],
    featured: true,
    type: "internal",
    imageUrl: "/blog/devops-scale.jpg"
  },
  {
    id: "3",
    title: "Building Developer Tools for Web3: Ink Wizard Story",
    excerpt: "How I built developer tooling for the Polkadot ecosystem and received a Web3 Foundation grant. The journey from idea to community adoption.",
    content: "# Building Developer Tools for Web3: Ink Wizard Story\n\nWhen I started working on developer tooling for the Polkadot ecosystem, I didn't expect it would lead to a Web3 Foundation grant...",
    publishedAt: "2024-11-20",
    readingTime: 10,
    tags: ["Web3", "Polkadot", "Developer Tools", "Rust"],
    featured: false,
    type: "internal",
    imageUrl: "/blog/web3-dev-tools.jpg"
  },
  {
    id: "4",
    title: "Infrastructure as Code with Terraform and Ansible",
    excerpt: "Best practices for managing database infrastructure using Terraform and Ansible. Lessons learned from building pg_setup and other DevOps tools.",
    content: "# Infrastructure as Code with Terraform and Ansible\n\nAutomating infrastructure deployment is crucial for modern applications. Here's how I approach it with Terraform and Ansible...",
    publishedAt: "2024-10-30",
    readingTime: 15,
    tags: ["Infrastructure", "Terraform", "Ansible", "DevOps"],
    featured: false,
    type: "internal",
    imageUrl: "/blog/infrastructure-code.jpg"
  },
  {
    id: "5",
    title: "Winning Hackathons: A Systematic Approach",
    excerpt: "Insights from winning ETHIndia 2022, Google For Entrepreneurs 2018, and multiple other hackathons. Strategies, tools, and mindset for success.",
    content: "# Winning Hackathons: A Systematic Approach\n\nOver the years, I've won multiple hackathons including ETHIndia 2022 and Google For Entrepreneurs 2018. Here's my systematic approach...",
    publishedAt: "2024-09-15",
    readingTime: 8,
    tags: ["Hackathons", "Strategy", "Product Development", "Entrepreneurship"],
    featured: true,
    type: "internal",
    imageUrl: "/blog/hackathon-strategy.jpg"
  },
  {
    id: "6",
    title: "AI in Product Development: Building GitMentor and Domanzy",
    excerpt: "How I leverage OpenAI and other AI tools to build products faster. From GitHub analysis to domain generation, AI as a product development accelerator.",
    publishedAt: "2024-08-20",
    readingTime: 12,
    tags: ["AI", "Product Development", "OpenAI", "Automation"],
    featured: false,
    type: "internal",
    imageUrl: "/blog/ai-product-development.jpg"
  }
];

export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
];
