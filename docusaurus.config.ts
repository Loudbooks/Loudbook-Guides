import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Loudbook\'s Guides',
  tagline: 'Yeah. I know. MinecraftHopper exists. I get it.',
  favicon: 'img/icon.svg',

  url: 'https://mcd.loudbook.dev',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Loudbook', // Usually your GitHub org/user name.
  projectName: 'mcguides', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Loudbook\'s Guides',
      logo: {
        alt: 'Loudbook\'s Guides',
        src: 'img/icon.svg',
      },
      items: [
      ],
    },

    colorMode: {
      defaultMode: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sources',
          items: [
            {
              label: 'MinecraftHopper',
              href: 'https://minecrafthopper.net',
            },
          ],
        },
        {
          title: 'Communities',
          items: [
            {
              label: 'Minecraft Discord',
              href: 'https://disdcord.gg/minecraft',
            },
            {
              label: 'Minecraft Community Support Discord',
              href: 'https://discord.gg/58Sxm23',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Loudbooks/Loudbook-Guides',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
