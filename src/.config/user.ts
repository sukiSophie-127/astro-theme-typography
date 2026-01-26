import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'sukiSophie的小站',
    subtitle: 'secret-base',
    author: 'sukiSophie',
    description: 'sharing feelings and thoughts',
    website: 'https://suki37.dpdns.org',
    socialLinks: [
      { name: 'github', href: 'https://github.com/sukiSophie' },
      { name: 'rss', href: '/atom.xml' },
    ],
    navLinks: [
      { name: 'Posts', href: '/' },
      { name: 'Archive', href: '/archive' },
      { name: 'Categories', href: '/categories' },
      { name: 'About', href: '/about' },
    ],
    categoryMap: [
      { name: '项目', path: 'proj' },
      { name: '技术', path: 'tech' },
      { name: '观点', path: 'view' },
      { name: '学习', path: 'learn' },
      { name: '生活', path: 'life' },
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
  },
  latex: {
    katex: true,
  },
  rss: {
    fullText: true,
  },
}
