export interface NavLinkChild {
  name: string;
  href: string;
  description: string;
}

export interface NavLink {
  name: string;
  href: string;
  children?: NavLinkChild[];
}

export interface SocialConfig {
  instagram: {
    handle: string;
    url: string | null;
    isConfirmed: boolean;
  };
  linkedin: {
    name: string;
    url: string | null;
    isConfirmed: boolean;
  };
  whatsapp: {
    number: string | null;
    displayNumber: string | null;
    defaultMessage: string;
    isConfirmed: boolean;
  };
}

export interface SiteConfig {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  heroSupportingCopy: string;
  navLinks: NavLink[];
  contactEmail: string;
  domain: string;
  socials: SocialConfig;
}

