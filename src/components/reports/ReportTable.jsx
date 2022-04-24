const ReportTable = (props) => {

    // About dangerouslySetInnerHTML={{ __html: data }}
    // \n gets ignored in an JS string so we have to use a 
    //  'dangerously set' <br/> element to acheive a new line.
    // https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx

    // Renders a given array to a dangerouslySet li element.
    const renderMap = (array) => {
        return array.map((data, index) => {
            return (
                <li 
                    key={index}
                    dangerouslySetInnerHTML={{ __html: data }}    
                >
                </li>
            );
        });
    }

    // Renders a given string to the left of the table with the data on the right.
    // Data is first checked before rendering so the table row will not exist if the data is unidentified / null.
    const renderTableRow = (tableTitle, tableData) => {
        if (tableData === undefined) return;

        return (
            <tr>
                <td>
                    { tableTitle }
                </td>

                <td>
                    <ul>
                        { 
                            renderMap(tableData)
                        }
                    </ul>
                </td>
            </tr>
        );
    }

    return (
        <div id='report-table'>
            <table>
                <tbody>
                    { 
                        renderTableRow('Wat ging er goed:', props.data.tableContent.good) 
                    }

                    {
                        renderTableRow("Wat heb ik bijgeleerd", props.data.tableContent.learned)
                    }

                    {
                        renderTableRow("Streefdoelen voor volgende week:", props.data.tableContent.targets)
                    }
                    
                    {
                        renderTableRow("Algemene doelen:", props.data.tableContent.goals)
                    }
                    
                    {
                        renderTableRow("Problemen & Uitdagingen:", props.data.tableContent.problems)
                    }

                    {
                        renderTableRow("Ik kijk uit naar:", props.data.tableContent.lookingForward)
                    }
                    
                    {
                        renderTableRow("Extra informatie:", props.data.tableContent.extra)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ReportTable;