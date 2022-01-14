import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import './App.css'
import Container from './components/Container/Container'
import UserMenu from './components/UserMenu'
import ContactsPage from './pages/contacts'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

export default function App() {
  console.log('APP')

  return (
    <div className="App">
      <Container>
        <UserMenu />
      </Container>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  )
}
