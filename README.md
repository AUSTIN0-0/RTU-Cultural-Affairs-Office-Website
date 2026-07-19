# Kultura Rizalia — React App

The Cultural Affairs Unit site, rebuilt as a Vite + React application. All content
from the original static site (Home, About, Public Information, and all 8 troupe
pages) has been preserved and ported into reusable components and data files.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Adding your media assets

The app references images/GIFs the same way the static site did — as `/media/...`
paths. Copy your existing `media/` folder (CAU.png, RTU-WHITE-LOGO.png,
gallery1.jpg...gallery12.jpg, the troupe subfolders like `Band/`, `Himig/`, `Biswal/`,
`Dulaan/`, `Panitikang/`, `Rondalla/`, `Brass/`, `Kultura/`, plus `news/`) into
`public/media/`. Anything in `public/` is served from the site root as-is, so no
import statements or path changes are needed.

## Project structure

```
src/
├── components/
│   ├── Navbar/          Sticky nav, dropdown, mobile menu, theme toggle, search
│   ├── HeroCarousel/     HeroCarousel (Home) + TroupeReel (troupe pages)
│   ├── Footer/           3-section footer (About / Contact form / Map)
│   ├── ContactForm/      "Leave Us a Message" form, floating labels + validation
│   ├── GoogleMap/        Responsive Google Maps embed (no API key required)
│   ├── Cards/            TroupeCard, AchievementCard, StoryCard
│   ├── Gallery/          MasonryGallery (achievements), JourneyGallery (troupe photos)
│   └── Common/           Icons, SectionHeading, Breadcrumb, ScrollTop/ProgressBar,
│                         ThemeContext, ToastContext, useLocalStorage, useRevealRef
├── pages/
│   ├── Home.jsx          Hero, editor's note, history, achievements, troupes grid, stories
│   ├── About.jsx         Institutional foundation, CAU history, leaders, productions, songs
│   ├── PublicInfo.jsx    Legal bases (accordion) + searchable SOP directory
│   └── Troupes.jsx       Dynamic page for any of the 8 troupes via /troupes/:slug
├── data/                 Plain JS data files — edit these to update site content
│   ├── troupesData.js
│   ├── achievementsData.js
│   ├── newsData.js
│   ├── aboutData.js
│   └── publicInfoData.js
├── styles/
│   ├── style.css         Home, About, Public Information, and every shared component
│   └── troupe.css        ONLY the individual Troupe pages (reel, journey gallery, connect CTA)
├── App.jsx               Route table (react-router-dom)
└── main.jsx              Entry point — providers (theme, toast) + global CSS import
```

## Routing

- `/` — Home
- `/about` — About
- `/public-information` — Public Information
- `/troupes/:slug` — any troupe, where `:slug` is one of: `kultura`, `himig`,
  `biswal`, `dulaan`, `panitikan`, `rondalla`, `brass`, `band`

To edit a troupe's content (adviser, history, logo meaning, socials, media reel),
edit its entry in `src/data/troupesData.js` — the page component itself doesn't
need to change.

## Notable design decisions

- **Hero carousel**: only the first slide carries the headline/subtitle/CTA. A
  gradient overlay + slight darkening filter + text-shadow keep the text readable
  regardless of how light or dark the GIF is. Slides 2+ are pure GIF, no overlay
  copy, and the carousel cross-fades between them (not slides) per the brief.
- **Footer**: three sections — About (logo, blurb, quick links, socials), a
  validated "Leave Us a Message" form with floating labels (not wired to a
  backend yet — see `ContactForm.jsx`'s `handleSubmit` for where to add a
  `fetch()` call), and a responsive Google Maps embed (no API key needed).
- **Dark/light mode, bookmarks, and likes** persist via `localStorage` through
  the shared `useLocalStorage` hook.
- **Brass Band's history text**: the original static site's paragraph for this
  troupe actually described Tunog Rizalia Rondalla (a copy-paste carryover).
  `troupesData.js` includes a placeholder paragraph with a `note` field flagging
  this — swap in the real text when available.
