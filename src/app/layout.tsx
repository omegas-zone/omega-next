import React, { JSX } from 'react';
import localFont from 'next/font/local';

import { EasterEgg } from '@/components';

import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: 'Ω',
    description: 'Ω - My music',
    keywords: 'omega,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,yupsie',
    authors: [{ name: 'Omega' }],
};
export const viewport: Viewport = {
    colorScheme: 'light',
    themeColor: '#6a6eec',
    width: 'device-width',
    initialScale: 1,
};

const myFont = localFont({
    src: './afacad.ttf',
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (<html lang="en" className={myFont.className}>
        <EasterEgg />
        <body>
            {children}
        </body>
    </html>);
}