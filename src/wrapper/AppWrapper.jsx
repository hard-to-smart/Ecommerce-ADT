import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CurrencyDropdown from '../components/CurrencyDropdown'

const AppWrapper = () => {
  return (
    <>
    <Header/>
    <div className="relative">
        <CurrencyDropdown/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default AppWrapper