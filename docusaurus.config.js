const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '数据科学',
  tagline: '南开大学软件学院《数据科学》课程平台',
  url: 'https://ds.nkugame.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'walkman617', // Usually your GitHub org/user name.
  projectName: 'DS2022', // Usually your repo name.
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"]
  },
  themeConfig: {
    navbar: {
      title: '课程首页',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '课程资源',
        },
        {to: '/blog', label: '作业与要求', position: 'left'},
        {
          href: 'https://docs.qq.com/s/u_BsIYlP-jh4ptyuXVRFta',
          label: '课件',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教学',
          items: [
            {
              label: '课程资源',
              to: '/docs/intro',
            },
            {
              label: '教材链接',
              href: 'https://www.pearson.com/us/higher-education/program/Sharda-Analytics-Data-Science-Artificial-Intelligence-Systems-for-Decision-Support-11th-Edition/PGM2067063.html',
            },
          ],
        },
        {
          title: '实践',
          items: [
            {
              label: 'IBM SkillsBuild',
              href: 'https://www.ibm.com/academic/home',
            },
            {
              label: 'Design Thinking',
              href: 'https://www.ibm.com/design/thinking/',
            },
          ],
        },
        {
          title: '参考资源',
          items: [
            {
              label: 'Data Science Central',
              href: 'https://www.datasciencecentral.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 南开大学, 软件学院. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/walkman617/docusaurus-ds/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/walkman617/docusaurus-ds/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
