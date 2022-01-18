import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { onError } from '../../utilits/messages'
import { useLoginUserMutation } from '../../redux/Users/users-reducer'

export default function LoginUser() {
  const [email, setEmail] = useState(localStorage.getItem('email') ?? '')
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const [
    loginUserHook,
    { isLoading, isSuccess, error },
  ] = useLoginUserMutation()

  const onSubmit = async (data) => {
    loginUserHook({
      email: 'testtast4@gmail.com',
      password: 'qwert-11',
    })
  }

  const onCancel = () => {
    navigate('/')
  }

  const onChange = (e) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'email':
        setEmail(value)
        localStorage.setItem('email', value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        return
    }
  }

  useEffect(() => {
    if (error) {
      onError(error.data)
    }
  }, [error])

  useEffect(() => {
    if (isSuccess) {
      setEmail('')
      setPassword('')
      navigate('/contacts')
    }
  }, [isSuccess, navigate])

  return (
    <>
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
    </>
  )
}
