'use client';

import { NavigationMap } from '../NavigationMap';

export default function NavIcons(props) {
  const { location } = props;
  const { iconLinks } = NavigationMap;

  const NavIcon = (icon) => {
    const { id, Icon, link } = icon;

    let className = `nav-icon`;
    if (location === 'footer' && id === 'email') {
      className += ' hide-on-large';
    }

    return (
      <a className={className} href={link} target="_blank" key={id}>
        <Icon className="icon-link" />
      </a>
    );
  };

  const rowClass =
    location === 'footer' ? 'flex flex-row fr-center' : 'flex flex-row fr-end';
  return (
    <div className={rowClass}>{iconLinks.map((icon) => NavIcon(icon))}</div>
  );
}
