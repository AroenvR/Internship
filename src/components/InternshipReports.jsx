import { useEffect, useState } from 'react';

import { reports } from '../report_data/reports';

import Report from './reports/Report';
import ReportTable from './reports/ReportTable';

const InternshipReports = () => {
    const [data, setData] = useState(undefined); // Hook to set and contain our data.
    const currentPage = parseInt(localStorage.getItem('current-page')); // Getting the current page from localStorage.

    // Executed first every time this page renders and when currentPage changes.
    useEffect(() => {
        
        setData(reports[currentPage - 1]);

    }, [currentPage]);

    // Quick data check, otherwise child components may render too early.
    if (data === undefined) return (<p>Loading data.</p>);

    return (
        <div id='internship-reports'>

            <section>
                <p id='head'>Korte samenvatting van de week:</p>

                <Report data={data}/>
                <ReportTable data={data}/>
            </section>

        </div>
    );
}

export default InternshipReports;