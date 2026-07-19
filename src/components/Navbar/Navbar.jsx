import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IconSun, IconMoon, IconChevronDown } from '../Common/Icons';
import { useTheme } from '../Common/ThemeContext';

const MOBILE_BREAKPOINT = 900;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const lastScroll = useRef(0);
  const menuOpenRef = useRef(menuOpen);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  // Measure the header's real height and publish it as --header-h so the
  // mobile menu panel starts exactly below the header instead of a hardcoded
  // guess — a stale/incorrect guess was cutting off or overlapping menu items.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const publishHeight = () => {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
    };
    publishHeight();

    const observer = new ResizeObserver(publishHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Hide header on scroll-down, reveal on scroll-up — but never while the
  // mobile menu is open (translating the header would drag its fixed-position
  // mobile panel off-screen mid-interaction, since a transformed ancestor
  // becomes the containing block for position:fixed children).
  useEffect(() => {
    const delta = 10;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (menuOpenRef.current) {
          setHidden(false);
          lastScroll.current = window.scrollY;
          ticking = false;
          return;
        }
        const current = window.scrollY;
        const headerHeight = headerRef.current?.offsetHeight || 0;
        if (Math.abs(current - lastScroll.current) > delta) {
          setHidden(current > lastScroll.current && current > headerHeight);
          lastScroll.current = current;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the Public Information dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // Close the dropdown on Escape, for keyboard users
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // If the window is resized/rotated across the mobile breakpoint while the
  // menu or dropdown is open, reset both — otherwise React state (open) and
  // the now-swapped CSS (desktop layout) can disagree and leave things in a
  // half-broken state.
  useEffect(() => {
    let lastWasMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const onResize = () => {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      if (isMobile !== lastWasMobile) {
        setMenuOpen(false);
        setDropdownOpen(false);
        lastWasMobile = isMobile;
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const navLinkClass = ({ isActive }) => `nav-item${isActive ? ' active' : ''}`;

  return (
    <header
      id="main-header"
      ref={headerRef}
      className="site-header"
      style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="header-inner">
        <Link to="/" className="brand" onClick={closeAll}>
          <img src="/media/CAU.png" alt="" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-eyebrow">Rizal Technological University</span>
            <span className="brand-title">Cultural Affairs Office</span>
          </span>
        </Link>

        <nav id="nav-menu" className={`nav-menu${menuOpen ? ' active' : ''}`} aria-label="Primary">
          <NavLink to="/" end className={navLinkClass} onClick={closeAll}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeAll}>About</NavLink>
          <Link to="/#news" className="nav-item" onClick={closeAll}>Stories</Link>
          <Link to="/#troupes" className="nav-item" onClick={closeAll}>Troupes</Link>
          <Link to="/#engagement" className="nav-item" onClick={closeAll}>Achievements</Link>

          <div className="dropdown" ref={dropdownRef}>
            <button
              className="nav-item dropdown-toggle"
              type="button"
              aria-expanded={dropdownOpen}
              aria-controls="public-info-dropdown"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((v) => !v);
              }}
            >
              Public Information <IconChevronDown className="chev" width="12" height="12" />
            </button>
            <div id="public-info-dropdown" className={`dropdown-content${dropdownOpen ? ' show' : ''}`} role="menu">
              <Link to="/public-information#legal" className="dropdown-item" role="menuitem" onClick={closeAll}>
                <span className="dropdown-item-label">A.</span> Legal Bases &amp; References
              </Link>
              <Link to="/public-information#sop" className="dropdown-item" role="menuitem" onClick={closeAll}>
                <span className="dropdown-item-label">B.</span> Standard Operating Procedure
              </Link>
              <Link to="/public-information/forms" className="dropdown-item" role="menuitem" onClick={closeAll}>
                <span className="dropdown-item-label">C.</span> Forms
              </Link>
              <Link to="/public-information/citizen-charter" className="dropdown-item" role="menuitem" onClick={closeAll}>
                <span className="dropdown-item-label">D.</span> Citizen Charter
              </Link>
              <div className="dropdown-divider" role="separator" />
              <Link to="/about#org" className="dropdown-item" role="menuitem" onClick={closeAll}>Organizational Structure</Link>
              <Link to="/about#song" className="dropdown-item" role="menuitem" onClick={closeAll}>RTU Song Lyrics</Link>
            </div>
          </div>

          <Link to="/#footer" className="nav-item" onClick={closeAll}>Contact</Link>
        </nav>

        <div className="header-tools">
          <button
            className="icon-btn"
            type="button"
            aria-label="Toggle dark mode"
            aria-pressed={theme === 'dark'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <IconMoon /> : <IconSun />}
          </button>

          <div
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setMenuOpen((v) => !v);
              }
            }}
          >
            <span /><span /><span />
          </div>
        </div>
      </div>
    </header>
  );
}
