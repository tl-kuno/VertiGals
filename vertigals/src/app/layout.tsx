import type { Metadata } from 'next';
import '../app/css/main.css';

export const metadata: Metadata = {
  title: "North Shore VertiGals",
  description: "A community of women-identifying climbers in Duluth, MN",
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
