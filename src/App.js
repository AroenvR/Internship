import { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";

import './App.scss';
import reportData from './report_data/reportData.json';

import TopElements from './components/TopElements';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import InternshipReports from './components/InternshipReports';

// Note to self: When pushing new code, remember to execute npm run deploy to update the gh-pages branch.
// Make sure you're in the canonical path. Don't give your repositories a capitalized name.

function App() {
  const [page, setPage] = useState(0); // Hook used to set current 'page' value.
  localStorage.setItem('current-page', page); // Setting global variable for other components.

  useEffect(() => {
    
    const callSmartContract = async () => {
      const contractAddress = reportData["deployment"]["address"];
      const contractABI = reportData["abi"];
      
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const reportDataContract = new ethers.Contract(contractAddress, contractABI, web3Provider);

      const reply = await reportDataContract.viewString();
      console.log(reply);
    }

    callSmartContract();

  }, []);

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
