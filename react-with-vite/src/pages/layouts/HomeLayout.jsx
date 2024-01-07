import React from 'react'
import HeaderComponent from '../../components/common/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../../components/home/FooterComponent'
const HomeLayout = () => {
  return (
    <>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
    </>
  )
}

export default HomeLayout