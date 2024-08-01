const CONFIG = {
  // profile setting (required)
  profile: {
    name: "LostLab",
    image: "https://media.discordapp.net/attachments/1265369759814385724/1268407276289654784/Default_A_potion_circle_icon_simulating_a_beaker_with_cyber_de_2-removebg-preview.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "CEO / Blog publishing",
    bio: "Keep in-formed with our blog",
    email: "blog@lostlab.net",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `Lostlab`,
      href: "https://lostlab.net",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Lostlab",
    description: "Cybersecurity blog",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "obsidian-composer-47e.notion.site",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
