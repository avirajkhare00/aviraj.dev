// Portfolio data types with comprehensive TypeScript interfaces

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'discord' | 'youtube' | 'medium';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'maintenance';
  createdAt: string;
  updatedAt: string;
  category: 'web' | 'mobile' | 'api' | 'tool' | 'library' | 'other';
  stats?: {
    stars?: number;
    forks?: number;
    language?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // For internal blog posts
  externalUrl?: string; // For external blog posts
  publishedAt: string;
  readingTime: number; // in minutes
  tags: string[];
  featured: boolean;
  type: 'internal' | 'external';
  platform?: 'Medium' | 'Dev.to' | 'Personal Blog' | 'LinkedIn';
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // undefined means current
  description: string;
  technologies: string[];
  achievements?: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'languages';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
  resume?: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  availability: {
    status: 'available' | 'busy' | 'not-available';
    message?: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

// Component Props types
export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
