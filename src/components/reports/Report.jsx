const Report = (props) => {

    // About dangerouslySetInnerHTML={{ __html: data }}
    // \n gets ignored in an JS string so we have to use a 
    //  'dangerously set' <br/> element to acheive a new line.
    // https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx
    
    const renderSummary = () => {       
        const summary = props.data.summary;

        if (summary === undefined) return (<p>Something went wrong.</p>);
        
        return summary.map((data, index) => {
            return (
                <p 
                    key={index}
                    dangerouslySetInnerHTML={{ __html: data }}
                >
                </p>
            )
        });
    }

    const renderFinishedStories = () => {
        const finished = props.data.finished;

        if (finished === undefined) return;

        return (
            <>
                <p id='finished-stories'>Finished Jira stories:</p>
                <ul>
                    {
                        finished.map((data, index) => {
                            return (
                                <li key={index}>
                                    { data }
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }

    const renderStartedStories = () => {
        const started = props.data.started;

        if (started === undefined) return;

        return (
            <>
                <p id='started-stories'>Started Jira stories:</p>
                <ul>
                    {
                        started.map((data, index) => {
                            return (
                                <li key={index}>
                                    { data }
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }

    return (
        <div id='report'>
            { renderSummary() }

            { renderFinishedStories() }

            { renderStartedStories() }
        </div>
    );
}

export default Report;

