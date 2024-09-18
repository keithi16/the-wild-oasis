import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import GlobalStyles from './styles/GlobalStyles'
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to='dashboard' />} /> 
            <Route path='dashboard' element={<Dashboard /> } />
            <Route path='dashboard' element={<Dashboard /> } />
            <Route path='bookings' element={<Bookings /> } />
            <Route path='cabins' element={<Cabins /> } />
            <Route path='users' element={<Users /> } />
            <Route path='account' element={<Settings /> } />
            <Route path='login' element={<Login /> } />
            <Route path='*' element={<PageNotFound /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App