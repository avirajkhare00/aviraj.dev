"use client";

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import type { SocialLink, Skill } from '@/types';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const getSocialIcon = (platform: SocialLink['platform']): React.ReactElement => {
    const iconClass = "w-5 h-5";

    switch (platform) {
      case 'github':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      case 'email':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
    }
  };

  const getSkillsByCategory = (category: Skill['category']): Skill[] => {
    return personalInfo.skills.filter(skill => skill.category === category);
  };

  const getAvailabilityColor = (): string => {
    switch (personalInfo.availability.status) {
      case 'available':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'busy':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'not-available':
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <section id="about" className={`min-h-screen flex items-center py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Availability Status */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor()}`}>
              <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
              {personalInfo.availability.status === 'available' && 'Available for new opportunities'}
              {personalInfo.availability.status === 'busy' && 'Currently busy'}
              {personalInfo.availability.status === 'not-available' && 'Not available'}
            </div>

            {/* Main Content */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
                Hi, I&apos;m{' '}
                <span className="text-primary">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-secondary mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Location & Contact */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </div>
              {personalInfo.availability.message && (
                <div className="text-secondary">
                  • {personalInfo.availability.message}
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {personalInfo.socialLinks.map((link: SocialLink) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.platform)}
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <Image src="/profile_pic_nov.jpg" alt="Avatar" width={256} height={256} className="rounded-full" />
            </div>

            {/* Featured Skills */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Featured Skills</h3>

              <div className="space-y-4">
                {['frontend', 'backend', 'languages'].map((category) => {
                  const categorySkills = getSkillsByCategory(category as Skill['category']);
                  if (categorySkills.length === 0) return null;

                  return (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-secondary capitalize mb-2">
                        {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Languages'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.slice(0, 4).map((skill: Skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {personalInfo.skills.filter(s => s.level === 'advanced' || s.level === 'expert').length}+
                </div>
                <div className="text-sm text-muted-foreground">Advanced Skills</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {Math.max(...personalInfo.skills.map(s => s.yearsOfExperience || 0))}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
