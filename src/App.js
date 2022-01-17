//created by Irina Shushkevych
import { Route, Routes, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import './App.css'

import UserMenu from './components/UserMenu'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

const ContactsPage = lazy(() => import('./pages/contacts'))

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<UserMenu />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  )
}
