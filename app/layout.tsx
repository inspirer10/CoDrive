import type { Metadata } from 'next';
import { Inter, Outfit, Space_Grotesk } from 'next/font/google';
import './globals.scss';
import LenisProvider from './Components/LenisProvider/LenisProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'CoDrive - Carpooling for Daily Commutes',
        template: '%s | CoDrive',
    },
    description:
        'CoDrive is a carpooling portfolio project for finding and posting daily commute rides while reducing travel costs.',
    keywords: [
        'carpooling',
        'ridesharing',
        'commute',
        'shared rides',
        'portfolio project',
    ],
    applicationName: 'CoDrive',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'CoDrive',
        title: 'CoDrive - Carpooling for Daily Commutes',
        description:
            'Find and post shared commute rides. Save money, reduce emissions, and travel together.',
        url: '/',
        images: [
            {
                url: '/header.jpg',
                width: 1200,
                height: 630,
                alt: 'People sharing a daily commute ride with CoDrive',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CoDrive - Carpooling for Daily Commutes',
        description:
            'Find and post shared commute rides. Save money and travel together.',
        images: ['/header.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
            >
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
