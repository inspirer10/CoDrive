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
    title: 'CoDrive - Carpooling App',
    description: 'Carpooling App for easy and affordable ridesharing.',
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
