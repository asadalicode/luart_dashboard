import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './modules/shared/components/navbar/navbar';
import Footer from './modules/shared/components/footer/footer';
import { useState } from 'react';
import SideNavbar from './modules/shared/components/sideNavbar/sideNavbar';
import Staking from './modules/home/components/staking/staking';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Liquidity from './modules/home/components/Liquidity/liquidity';


function App() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleMobileNavbar = (value: boolean) => {
    setIsMobileNavbarOpen(value)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleMobileNavbar={handleMobileNavbar} />

        {
          !isMobileNavbarOpen &&
          <>
            <div className="container">

              <div className="d-flex">
                <div className="sideBar">
                  <SideNavbar />
                </div>
                <div className="rightPortion container-fluid">

                  <Routes>
                    <Route path='/' element={<Staking />} />
                    <Route path='/liquidity' element={<Liquidity />} />
                  </Routes>
                </div>
              </div>
            </div>
            <Footer />
          </>
        }
      </BrowserRouter>

    </div>
  );
}

export default App;
