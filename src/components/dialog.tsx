'use client';

import { useRef, useEffect, JSX } from 'react';
import Link from 'next/link';

import './_scss/dialog.scss';

export default function Dialog(): JSX.Element {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (dialogRef.current) dialogRef.current.showModal();
    }, []);

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    return (
        <main>
            <dialog id="dialog" ref={dialogRef}>
                <p>
                    You can click on a city on the map to jump straight to that paragraph in the corresponding blog, you
                    can also see the list of my blogs.
                </p>
                <button id="close" className="primary" onClick={closeDialog}>
                    Stay Here
                </button>
                <Link href="/travels/panorama">
                    <button id="close_" className="secondary">
                        View List
                    </button>
                </Link>
            </dialog>
        </main>
    );
}