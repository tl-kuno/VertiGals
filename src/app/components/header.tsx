'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ExternalNavigationMap } from '../metaData/externalNavigationMap'
import NavIcons from './navIcons'
import ResponsiveImage from './responsiveImage'

export default function Header() {
    const { pages } = ExternalNavigationMap
    const pathname = usePathname()

    const NavLink = (page: string) => {
        const pageId = page.toLowerCase()
        const pageLink = pageId === 'home' ? '/' : `/${pageId}`

        let className = 'nav-item'
        if (pathname === pageLink) {
            className += ' current'
        }

        return (
            <Link
                id={pageId}
                key={pageId}
                href={pageLink}
                className={className}
            >
                {page}
            </Link>
        )
    }

    return (
        <header className="grid-container halves">
            <div className="nav-list">{pages.map((page) => NavLink(page))}</div>
            <NavIcons location="header" />
        </header>
    )
}
