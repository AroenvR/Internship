import { amtOfReports } from "../report_data/reports";

const TopElements = (props) => {
    const currentPage = parseInt(localStorage.getItem('current-page'));

    const renderPagingBtns = () => {
        let btnArray = [];

        const createButton = (i) => {             
            return (
                <button 
                    key={i}
                    className={ currentPage === i ? 'selected-page' : 'paging-btn' } // if currentPage equals index, className is selected-page.
                    onClick={() => {
                        props.setPage(i)
                    }}
                >
                    { i }
                </button>
            );
        }

        for(let i = 1; i < amtOfReports + 1; i++) {
            btnArray.push(createButton(i));
        }
        return (
            <>
                { 
                    btnArray 
                }
            </>
        );
    }

    return (
        <div id='top-elements'>
            <button onClick={() => { window.print() }}>Print page (set size to A4)</button>

            <div id='paging-btns'>
                <p>Paging:</p>

                <button
                    className={ currentPage === 0 ? 'selected-page' : '' }
                    onClick={() => {
                        props.setPage(0);
                    }}
                >
                    Start
                </button>

                <button 
                    onClick={() => {
                        props.setPage(prevState => {
                            if (prevState <= 1) return 1;
                            return prevState - 1;
                        })
                    }}
                >
                    Prev
                </button>

                {
                    renderPagingBtns()
                }

                <button 
                    onClick={() => {
                        props.setPage(prevState => {
                            if (prevState === amtOfReports) return amtOfReports;
                            return prevState + 1;
                        })
                    }}
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export default TopElements;