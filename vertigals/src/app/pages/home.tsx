import SectionCards from '../components/sectionCards';
import { NavigationProps } from '../metaData/propsInterface';
import { writtenContent } from '../metaData/writtenContent';

export default function Home(props: NavigationProps) {
    const onClick = () => {
        const mailtoLink =
            'mailto:northshorevertigals@email.com?subject=Email List&body=Hello, Please add me to your email list!';
        window.location.href = mailtoLink;
    };

    const aboutText = `${writtenContent.home.whoAreWe} ${writtenContent.home.whatWeDo}`;

    return (
        <>
            <div className="home-hero">
                <div className="main-logo" />
            </div>
            <div className="grid-container full">
                <h1 className="h1-accent">
                    A Women&apos;s Climbing Community on the North Shore of Lake
                    Superior
                </h1>
                <p className="copy-primary">{aboutText}</p>
                <div className="grid-container halves u-vw80">
                    <SectionCards {...props} />
                </div>
                <h2 className="h2-accent">
                    Want to stay up-to-date with the North Shore VertiGals?
                </h2>
                <div className="flex flex-row fr-center">
                    <p className="copy-accent">
                        Join our email list to get the latest news!
                    </p>
                    <button className="button-primary" onClick={onClick}>
                        Sign up
                    </button>
                </div>
            </div>
        </>
    );
}
