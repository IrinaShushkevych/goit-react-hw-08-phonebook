//created by Irina Shushkevych
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { getUserName } from '../../redux/Auth/auth-selector'
import { useLogoutUserMutation } from '../../redux/Users/users-reducer'
import Container from '../Container/Container'
import { onError } from '../../utilits/messages'
import { List } from './List.styled'
import { Item } from './Item.styles'
import { Block } from './Block.styled'

export default function UserMenu() {
  const userName = useSelector(getUserName)
  const [logoutUserHook, { error }] = useLogoutUserMutation()
  const location = useLocation()

  useEffect(() => {
    if (error) {
      onError(error)
    }
  }, [error])

  return (
    <>
      <Container size="full">
        <Block>
          {userName && !location.pathname.includes('add') && (
            <Link to={`${location.pathname}/add`}>Add contact</Link>
          )}
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
        </Block>
      </Container>
      <Outlet />
    </>
  )
}
