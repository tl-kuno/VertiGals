import type { Metadata } from 'next'
import Head from 'next/head'
import '../app/css/main.css'

import Header from './components/header'
import Footer from './components/footer'
import { Solway, Shadows_Into_Light_Two } from 'next/font/google'

export const metadata: Metadata = {
    title: 'North Shore VertiGals',
    description:
        'A community of women-identifying climbers in Duluth, MN and beyond.',
}

const solway = Solway({
    weight: ['300', '500', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
})

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
})

interface LayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
    const baseUrl = 'https://northshorevertigals.org'
    const googleSearchConsoleVerification = process.env.VG_GOOGLE_SEARCH_TAG
    const websiteSearchImage = `${baseUrl}/images/GoogleSearchImage.png`
    const logoImage = `${baseUrl}/images/TealLogo.png`

    return (
        <html
            lang="en"
            className={`${solway.className} ${shadowsIntoLightTwo.className}`}
        >
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <title>North Shore VertiGals</title>
                <meta
                    name="description"
                    content="A community of women-identifying and non-binary climbers in Duluth, MN and beyond."
                />
                <meta
                    name="keywords"
                    content="rock climbing, climbing, women climbers, non-binary climbers, Duluth climbing, Minnesota Climnbing, North Shore VertiGals, VertiGals, vertigals, verti gals, climbing community, climbing events"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="google-site-verification"
                    content={googleSearchConsoleVerification}
                />
                <meta property="og:title" content="North Shore VertiGals" />
                <meta
                    property="og:description"
                    content="A community of women-identifying and non-binary climbers in Duluth, MN and beyond."
                />
                <meta property="og:image" content={websiteSearchImage} />
                <meta property="og:url" content={process.env.VG_BASE_URL} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <link rel="canonical" href={process.env.VG_BASE_URL} />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    http-equiv="Content-Security-Policy"
                    content="default-src 'self'; img-src 'self' https:; script-src 'self' https:;"
                />
                <meta name="theme-color" content="#238E9D" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'North Shore VertiGals',
                        url: `${baseUrl}`,
                        logo: `${logoImage}`,
                        description:
                            'A community of women-identifying and non-binary climbers in Duluth, MN and beyond.',
                        sameAs: [
                            'https://www.facebook.com/NorthShoreVertiGals',
                            'https://www.instagram.com/northshorevertigals',
                        ],
                    })}
                </script>
            </Head>
            <body>
                <main className="solway shadows-into-light-two">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
