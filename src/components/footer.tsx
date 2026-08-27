import { JSX } from 'react';

import { Social, Logo } from './index';

import './footer.scss';

import packageJson from '../../package.json';

export default function Footer(): JSX.Element {
    return (<>
        <footer id="footer">
            <Logo />
            <Social location="header" />

            <p className="copy">
                v{packageJson.version}
            </p>
        </footer>
	</>);
}