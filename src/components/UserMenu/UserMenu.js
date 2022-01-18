import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

import { getUserName } from '../../redux/Auth/auth-selector'
import { useLogoutUserMutation } from '../../redux/Users/users-reducer'
import Container from '../Container/Container'
import { onError } from '../../utilits/messages'
import { List } from './List.styled'
import { Item } from './Item.styles'

export default function UserMenu() {
  const userName = useSelector(getUserName)
  const [logoutUserHook, { error }] = useLogoutUserMutation()

  useEffect(() => {
    if (error) {
      onError(error)
    }
  }, [error])

  return (
    <>
      <Container>
        <List>
          {!userName ? (
            <>
              <Item>
                <Link to="register">Register</Link>
              </Item>
              <Item>
                <Link to="login">LogIn</Link>
              </Item>
            </>
          ) : (
            <>
              <Item>Hello, {userName}</Item>
              <Item>
                <Link
                  to="/"
                  onClick={() => {
                    logoutUserHook()
                  }}
                >
                  LogOut
                </Link>
              </Item>
            </>
          )}
        </List>
      </Container>
      <Outlet />
    </>
  )
}
