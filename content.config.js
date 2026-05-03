const content = {
  // ─── Profile ───────────────────────────────────────────────────────────────
  name: "Prince Oshan",
  tagline: "FOUNDER · BUILDER · GUIDE",
  bio: "Gurus sell the dream. I show you the exact system I use to build mine.",
  photoPath: "/profile.jpg",

  // ─── WhatsApp ──────────────────────────────────────────────────────────────
  whatsapp: {
    number: "+919354841513",
    message: "Hi! I found you through your link page and wanted to connect.",
  },

  // ─── Links list ────────────────────────────────────────────────────────────
  // icon: emoji fallback. iconPath: drop file in /public and set path here.
  // featured: true gives the card a gold treatment (use for Work With Me).
  links: [
    {
      label: "YouTube",
      description: "Watch me build a real business in public — every step, no theory",
      url: "https://www.youtube.com/@iprinceoshan/videos",
      icon: "▶️",
      iconPath: "/icon-youtube.webp",
      featured: false,
    },
    {
      label: "WhatsApp Community",
      description: "Join the community. Real builders only.",
      url: "https://chat.whatsapp.com/BtBM962l3BX0utOydUPs3T",
      icon: "💬",
      iconPath: null,
      featured: false,
    },
    {
      label: "Oshan Academy",
      description: "Free build sessions + paid implementation programs. Start free.",
      url: "https://www.oshanacademy.com",
      icon: "🎓",
      iconPath: "/icon-academy.png",
      featured: false,
    },
    {
      label: "Work With Me",
      description: "Book a 1-on-1 call. I'll tell you exactly what to fix first.",
      url: "https://superprofile.bio/bookings/princeoshan?sessionId=666ad9641022650014ea3427",
      icon: "🚀",
      iconPath: "/icon-work-with-me.jpg",
      featured: true,
    },
  ],

  // ─── Social row icons ──────────────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/princeoshan/",
    youtube: "https://www.youtube.com/@iprinceoshan/videos",
    twitter: "https://twitter.com/iprinceoshan",
    linkedin: "https://www.linkedin.com/in/princeoshan/",
    email: "connect@princeoshan.com",
  },

  // ─── Open Graph / SEO ──────────────────────────────────────────────────────
  og: {
    title: "Prince Oshan — Creator & Entrepreneur",
    description: "Building things that matter. Join the journey.",
    imageUrl: "https://princeoshan.com/og-image.jpg",
    siteUrl: "https://princeoshan.com",
  },
};

export default content;
