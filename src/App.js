import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import ManageServices from './Pages/ManageServices'
import ManageContracts from './Pages/ManageContracts'
import Wishlist from './Pages/Wishlist'
import Profile from './Pages/Profile'
import Navbar from './Componants/Navbar'

const App = () => {
  return (
    <div className=''>
      {/* <Router>

       <Routes>
        <Navbar />
        <Route path="/" element={ <Dashboard/> } />
        <Route path="manageservices" element={ <ManageServices/> } />
        <Route path="managecontracts" element={ <ManageContracts/> } />
        <Route path="wishlist" element={ <Wishlist/> } />
        <Route path="profile" element={ <Profile/> } />
      </Routes>
      </Router> */}

      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Dashboard/> } />
        <Route path="manageservices" element={ <ManageServices/> } />
        <Route path="managecontracts" element={ <ManageContracts/> } />
        <Route path="wishlist" element={ <Wishlist/> } />
        <Route path="profile" element={ <Profile/> } />
      </Routes>
    </Router>
    </div>
  )
}

export default App