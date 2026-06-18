import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: '微云君的博客',
    subtitle: 'WEIYUNJUN\'S BLOG',
    author: 'weiyunjun',
    website: 'https://weiyunjun.com/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/weiyunjun',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'x',
        href: 'https://x.com/weiyunjun',
        icon: 'i-simple-icons-x',
        iconSize: '16px',
      },
      {
        name: 'bilibili',
        href: 'https://space.bilibili.com/3546707295996650',
        icon: 'i-simple-icons-bilibili',
        iconSize: '16px',
      },
    ],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> · Published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  seo: { twitter: '@weiyunjun' },
}
