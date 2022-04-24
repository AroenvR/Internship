import { Fragment, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';

import TopElements from './components/TopElements';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import InternshipReports from './components/InternshipReports';

function App() {
  const [page, setPage] = useState(0); // Hook used to set current 'page' value.
  localStorage.setItem('current-page', page); // Setting global variable for other components.

  const renderPages = () => {
    if (page !== 0) {
      return (
        <Fragment>
            <Header />
            <InternshipReports />
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
            <FrontPage />
        </Fragment>
      )
    }
  }

  return (
    <div id="App">

      <TopElements setPage={setPage}/>

        <Routes>

          {/* <Route path='/' element={<FrontPage />} /> */}

          <Route path='/*' element={
              renderPages()
            }
          />

        </Routes>
      
        
    </div>
  );
}

export default App;
