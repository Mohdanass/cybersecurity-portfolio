/**
 * Site Configuration
 *
 * Central configuration for site-wide metadata, branding, and URLs.
 * ⚠️ IMPORTANT: Update these values with your own information!
 *
 * This is a template - replace all placeholder values with your actual details.
 */

export const siteConfig = {
  /**
   * Site identity and branding
   * Replace with your name and professional details
   */
  name: 'Muhammed Anas - Cybersecurity Professional',
  codename: 'mohdanas', // Your preferred username/handle
  author: {
    name: 'Muhammed Anas',
    codename: 'mohdanas',
    jobTitle: "Cybersecurity Researcher",
    tagline: 'Breaking security. Building security.',
    description: 'Cybersecurity researcher and web developer specializing in penetration testing, adversary emulation, bug bounty, and defensive security engineering. Skilled in Nmap, Burp Suite, Nessus, hydra, gobuster, Metasploit, Linux, SIEM,and cloud security.',
    organization: ' Independent',
  },

  /**
   * Site URLs and domains
   * Update with your actual domain
   */
  urls: {
    base: 'https://mohdanass.github.io',
    canonical: 'https://mohdanass.github.io',
  },

  /**
   * Default SEO metadata
   * Customize for better search engine optimization
   */
  seo: {
    title: 'Muhammed Anas - Cybersecurity Professional Portfolio',
    description: 'Professional portfolio showcasing cybersecurity projects, blog posts, and expertise. Specializing in [your specializations].',
    keywords: [
      'bug bounty',
      'cybersecurity',
      'osint',
      'ethical hacking',
      'blue team',
      'defensive security',
      'security analyst',
      'SOC analyst',
      'SIEM',
      'incident response',
      'threat hunting',
      'security operations',
      'your name', // Replace with your actual name
      'your handle', // Replace with your handle
    ],
  },

  /**
   * Default OG image
   * Path to your social media preview image (recommended: 1200x630px)
   */
  defaultImage: '/images/site/og-default.png',

  /**
   * Supported languages
   * Add or remove languages as needed
   */
  languages: {
    default: 'en-US',
    supported: ['en-US'], // Add 'pt-BR', 'es-ES', etc. as needed
  },

  /**
   * Theme configuration
   */
  theme: {
    defaultMode: 'dark',
    color: '#0a1929', // Your brand color in hex
  },

  /**
   * Educational background
   * Update with your actual educational institutions
   */
  education: [
    {
      name: 'Your University Name',
      type: 'EducationalOrganization',
    },
    // Add more education entries as needed
  ],

  /**
   * Areas of expertise
   * List your key skills and specializations
   */
  expertise: [
    'Cybersecurity',
    'Red Team Operations',
    'SIEM',
    'Incident Response',
    'Threat Hunting',
    'Security Operations Center',
    'Defensive Security',
    'Offensive Security',
    'Penetration Testing',
    // Add your specific expertise areas
  ],
} as const;

export type SiteConfig = typeof siteConfig;
