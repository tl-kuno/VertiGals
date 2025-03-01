'use client';

import { ExternalNavigationMap } from '../metaData/externalNavigationMap';
import NavigationProps from '../metaData/propsInterface';

import NavIcons from './navIcons';

export default function Header(props: NavigationProps) {
    const { curLocation, setLocation } = props;
    const { pages } = ExternalNavigationMap;

    const NavLink = (page: string) => {
        const pageId = page.toLowerCase();

        const isCurrentPage = pageId === curLocation;
        let className = 'nav-item';
        if (isCurrentPage) {
            className += ' current';
        }

        return (
            <div
                id={pageId}
                key={pageId}
                className={className}
                onClick={() => setLocation(pageId)}
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
