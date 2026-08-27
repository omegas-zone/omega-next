import React, { JSX } from 'react';
import type { Metadata } from 'next';

import { Footer, Hexagons, Menu } from '@/components';

import '../_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ω - Bookmarks',
    description: '',
};

export default async function Bookmarks(): Promise<JSX.Element> {
    return (<main>
        <Menu active="bookmarks"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Bookmarks</h1>
            <p>
                My bookmarks are too much to all keep them stored in my browser and most of them are also for sharing,
                here is a short list of some resources that I use on a daily basis and you can
                also <a href="downloads/bookmarks.html" download>download my full collection</a> as a file, ready to be
                imported in your browser.
            </p>
            <ul>
                <li><a href="https://tympanus.net/codrops/">Codrops</a></li>
                <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
                <li><a href="https://caniuse.com/">Can I Use</a></li>
                <li><a href="https://www.smashingmagazine.com/">Smashing Magazine</a></li>
                <li><a href="https://blog.iusmentis.com/">Arnoud Engelfriet</a></li>
                <li><a href="https://tweakers.net/">Tweakers</a></li>
                <li><a href="https://gathering.tweakers.net/">Gathering of Tweakers</a></li>
                <li><a href="https://tweakblogs.net/">Tweakblogs</a></li>
                <li><a href="https://xkcd.com/">xkcd</a></li>
                <li><a href="https://what-if.xkcd.com/">What If?</a></li>
                <li><a href="https://neal.fun/">Neal.fun</a></li>
                <li><a href="https://speld.nl/">De Speld</a></li>
                <li><a href="https://www.yankodesign.com/">Yanko Design</a></li>
                <li><a href="https://freesound.org">Freesound</a></li>
                <li><a href="https://www.looperman.com/">Looperman</a></li>
                <li><a href="https://nextgtrgod.github.io/webaudio-synth/">Web Synth</a></li>
                <li><a href="http://psytranceguide.com/">Psytrance Guide</a></li>
                <li><a href="https://codepen.io/jcoulterdesign/full/ZxXbeP/">Solar System</a></li>
                <li><a href="https://www.goabase.net/">Goa Base</a></li>
                <li><a href="http://everynoise.com/">Every Noise</a></li>
                <li><a href="https://ektoplazm.com/section/free-music">Ektoplazm</a></li>
                <li><a href="https://www.w3schools.com/colors/colors_converter.asp">Color Converter</a></li>
            </ul>
        </div>
        <Footer/>
    </main>);
}