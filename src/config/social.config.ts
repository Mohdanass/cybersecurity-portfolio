/**
 * Social Media Configuration
 *
 * Central configuration for all social media links and profiles.
 * ⚠️ IMPORTANT: Update these values with your own social media URLs!
 *
 * Replace all placeholder usernames and URLs with your actual profiles.
 */

export const socialConfig = {
  /**
   * LinkedIn profile
   * Get your LinkedIn username from your profile URL:
   * 'https://www.linkedin.com/in/muhammedanas-m-p',
   */
  linkedin: {
    username: 'Muhammed Anas',
    url: 'https://www.linkedin.com/in/muhammedanas-m-p',
    label: 'LinkedIn',
  },

  /**
   * GitHub profile
   * Your GitHub username
   */
  github: {
    username:  'Mohdanass',
    url: 'https://github.com/Mohdanass',
    label: 'GitHub',
  },

  /**
   * Twitter/X profile
   * Your Twitter/X handle (without the @ symbol)
   */
  twitter: {
    username: 'your-twitter-handle',
    handle: '@your-twitter-handle',
    url: 'https://twitter.com/your-twitter-handle',
    label: 'X (Twitter)',
  },

  /**
   * Additional social platforms (optional)
   * Uncomment and configure as needed:
   */

  // email: {
  //   address: 'anasmp366@gmail.com',
  //   url: 'mailto:anasmp366@gmail.com',
  //   label: 'Email',
  // },

  // mastodon: {
  //   username: '@yourusername@mastodon.social',
  //   url: 'https://mastodon.social/@yourusername',
  //   label: 'Mastodon',
  // },

  // medium: {
  //   username: 'anasmp366',
  //   url: 'https://medium.com/@anasmp366',
  //   label: 'Medium',
  // },
} as const;

export type SocialConfig = typeof socialConfig;
