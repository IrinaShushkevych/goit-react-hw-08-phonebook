import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../../redux/Users/users-selector'

export default function UserMenu() {
  const users = useSelector(getUser)

  return (
    <div>
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
            <Link to="/">LogOut</Link>{' '}
          </li>
        )}
      </ul>
    </div>
  )
}
