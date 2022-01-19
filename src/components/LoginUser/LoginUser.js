//created by Irina Shushkevych
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { onError } from '../../utilits/messages'
import { useLoginUserMutation } from '../../redux/Users/users-reducer'
import { Form } from '../FormStyle/Form.styled'
import { Label } from '../FormStyle/Label.styled'
import { Input } from '../FormStyle/Input.styled'
import { Placeholder } from '../FormStyle/Placeholder.styled'

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
    loginUserHook({ email, password })
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <Input
            type="email"
            {...register('email', { required: true })}
            onChange={onChange}
            value={email}
          />
          <Placeholder>E-mail</Placeholder>
          {errors.email?.type === 'required' && 'Email is required'}
        </Label>
        <Label>
          <Input
            type="password"
            {...register('password', { required: true })}
            onChange={onChange}
            value={password}
          />
          <Placeholder>Password</Placeholder>
          {errors.password?.type === 'required' && 'Password is required'}
        </Label>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Log in</button>
      </Form>
    </>
  )
}
