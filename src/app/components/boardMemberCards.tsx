import EmblaCarousel from './imageCarousel/EmblaCarousel'
import { writtenContent } from '../metaData/writtenContent'
import ResponsiveImage from './responsiveImage'
import {
    HarnessPlaceholder,
    CarabinerPlaceholder,
    RopePlaceholder,
} from './climbingIconPlaceholders'

const placeholderIcons: Record<string, React.ReactNode> = {
    'Riley Sausman': <HarnessPlaceholder />,
    'Emma Springer': <CarabinerPlaceholder />,
    'Erin Van Hon': <RopePlaceholder />,
}

export default function BoardMemberCards() {
    const { boardMembers } = writtenContent.about

    const boardMemberList = boardMembers.map((boardMember, index) => {
        const { name, position, bio } = boardMember
        const placeholder = 'placeholder' in boardMember && boardMember.placeholder
        const icon = placeholder ? placeholderIcons[name] : null

        return (
            <div id={name} key={`${name}-${index}`} className="board-member-card">
                {!placeholder && (
                    <ResponsiveImage image={name.toLowerCase()} radius="wavy" />
                )}
                {placeholder && icon && (
                    <div style={{ width: '100%', maxWidth: '220px', margin: '0 auto' }}>
                        {icon}
                    </div>
                )}
                <h2 className="h2-card">{name}</h2>
                {position && <h3 className="h3-primary">{position}</h3>}
                {!placeholder && <p className="copy-small">{bio}</p>}
            </div>
        )
    })

    return (
        <EmblaCarousel
            slides={boardMemberList}
            options={{ loop: true, align: 'center', containScroll: false }}
        />
    )
}
