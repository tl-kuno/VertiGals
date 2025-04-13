import type { Metadata } from 'next';
import '../app/css/main.css';

import Header from './components/header';
import Footer from './components/footer';
import { Solway, Shadows_Into_Light_Two } from 'next/font/google';

export const metadata: Metadata = {
    title: 'North Shore VertiGals',
    description: 'A community of women-identifying climbers in Duluth, MN'
};

const solway = Solway({
    weight: ['300', '500', '700', '800'],
    style: 'normal',
    subsets: ['latin']
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin']
});

interface LayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html
            lang="en"
            className={`${solway.className} ${shadowsIntoLightTwo.className}`}
        >
            <body>
                <main className="solway shadows-into-light-two">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
