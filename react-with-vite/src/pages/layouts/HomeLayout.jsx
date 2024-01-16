import React, { useContext } from 'react'
import HeaderComponent from '../../components/common/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../../components/home/FooterComponent'
import { ThemeContext } from '../../config/theme.context'
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