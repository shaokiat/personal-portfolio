import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Cal, { getCalApi } from '@calcom/embed-react'

const App = function () {
  // useEffect(() => {
  //   ;(async function () {
  //     const cal = await getCalApi()
  //     cal('floatingButton', { calLink: 'shaokiat/15min' })
  //     cal('ui', {
  //       styles: { branding: { brandColor: '#242424' } },
  //       hideEventTypeDetails: false,
  //     })
  //   })()
  // }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} exact element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
