'use client';

import React, { JSX, useState } from 'react';

export default function Timeline(): JSX.Element {
    const [ expanded, setExpanded ] = useState(false);

    const handleSetExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <div id="timeline" className="timeline">
            <div className="btn-group">
                <button className="btn timeline__collapse" type="button" onClick={handleSetExpanded}>
                    Expand / Collapse
                </button>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2019-08">
                            <span className="tag">job</span> August 2019 - Now
                        </time><br/>
                        <strong className="timeline__title">
                            iO, Eindhoven
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            PHP Programmer, Development and maintenance Magento, Custom modules for clients
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2022-09">
                            <span className="tag">study</span> September 2022 - November 2024
                        </time><br/>
                        <strong className="timeline__title">
                            Avans+, Amsterdam [HBO Software Engineering]
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Information Technology<br/>Bachelor&#39;s Degree
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2011-06">
                            <span className="tag">job</span> July 2010 - July 2019
                        </time><br/>
                        <strong className="timeline__title">
                            Medusa Media Usage Advice, Eindhoven
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            PHP Programmer, Development and maintenance custom CMS, Custom applications for clients
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2010-05">
                            <span className="tag">job</span> May 2010 - June 2010
                        </time><br/>
                        <strong className="timeline__title">BliXem Internet, Nijmegen</strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            PHP Programmer, Development and maintenance of WordPress
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2004-09">
                            <span className="tag">study</span> September 2004 - June 2007
                        </time><br/>
                        <strong className="timeline__title">
                            Fontys, Venlo [HBO Mechatronics]
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Informatica, Elektronics, Mechanics<br/>
                            Propaedeutic year&apos;s certificate (for masters degree)
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2004-01">
                            <span className="tag">intern</span> January 2004 - June 2004
                        </time><br/>
                        <strong className="timeline__title">
                            Aluminium Delfzijl BV, Delfzijl
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Process Operator
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2002-11">
                            <span className="tag">intern</span> November 2002 - January 2003
                        </time><br/>
                        <strong className="timeline__title">
                            Teijin Twaron BV, Delfzijl
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Research, Maintenance
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2002-09">
                            <span className="tag">intern</span> September 2002 - November 2002
                        </time><br/>
                        <strong className="timeline__title">Sportcentrum Kardinge, Groningen</strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Technical Service, Maintenance
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="2000-09">
                            <span className="tag">study</span> September 2000 - June 2004
                        </time><br/>
                        <strong className="timeline__title">
                            Noorderpoort College (Abel Tasman), Delfzijl [MBO Operational Technology]
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Process Technology, Electronics, VAPRO B<br/>
                            Level 4 degree
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="1995-09">
                            <span className="tag">study</span> September 1995 - June 2000
                        </time><br/>
                        <strong className="timeline__title">
                            Ommelander College, Appingedam [HAVO]
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            Nature & Technology<br/>
                            MAVO degree
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="1982-11">
                            November, 1982
                        </time><br/>
                        <strong className="timeline__title">
                            Hello world
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">...</p>
                    </div>
                </div>
            </div>
            <div className="timeline__item">
                <div className="timeline__item-header">
                    <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                            type="button" aria-label="Expand">
                        <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                            <use href="#arrow"/>
                        </svg>
                    </button>
                    <span className="timeline__dot"></span>
                    <span className="timeline__meta">
                        <time className="timeline__date" dateTime="1970-01">
                            January, 1970
                        </time><br/>
                        <strong className="timeline__title">
                            Unix Epoch
                        </strong>
                    </span>
                </div>
                <div
                    className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                    role="region">
                    <div className="timeline__item-body-content">
                        <p className="timeline__item-p">
                            This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}