import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Container from '../components/Container/Container'
import { registerUser } from '../redux/Users/users-operation'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log(data)
    dispatch(
      registerUser({
        name: 'TestTest2',
        email: 'testtast2@gmail.com',
        password: 'qwert-11',
      }),
    )
  }

  return (
    <Container>
      <h2>Form Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          name
          <input {...register('name')} />
        </label>
        <label>
          email
          <input {...register('email', { required: true })} />
          {errors.email?.type === 'required' && 'Email is required'}
        </label>
        <label>
          password
          <input {...register('password', { required: true })} />
          {errors.password?.type === 'required' && 'Password is required'}
        </label>
        <button
          type="button"
          onClick={() => {
            navigate('/')
          }}
        >
          Cancel
        </button>
        <button type="submit">Register</button>
      </form>
    </Container>
  )
}
