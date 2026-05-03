interface LinkItem {
  label: string;
  description?: string | null;
  url: string;
  icon: string;
  iconPath?: string | null;
  featured?: boolean;
}

interface ContentConfig {
  name: string;
  tagline: string;
  bio: string;
  photoPath: string;
  whatsapp: {
    number: string;
    message: string;
  };
  links: LinkItem[];
  social: {
    instagram: string | null;
    youtube: string | null;
    twitter: string | null;
    linkedin: string | null;
    email: string | null;
  };
  og: {
    title: string;
    description: string;
    imageUrl: string;
    siteUrl: string;
  };
}

declare const content: ContentConfig;
export default content;
