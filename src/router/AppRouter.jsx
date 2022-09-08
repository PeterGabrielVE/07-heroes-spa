import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui/components/Navbar'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={ <LoginPage/>} />
            <Route path="/*" element={<HeroesRoutes />} />
           
        </Routes>
    </>
  )
}
