/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const isDev = process.env.NODE_ENV === 'development';
const isBuildFast = !!process.env.BUILD_FAST;
const math = require('remark-math');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const VersionsArchived = require('./versions.json');


const versions = require('./versions.json');


const ArchivedVersionsDropdownItems = VersionsArchived/* .splice(
  0,
  5,
); */
// This probably only makes sense for the beta phase, temporary

function getNextBetaVersionName() {
  const expectedPrefix = '2.0.0-beta.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 beta phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;
}

// eslint-disable-next-line no-unused-vars
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: reverseSidebarItems(item.items) };
    }

    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}
const isI18nStaging = process.env.I18N_STAGING === 'true';
const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;

const config = {
  title: '微微',
  tagline: '微课程很酷',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    admin: 'q-org',
    superman: 'lol',
    user: 'q-org',
    role: 'devlop',
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Q-org', // Usually your GitHub org/user name.
  projectName: 'w', // Usually your repo name.
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
    localeConfigs: {
      zh: {
        label: "中文简体",
        direction: "ltr",
        htmlLang: "zh-CN",
      },
    },
  },
  themes: [
    // ... Your other themes.
    // "docusaurus-theme-frontmatter",
    // "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["zh"],
        // ```
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math, [npm2yarn, { sync: true }]],
          rehypePlugins: [],
          disableVersioning: isVersioningDisabled,
          lastVersion: 'current',
          onlyIncludeVersions: (() => {
            if (isBuildFast) {
              return ['current'];
            } if (!isVersioningDisabled && (isDev || false)) {
              return ['current', ...versions.slice(0, 2)];
            }
            return undefined;
          })(),
          versions: {
            current: {
              label: `${getNextBetaVersionName()}`,
            },
          },
          editUrl:
            'http://127.0.0.1:81/',
        },
        blog: {
          showReadingTime: true,
          // eslint-disable-next-line no-dupe-keys
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content }),
          editUrl:
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.

            'http://127.0.0.1:81/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: '微课程,基础会计, 课程设计,社交，校园交流' }],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `🎉如果您喜欢微微, 👋请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Q-org/w">GitHub</a>给一个⭐️&😃关注我们<a target="_blank" rel="noopener noreferrer" href="https://github.com/Q-org/w">公众号</a>🎉`,
      },
      navbar: {
        hideOnScroll: true,
        title: '微课程',
        logo: {
          alt: '微微 项目 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'courses',
            label: '课程',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          { to: 'blog', label: '博客', position: 'left' },

          // right
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              ...ArchivedVersionsDropdownItems.map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                }),
              ),
            ],
          },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/Q-org/w',
            'aria-label': 'GitHub 仓',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `版权 © ${new Date().getFullYear()} Q-org.`,
      },
    }),

  plugins: ['docusaurus-plugin-sass',
    async function myPlugin(context, options) {
      // ...
      return {
        name: 'my-plugin',
        async loadContent() {
          return 1 + 1;
        },

        async contentLoaded({ content, actions }) {
          // ...
        },
        /* 其他生命周期 API */
      };
    },
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // 你的 PWA Manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],

  ],


};

module.exports = config;
