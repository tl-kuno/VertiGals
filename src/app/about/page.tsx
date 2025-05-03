import ResponsiveImage from '../components/responsiveImage'
import BoardMemberCards from '../components/boardMemberCards'
import { writtenContent } from '../metaData/writtenContent'

export default function About() {
    const { history } = writtenContent.about
    return (
        <div className="flex flex-column fc-center u-centerText ">
            <div className="hero-grid-right">
                <div className="text-card overlay-left-mobile">
                    <h1>Lake Superior.</h1>
                    <h1>Climbing.</h1>
                    <h1>Women.</h1>
                    <h1>Community.</h1>
                </div>
                <ResponsiveImage image="aboutHero" radius="rounded" />
            </div>
            <div className="text-card-light">
                <h1 className="h1-primary">Who are the VertiGals?</h1>
                {history.map((text, index) => (
                    <p key={`paragraph-${index}`} className="copy-small">
                        {text}
                        <br />
                    </p>
                ))}
                <h3 className="h3-accent">
                    CLICK HERE TO READ THE STORY OF HOW WE STARTED
                </h3>
            </div>
            <div>
                <h1 className="h1-primary">Meet the Board! </h1>
                <h3 className="h3-accent">
                    Interested in joining the board? Email at us at
                    northshorevertigals@gmail.com!
                </h3>
            </div>
            <BoardMemberCards />
        </div>
    )
}
