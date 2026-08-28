import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Footer, Hexagons, Menu } from '@/components';
import { API_URL } from '@/lib/api';

import type { Blog } from '@/types/all';

import '../_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ωmega - Tutorials',
    description: '',
};

async function getTutorials(): Promise<Blog[] | null> {
    const response = await fetch(`${API_URL}/tutorials`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch tutorials');
    }

    return response.json();
}

export default async function Tutorials() {
    const tutorials = (await getTutorials()) || [];
    return (
        <main>
            <Menu active="tutorials" />
            <Hexagons/>
            <div className="content-column">
                <h1>Tutorials</h1>
                <p>
                    I&#39;ve written a couple of tutorials, mostly for documentation purposes. Currently this website is 
                    running on Next.js, which is getting the data through an API. This way I can use Laravel with 
                    Filament to make my website more dynamic. A tutorial on that might follow soon.
                </p>
                <ul>
                    {tutorials.map((tutorial: Blog, index: number) => (
                        <li key={index}>
                            <Link href={'tutorials/' + tutorial.slug} title={tutorial.posted}>
                                {tutorial.title}
                            </Link>
                            {tutorial.description}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </main>
    );
}