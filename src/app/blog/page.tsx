import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Footer, Hexagons, Menu } from '@/components';
import { API_URL } from '@/lib/api';

import type { Blog } from '@/types/all';

import '../_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ωmega - Blog',
    description: '',
};

async function getBlogs(): Promise<Blog[] | null> {
    const response = await fetch(`${API_URL}/archive`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return response.json();
}

export default async function Travels() {
    const blogs = (await getBlogs()) || [];
    return (
        <main>
            <Menu active="blog" />
            <Hexagons/>
            <div className="content-column">
                <h1>Blog</h1>
                <p>
                    In the past I&#39;ve written a couple of blogs, because this section is not really active anymore I 
                    decided to group them onto one page, so that I can focus more on travel blogs.
                </p>
                <ul>
                    {blogs.map((blog: Blog, index: number) => (
                        <li key={index}>
                            <Link href={'blog/' + blog.slug} title={blog.posted}>
                                {blog.title}
                            </Link>
                            {blog.description}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </main>
    );
}