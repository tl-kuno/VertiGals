import Link from 'next/link'
import { SectionMap } from '../metaData/sectionMap'

interface SectionCardsProps {
    openWindow?: (popUpType: string) => void
}

export default function SectionCards(props: SectionCardsProps) {
    const { openWindow } = props
    const sections = Object.keys(SectionMap)

    const onClick = (section: string) => {
        const sectionInfo = SectionMap[section]
        const { popUpType } = sectionInfo
        if (popUpType && openWindow) {
            openWindow(popUpType)
        }
    }

    return sections.map((section) => {
        const sectionInfo = SectionMap[section]
        const { title, link } = sectionInfo
        const target = link?.startsWith('http') ? '_blank' : undefined
        const rel = link?.startsWith('http') ? 'noopener noreferrer' : undefined

        if (link) {
            return (
                <Link
                    key={section}
                    href={link}
                    className={`grid-link ${section}`}
                    target={target}
                    rel={rel}
                >
                    <h1>{title}</h1>
                </Link>
            )
        }

        return (
            <div
                key={section}
                className={`grid-link ${section}`}
                onClick={() => onClick(section)}
            >
                <h1>{title}</h1>
            </div>
        )
    })
}
