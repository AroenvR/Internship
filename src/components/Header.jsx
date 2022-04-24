import { useEffect, useState } from 'react';

import signature from '../img/Signature.png';
import { reports } from '../report_data/reports';

const Header = () => {
    const [headerDate, setHeaderDate] = useState(undefined); // Hook to set and contain our data.
    const currentPage = parseInt(localStorage.getItem('current-page'));

    // Executed first every time this page renders and when currentPage changes.
    useEffect(() => {
        
        setHeaderDate(reports[currentPage - 1].dateString);

    }, [currentPage]);

    return (
        <div id='header'>
            <h1>Stageverslag</h1>
            <h2>Week van de <strong>{ headerDate }</strong></h2>

            <div id='content'>
                <p>Stagiaire:&nbsp;<img src={signature} alt="Signature Aroen van Remmen"></img></p>
                <a href='https://github.com/AroenvR/Internship-Code' target="_blank" rel="noreferrer">github.com/AroenvR/Internship</a>
            </div>
        </div>
    );
}

export default Header;