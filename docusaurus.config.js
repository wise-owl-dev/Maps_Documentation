// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sistema de Rastreo en Tiempo Real",
  tagline:
    "Documentación para aplicación móvil de rastreo de transporte público",
  url: "https://tu-sitio.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Wise-Owl", // Nombre de usuario de GitHub o nombre de organización
  projectName: "maps-app", // Nombre del repositorio de GitHub

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Sistema de Rastreo",
      logo: {
        alt: "Logo del Sistema de Rastreo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/intro",
          activeBasePath: "docs",
          label: "Documentación",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/wise-owl-dev/Maps",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introducción",
              to: "docs/intro",
            },
            {
              label: "Instalación",
              to: "docs/instalacion/requisitos",
            },
          ],
        },
        {
          title: "Comunidad",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/tu-discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tu-twitter",
            },
          ],
        },
        {
          title: "Más",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/wise-owl-dev/Maps",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tu Proyecto. Construido con Docusaurus.`,
    },
  },
};

export default config;
