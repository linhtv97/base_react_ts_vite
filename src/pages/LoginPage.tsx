import { login } from '@/services/auth'
import { LoginForm } from '@/types/Auth'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginForm>()

  const onSubmit = (formValue: LoginForm) => {
    login(formValue).then((res) => {
      const accessToken = res.accessToken
      window.sessionStorage.setItem('access-token', accessToken)
      toast('Login successfully!')

      navigate('/')
    })
  }

  return (
    <div>
      <h1>Login page</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            as={'input'}
            {...register('email', {
              required: 'Please type your email!',
              pattern: {
                value: new RegExp(/^\S+@\S+$/i),
                message: 'Email not valid'!
              }
            })}
            isInvalid={!!errors?.email}
          />
          <Form.Control.Feedback type='invalid'>{errors?.email?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            as={'input'}
            {...register('password', {
              required: 'Please type your password!',
              minLength: {
                value: 8,
                message: 'Min length by 8 chars'
              }
            })}
            isInvalid={!!errors?.password}
          />
          <Form.Control.Feedback type='invalid'>{errors?.password?.message}</Form.Control.Feedback>
        </Form.Group>

        <div
          style={{
            display: 'flex',
            gap: 10
          }}
        >
          <Link to='/sign-in'>
            <Button>Sign in now</Button>
          </Link>
          <Button type='submit'>Login</Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginPage

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBob25ndHEuaGIrMUBnbWFpbC5jb20yMiIsImlhdCI6MTcxMjA2MjkwNywiZXhwIjoxNzEyMDY2NTA3LCJzdWIiOiI4In0.k1ttoVxgh8tnkSGYi9ebArtfebxcHRoi9IFq8szGj-w
