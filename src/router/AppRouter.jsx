import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui/components/Navbar'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            
            
            <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            
            <Route path="/*" element={ <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute> } />
           
           
        </Routes>
    </>
  )
}
