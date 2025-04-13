'use client';

import React from 'react';

import Window from './components/window';
import SectionCards from './components/sectionCards';
import { writtenContent } from './metaData/writtenContent';
import ResponsiveImage from './components/responsiveImage';

interface HomeState {
    popUpContent: string | null;
    email: string;
    isEmailValid: boolean;
}

class VertiGalsWebsite extends React.Component<
    Record<string, never>,
    HomeState
> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            popUpContent: null,
            email: '',
            isEmailValid: false,
        };
    }

    openWindow = (popUpType: string) => {
        this.setState({ popUpContent: popUpType });
    };

    closePopUp = () => {
        this.setState({ popUpContent: null });
    };

    onEmailSignUp = async (e: React.FormEvent) => {
        const { email } = this.state;
        e.preventDefault();
    
        try {
            const response = await fetch('/api/joinMailingList', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailToAdd: email }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(email);

        this.setState({ email, isEmailValid });
    };

    render() {
        const { popUpContent, email, isEmailValid } = this.state;
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
                        <div className="flex flex-column fc-center">
                            <p className="copy-accent">
                                Join our email list to get the latest news!
                            </p>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input-primary"
                                    value={email}
                                    onChange={this.handleEmailChange}
                                    required
                                />
                                <button
                                    className="button-primary"
                                    onClick={this.onEmailSignUp}
                                    disabled={!isEmailValid}
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            </>
        );
    }
}

export default VertiGalsWebsite;