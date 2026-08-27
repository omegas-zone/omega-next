import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Footer, Hexagons, Menu } from '@/components';
import { API_URL } from '@/lib/api';

import type { Blog } from '@/types/all';

export const metadata: Metadata = {
    title: 'Ωmega - DIY',
    description: '',
};

async function getDIY(): Promise<Blog[] | null> {
    const response = await fetch(`${API_URL}/diy`, {
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

export default async function DIT() {
    const diy = (await getDIY()) || [];

    return (
        <main>
            <Menu active="diy" />
            <Hexagons/>
            <div className="content-column">
                <h1>DIY</h1>
                <ul>
                    {diy.map((diy: Blog, index: number) => (
                        <li key={index}>
                            <Link href={'diy/' + diy.slug} title={diy.posted}>
                                {diy.title}
                            </Link>
                            {diy.description}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </main>
    );
}