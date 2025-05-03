'use client'

import React from 'react'
import validator from 'validator'

import Window from './components/window'
import SectionCards from './components/sectionCards'
import { writtenContent } from './metaData/writtenContent'
import ResponsiveImage from './components/responsiveImage'

interface HomeState {
    popUpContent: string | null
    email: string
    isEmailValid: boolean
    signingUp: null | 'loading' | 'success' | 'error'
}

class VertiGalsWebsite extends React.Component<
    Record<string, never>,
    HomeState
> {
    constructor(props: Record<string, never>) {
        super(props)
        this.state = {
            popUpContent: null,
            email: '',
            isEmailValid: false,
            signingUp: null,
        }
    }

    openWindow = (popUpType: string) => {
        this.setState({ popUpContent: popUpType })
    }

    closePopUp = () => {
        this.setState({ popUpContent: null })
    }

    onEmailSignUp = async (e: React.FormEvent) => {
        const { email } = this.state
        e.preventDefault()
        this.setState({ signingUp: 'loading' })
        try {
            const response = await fetch('/api/joinMailingList', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailToAdd: email }),
            })

            if (!response.ok) {
                alert(
                    'Something went wrong. Please try again later or email us at northshorevertigals@gmail.com'
                )
                this.setState({
                    email: '',
                    isEmailValid: false,
                    signingUp: 'error',
                })
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            this.setState({
                email: '',
                isEmailValid: false,
                signingUp: 'success',
            })
            const data = await response.json()
            console.log('Response:', data)
        } catch (error) {
            this.setState({
                email: '',
                isEmailValid: false,
                signingUp: 'error',
            })
            console.error('Error:', error)
        }
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value
        const isEmailValid = validator.isEmail(email)
        this.setState({ email, isEmailValid })
    }

    renderSignUpStatus = () => {
        const { signingUp } = this.state
        let text = ''
        if (signingUp === 'loading') {
            text = 'Signing you up...'
        } else if (signingUp === 'success') {
            text = 'Success! Thanks for signing up!'
        } else if (signingUp === 'error') {
            text =
                'Something went wrong! Please try again or send us an email at northshorevertigals@gmail.com.'
        }
        return (
            <div className={`sign-up ${signingUp ? signingUp : ''}`}>
                <p>{text}</p>
            </div>
        )
    }

    render() {
        const { popUpContent, email, isEmailValid } = this.state

        const aboutText = `${writtenContent.home.whoAreWe} ${writtenContent.home.whatWeDo}`

        return (
            <div>
                <Window popUpContent={popUpContent} onClose={this.closePopUp} />
                <div>
                    <div className="hero-gradient">
                        <ResponsiveImage
                            image="mainLogo"
                            className="main-logo"
                            radius="none"
                        />
                        <ResponsiveImage image="homeHero" radius="none" />
                    </div>
                    <div className="flex flex-column fc-center u-centerText">
                        <h1 className="h1-accent">
                            A Women&apos;s Climbing Community on the North Shore
                            of Lake Superior
                        </h1>
                        <p className="copy-primary">{aboutText}</p>
                        <div className="grid-container halves u-vw80">
                            <SectionCards openWindow={this.openWindow} />
                        </div>
                        <div className="text-card-light">
                            <h2 className="h2-primary">Our Mission</h2>
                            {writtenContent.home.missionStatement.map(
                                (text, index) => (
                                    <p
                                        key={`paragraph-${index}`}
                                        className="copy-small"
                                    >
                                        {text}
                                    </p>
                                )
                            )}
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
                            {this.renderSignUpStatus()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VertiGalsWebsite
