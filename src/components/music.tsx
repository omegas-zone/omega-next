import { MusicClient } from '../components';
import { API_URL } from '@/lib/api';

import type { Section } from '@/types/all';

async function getMusic(): Promise<Section[]> {
    const response = await fetch(`${API_URL}/music`, {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch music');
    }

    const json = await response.json();

    return json.data ?? json;
}

export default async function Music() {
    const sections = await getMusic();

    return <MusicClient sections={sections} />;
}