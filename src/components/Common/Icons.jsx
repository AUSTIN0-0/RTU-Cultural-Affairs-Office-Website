// Small, dependency-free inline SVG icons shared across the app.
// Using currentColor so icons inherit text color from their parent.

export const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M10.5 3a7.5 7.5 0 1 0 4.65 13.4l5.23 5.22 1.41-1.41-5.22-5.23A7.5 7.5 0 0 0 10.5 3Zm-5.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" />
  </svg>
);

export const IconSun = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M12 4.5V2m0 20v-2.5M4.5 12H2m20 0h-2.5M6.3 6.3 4.6 4.6m14.8 14.8-1.7-1.7M6.3 17.7l-1.7 1.7M19.4 4.6l-1.7 1.7M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const IconMoon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" fill="currentColor" />
  </svg>
);

export const IconBookmark = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.5a1 1 0 0 1 1-1Z" />
  </svg>
);

export const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 21s-7.5-4.6-10-9.2C.5 8.4 2.3 5 5.8 5c2 0 3.4 1 4.2 2.3C10.8 6 12.2 5 14.2 5c3.5 0 5.3 3.4 3.8 6.8C19.5 16.4 12 21 12 21Z" />
  </svg>
);

export const IconArrowUp = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 5l-7 7h4v7h6v-7h4l-7-7Z" fill="currentColor" />
  </svg>
);

export const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" fill="currentColor" />
  </svg>
);

export const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);

export const IconTiktok = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M14 3v9.8a2.6 2.6 0 1 1-2-2.53V8.2a5 5 0 1 0 4.3 4.95V9.7c1 .7 2.2 1.1 3.4 1.1V8.4c-1.6 0-3-.9-3.7-2.2A4.7 4.7 0 0 1 15.5 3H14Z"
      fill="currentColor"
    />
  </svg>
);

export const IconYoutube = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" />
  </svg>
);

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 6.5 12 13l8-6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M7 3.5c1 0 1.9.6 2.3 1.6l.8 2a2.4 2.4 0 0 1-.6 2.6l-.9.9a12.7 12.7 0 0 0 4.8 4.8l.9-.9a2.4 2.4 0 0 1 2.6-.6l2 .8a2.5 2.5 0 0 1 1.6 2.3v1.6c0 1.4-1.2 2.5-2.6 2.4C10.7 20.4 3.6 13.3 3 5.1 2.9 3.7 4 2.5 5.4 2.5H7v1Z"
      fill="currentColor"
    />
  </svg>
);

export const IconChevronDown = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="12" cy="9" r="2.4" fill="currentColor" />
  </svg>
);
