import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/Pages/LoginPage'
import { DcPage } from '../heroes/pages/DcPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={ <LoginPage/>} />
            <Route path="/" element={<MarvelPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
        </Routes>
    </>
  )
}
