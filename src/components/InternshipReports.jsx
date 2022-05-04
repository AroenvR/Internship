import Report from './reports/Report';
import ReportTable from './reports/ReportTable';

const InternshipReports = (props) => {
    // const [pageData, setPageData] = useState(undefined); // Hook to set and contain our page's data.
    const currentPage = parseInt(localStorage.getItem('current-page')); // Getting the current page from localStorage.

    // Quick data check, otherwise child components may render too early.
    if (props === undefined || props === null) return (<p>Loading data.</p>);
    if (props.data === undefined || props === null) return (<p>Loading data.</p>);

    return (
        <div id='internship-reports'>

            <section>
                <p id='head'>Korte samenvatting van de week:</p>

                <Report data={props.data[currentPage - 1]}/>
                <ReportTable data={props.data[currentPage - 1]}/>
            </section>

        </div>
    );
}

export default InternshipReports;