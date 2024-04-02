import { signIn } from '@/services/auth'
import { SignInForm } from '@/types/Auth'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SignInPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignInForm>()

  const onSubmit = (formValue: SignInForm) => {
    signIn(formValue).then((res) => {
      const accessToken = res.accessToken
      window.sessionStorage.setItem('access-token', accessToken)
      toast('Sign in successfully!')
    })
  }

  return (
    <div>
      <h1>Sign in page</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name</Form.Label>
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

        <Button type='submit'>Register</Button>
      </Form>
    </div>
  )
}

export default SignInPage
