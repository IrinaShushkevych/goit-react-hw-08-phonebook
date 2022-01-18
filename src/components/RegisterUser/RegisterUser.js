import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { onError } from '../../utilits/messages'
import { useRegisterUserMutation } from '../../redux/Users/users-reducer'

export default function RegisterUser() {
  const [name, setName] = useState(sessionStorage.getItem('name') ?? '')
  const [email, setEmail] = useState(sessionStorage.getItem('email') ?? '')
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [registerUserHook, { isLoading }] = useRegisterUserMutation()

  const onSubmit = async (data) => {
    try {
      const dataHook = registerUserHook({
        name: 'TestTest8',
        email: 'testtast8@gmail.com',
        password: 'qwert-11',
      })
      setName('')
      setEmail('')
      setPassword('')
      sessionStorage.removeItem('name')
      sessionStorage.removeItem('email')
    } catch (error) {
      onError(error.message)
    }
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

  return (
    <>
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
    </>
  )
}