"use client";

import React from 'react';
import { blogPosts } from '@/data/portfolio';
import type { BlogPost, BlogCardProps } from '@/types';

interface BlogSectionProps {
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPlatformIcon = (platform?: string): React.ReactElement => {
    const iconClass = "w-4 h-4";

    switch (platform) {
      case 'Medium':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
        );
      case 'Dev.to':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45h.56c.42 0 .63-.05.83-.26.24-.24.26-.38.26-2.2 0-1.91-.02-1.96-.29-2.2zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
    }
  };

  return (
    <article className={`group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20 ${className}`}>
      {/* Image Placeholder */}
      {post.imageUrl && (
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          <div className="text-4xl text-muted-foreground">📝</div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {post.type === 'external' && post.platform && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {getPlatformIcon(post.platform)}
                <span>{post.platform}</span>
              </div>
            )}
            {post.featured && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                Featured
              </span>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            {post.readingTime} min read
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            {formatDate(post.publishedAt)}
          </div>

          <div className="flex gap-2">
            {post.type === 'internal' ? (
              <button className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Read More
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                Read on {post.platform}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogSection: React.FC<BlogSectionProps> = ({ className = '' }) => {
  const [filter, setFilter] = React.useState<'all' | 'internal' | 'external'>('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = React.useState<boolean>(false);

  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const typeMatch = filter === 'all' || post.type === filter;
    const featuredMatch = !showFeaturedOnly || post.featured;
    return typeMatch && featuredMatch;
  });

  const featuredPosts = blogPosts.filter((post: BlogPost) => post.featured);
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <section id="blog" className={`py-20 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Blog & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, technology, and my journey as a developer.
            Some content is hosted here, while others link to external platforms.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setFilter('internal')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'internal'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setFilter('external')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'external'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
            >
              External Articles
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
              />
              Featured only
            </label>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">{blogPosts.length}</div>
            <div className="text-sm text-muted-foreground">Total Posts</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">{featuredPosts.length}</div>
            <div className="text-sm text-muted-foreground">Featured</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">
              {blogPosts.reduce((sum, post) => sum + post.readingTime, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Reading Time (min)</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">{allTags.length}</div>
            <div className="text-sm text-muted-foreground">Topics Covered</div>
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && filter === 'all' && !showFeaturedOnly && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            {filter === 'all' ? 'All Articles' : filter === 'internal' ? 'Blog Posts' : 'External Articles'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-4">
              No articles found matching your criteria.
            </div>
            <button
              onClick={() => {
                setFilter('all');
                setShowFeaturedOnly(false);
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Popular Tags */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.slice(0, 10).map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-2 bg-background border border-border text-muted-foreground rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter/Subscribe Section */}
        <div className="mt-16 text-center bg-background border border-border rounded-xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get notified when I publish new articles and tutorials. No spam, just quality content about web development and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
