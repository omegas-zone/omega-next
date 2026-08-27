import React, { JSX } from 'react';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Footer, Hexagons, Menu, Music } from '@/components';
import { API_URL } from '@/lib/api';

import type { Intro } from '@/types/all';

import './_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ω - Home',
    description: 'Ω - My music',
    keywords: 'omega,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,yupsie',
    authors: [{ name: 'Omega' }],
};

async function getIntro(): Promise<Intro[] | null> {
    const response = await fetch(`${API_URL}/home`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch home text');
    }

    return response.json();
}

export default async function Home(): Promise<JSX.Element> {
    const intro = await getIntro();

    return (<main className="home">
        <Menu active="home"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Home</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {intro ? intro[0]?.content : 'No intro available'}
            </ReactMarkdown>

            <Music/>
        </div>
        <Footer/>
    </main>);
}