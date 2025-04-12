'use client';

import React from 'react';

import Window from './components/window';
import SectionCards from './components/sectionCards';
import { writtenContent } from './metaData/writtenContent';
import ResponsiveImage from './components/responsiveImage';

interface HomeState {
    popUpContent: string | null;
}

class VertiGalsWebsite extends React.Component<
    Record<string, never>,
    HomeState
> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            popUpContent: null
        };
    }

    openWindow = (popUpType: string) => {
        this.setState({ popUpContent: popUpType });
    };
    closePopUp = () => {
        this.setState({ popUpContent: null });
    };

    onEmailSignUp = () => {
        const mailtoLink =
            'mailto:northshorevertigals@email.com?subject=Email List&body=Hello, Please add me to your email list!';
        window.location.href = mailtoLink;
    };

    render() {
        const { popUpContent } = this.state;
        const aboutText = `${writtenContent.home.whoAreWe} ${writtenContent.home.whatWeDo}`;

        return (
            <>
                <Window popUpContent={popUpContent} onClose={this.closePopUp} />
                <>
                    <ResponsiveImage image="homeHero" radius="none" />
                    <div className="grid-container full">
                        <h1 className="h1-accent">
                            A Women&apos;s Climbing Community on the North Shore
                            of Lake Superior
                        </h1>
                        <p className="copy-primary">{aboutText}</p>
                        <div className="grid-container halves u-vw80">
                            <SectionCards openWindow={this.openWindow} />
                        </div>
                        <h2 className="h2-accent">
                            Want to stay up-to-date with the North Shore
                            VertiGals?
                        </h2>
                        <div className="flex flex-row fr-center">
                            <p className="copy-accent">
                                Join our email list to get the latest news!
                            </p>
                            <button
                                className="button-primary"
                                onClick={this.onEmailSignUp}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </>
            </>
        );
    }
}

export default VertiGalsWebsite;
