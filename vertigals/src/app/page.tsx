/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import React, { JSX } from 'react';
import { Solway, Shadows_Into_Light_Two } from 'next/font/google';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import ComingSoon from './pages/comingSoon';
import Window from './components/window';

const solway = Solway({
    weight: ['300', '500', '700', '800'],
    style: 'normal',
    subsets: ['latin']
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin', 'latin-ext']
});

interface VGWebsiteState {
    location: string;
    popUpContent: string | null;
}

class VertiGalsWebsite extends React.Component<{}, VGWebsiteState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            location: 'home',
            popUpContent: null
        };
    }

    setLocation = (newLocation: string) => {
        this.setState({ location: newLocation });
    };

    openPopUp = (popUpType: string) => {
        this.setState({ popUpContent: popUpType });
    };
    closePopUp = () => {
        this.setState({ popUpContent: null });
    };

    render() {
        const { location, popUpContent } = this.state;

        const pageProps = {
            setLocation: this.setLocation,
            openPopUp: this.openPopUp
        };
        const navMap: { [key: string]: JSX.Element } = {
            home: <Home {...pageProps} />
        };

        let currentLocation = navMap[location];
        if (!currentLocation) {
            currentLocation = <ComingSoon />;
        }

        return (
            <>
                <main
                    className={`${solway.className} ${shadowsIntoLightTwo.className}`}
                />
                <Header curLocation={location} setLocation={this.setLocation} />
                <Window popUpContent={popUpContent} onClose={this.closePopUp} />
                {currentLocation}
                <Footer />
            </>
        );
    }
}

export default VertiGalsWebsite;
