/**
 * Site-wide personal settings — edit this ONE file to update your name,
 * bio, and links everywhere on the site.
 *
 * Leave a link as an empty string ('') to hide its button entirely
 * (no dead "#" links).
 */
export const site = {
  name: 'Carlo Cortez',
  shortName: 'Carlo',
  role: 'Developer',
  tagline:
    'I design and build things for the web — focused on clean code and great user experiences.',
  availableForWork: true,

  links: {
    github: 'https://github.com/carlo-cortez',
    linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
    email: '', // e.g. 'you@example.com'
    resume: '', // e.g. '/resume.pdf' (put the file in /public)
  },
};

export const initials = site.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)
  .toUpperCase();
