import React from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const HomeIcon = props => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
  </svg>
);

export const UserIcon = props => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5" />
  </svg>
);

export const BriefcaseIcon = props => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <rect x="3" y="7.5" width="18" height="12" rx="2" />
    <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
    <path d="M3 12.5h18" />
  </svg>
);

export const CapIcon = props => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <path d="m2 9 10-5 10 5-10 5-10-5Z" />
    <path d="M6 11v5c0 1.4 2.7 3 6 3s6-1.6 6-3v-5" />
  </svg>
);

export const SparkleIcon = props => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

export const ChatIcon = props => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
  </svg>
);

export const MailIcon = props => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 6.5 8 6 8-6" />
  </svg>
);

export const PhoneIcon = props => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  </svg>
);

export const LinkedInIcon = props => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V17M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" />
  </svg>
);

export const ArrowRightIcon = props => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MenuIcon = props => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = props => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const ChevronDownIcon = props => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
