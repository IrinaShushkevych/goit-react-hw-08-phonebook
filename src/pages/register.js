import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container/Container'
import { registerUser } from '../redux/Users/users-operation'
import { getError, getIsLoading } from '../redux/Users/users-selector'
import { useEffect, useState } from 'react'
import { onError } from '../utilits/messages'

export default function RegisterPage() {
  const [name, setName] = useState(sessionStorage.getItem('name') ?? '')
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

  const onSubmit = (data) => {
    dispatch(
      registerUser({
        name: 'TestTest3',
        email: 'testtast4@gmail.com',
        password: 'qwert-11',
      }),
    )
    setName('')
    setEmail('')
    setPassword('')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')
  }

  const onCancel = () => {
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')
    navigate('/')
  }

  const onChange = (e) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'name':
        setName(value)
        sessionStorage.setItem('name', value)
        break
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

  return (
    <Container>
      <h2>Form Register</h2>
      {isLoading && <h3>Loading....</h3>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          name
          <input {...register('name')} value={name} onChange={onChange} />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </Container>
  )
}
