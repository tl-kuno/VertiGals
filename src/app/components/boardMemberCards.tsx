import EmblaCarousel from './imageCarousel/EmblaCarousel';
import { writtenContent } from '../metaData/writtenContent';
import ResponsiveImage from './responsiveImage';

export default function BoardMemberCards() {
    const { boardMembers } = writtenContent.about;

    const boardMemberList = boardMembers.map((boardMember) => {
        const { name, position, bio } = boardMember;

        return (
            <div id={name} key={name} className="board-member-card">
                <ResponsiveImage image={name.toLowerCase()} radius="wavy" />
                <h2 className="h2-card">{name}</h2>
                {position && <h3 className="h3-card">{position}</h3>}
                <p>{bio}</p>
            </div>
        );
    });

    return <EmblaCarousel slides={boardMemberList} options={{ loop: true }} />;
}
