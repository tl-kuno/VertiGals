import ResponsiveImage from '../components/responsiveImage';
import BoardMemberCards from '../components/boardMemberCards';

export default function About() {
    return (
        <div className="grid-container full">
            <div className="hero-grid-right">
                <div className="text-card">
                    <h1>Lake Superior.</h1>
                    <h1>Climbing.</h1>
                    <h1>Women.</h1>
                    <h1>Community.</h1>
                </div>
                <ResponsiveImage image="aboutHero" radius="rounded" />
            </div>
            <h1 className="h1-primary">Meet the Board! </h1>
            <BoardMemberCards />
        </div>
    );
}
