import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Container from '../Container/Container'
import { loginUser } from '../../redux/Users/users-operation'
import {
  getError,
  getIsLoading,
  getUser,
} from '../../redux/Users/users-selector'
import { onError } from '../../utilits/messages'

export default function LoginUser() {
  const [email, setEmail] = useState(sessionStorage.getItem('email') ?? '')
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const userError = useSelector(getError)
  const userName = useSelector(getUser)

  const onSubmit = (data) => {
    dispatch(
      loginUser({
        email: 'testtast4@gmail.com',
        password: 'qwert-11',
      }),
    )
    setEmail('')
    setPassword('')
    sessionStorage.removeItem('email')
  }

  const onCancel = () => {
    sessionStorage.removeItem('email')
    navigate('/')
  }

  const onChange = (e) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'email':
        setEmail(value)
        sessionStorage.setItem('email', value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        return
    }
  }

  useEffect(() => {
    if (userError) {
      onError(userError)
    }
  }, [userError])

  useEffect(() => {
    if (userName) {
      navigate('/contacts')
    }
  }, [userName, navigate])

  return (
    <Container>
      <h2>Form Login</h2>
      {isLoading && <h3>Loading....</h3>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          email
          <input
            type="email"
            {...register('email', { required: true })}
            onChange={onChange}
            value={email}
          />
          {errors.email?.type === 'required' && 'Email is required'}
        </label>
        <label>
          password
          <input
            type="password"
            {...register('password', { required: true })}
            onChange={onChange}
            value={password}
          />
          {errors.password?.type === 'required' && 'Password is required'}
        </label>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Log in</button>
      </form>
    </Container>
  )
}