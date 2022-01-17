import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { getError, getToken, getUser } from '../../redux/Users/users-selector'
import Container from '../Container/Container'
import { logoutUser } from '../../redux/Users/users-operation'
import { useEffect } from 'react'
import { onError } from '../../utilits/messages'

export default function UserMenu() {
  const users = useSelector(getUser)
  const error = useSelector(getError)
  const token = useSelector(getToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      onError(error)
    }
  }, [error])

  return (
    <>
      <Container>
        <h1>{users}</h1>
        <ul>
          {!users && (
            <>
              <li>
                <Link to="register">Register</Link>
              </li>
              <li>
                <Link to="login">LogIn</Link>
              </li>
            </>
          )}
          {users && (
            <li>
              <Link
                to="/"
                onClick={() => {
                  dispatch(logoutUser(token))
                }}
              >
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </Container>
      <Outlet />
    </>
  )
}
