import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { getError, getToken, getUser } from '../../redux/Users/users-selector'
import Container from '../Container/Container'
import { logoutUser } from '../../redux/Users/users-operation'
import { useEffect } from 'react'
import { onError } from '../../utilits/messages'
import { List } from './List.styled'
import { Item } from './Item.styles'

export default function UserMenu() {
  const userName = useSelector(getUser)
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
        <List>
          {!userName && (
            <>
              <Item>
                <Link to="register">Register</Link>
              </Item>
              <Item>
                <Link to="login">LogIn</Link>
              </Item>
            </>
          )}
          {userName && (
            <>
              <Item>Hello, {userName}</Item>
              <Item>
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(logoutUser(token))
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
