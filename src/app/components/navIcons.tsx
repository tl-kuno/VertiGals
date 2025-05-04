'use client'

import { IconType } from 'react-icons'
import { ExternalNavigationMap } from '../metaData/externalNavigationMap'

interface NavIconProps {
    location: string
}

interface NavIcon {
    id: string
    Icon: IconType
    link: string
}

export default function NavIcons(props: NavIconProps) {
    const { location } = props
    const { iconLinks } = ExternalNavigationMap

    const NavIcon = (icon: NavIcon) => {
        const { id, Icon, link } = icon

        let className = `nav-icon`
        if (location === 'footer' && id === 'email') {
            className += ' hide-on-large'
        }

        return (
            <a className={className} href={link} target="_blank" key={id}>
                <Icon className="icon-link" />
            </a>
        )
    }

    const rowClass =
        location === 'footer'
            ? 'flex flex-row fr-center'
            : 'flex flex-row fr-end hide-on-mobile'
    return (
        <div className={rowClass}>{iconLinks.map((icon) => NavIcon(icon))}</div>
    )
}
