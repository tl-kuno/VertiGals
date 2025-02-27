'use client';

import { NavigationMap } from '../NavigationMap';
import NavIcons from './navIcons';

export default function Header(props) {
  const { location, onNavigate } = props;
  const { pages } = NavigationMap;

  const NavLink = (page: string) => {
    const pageId = page.toLowerCase();

    const isCurrentPage = pageId === 'home';
    let className = 'nav-item';
    if (isCurrentPage) {
      className += ' current';
    }

    return (
      <div
        id={pageId}
        key={pageId}
        className={className}
        onClick={(pageId) => onNavigate(pageId)}
      >
        {page}
      </div>
    );
  };

  return (
    <header className="grid-container thirds">
      <div className="flex flex-row fr-start">
        {pages.map((page) => NavLink(page))}
      </div>
      <div className="mock-logo" />
      <NavIcons location="header" />
    </header>
  );
}
