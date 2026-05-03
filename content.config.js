const content = {
  // ─── Profile ───────────────────────────────────────────────────────────────
  name: "Prince Oshan",
  tagline: "Creator · Entrepreneur · Artist",
  bio: "Building things that matter. Join the journey.",
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
      label: "Free Resources",
      description: "Free guides, templates & tools to help you grow",
      url: "https://www.youtube.com/@iprinceoshan/videos",
      icon: "▶️",
      iconPath: "/icon-youtube.webp",
      featured: false,
    },
    {
      label: "Weekly Newsletter",
      description: "Real insights on business, content & mindset — every week",
      url: "https://princeoshan.com/newsletter",
      icon: "📬",
      iconPath: "/icon-newsletter.svg",
      featured: false,
    },
    {
      label: "Oshan Academy",
      description: "Courses to help you build and grow online",
      url: "https://www.oshanacademy.com",
      icon: "🎓",
      iconPath: "/icon-academy.png",
      featured: false,
    },
    {
      label: "Work With Me",
      description: "Let's build something great together",
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
