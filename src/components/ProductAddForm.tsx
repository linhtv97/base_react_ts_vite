import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import { ProductFormValue } from '@/types/Product'
import { createProduct } from '@/services/product'

const ProductAddForm = () => {
  const useFormResult = useForm<ProductFormValue>()
  const register = useFormResult.register
  const handleSubmit = useFormResult.handleSubmit
  const formState = useFormResult.formState
  const errors = formState.errors

  const onSubmit = (formValue: ProductFormValue) => {
    createProduct(formValue)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            as={'input'}
            {...register('title', {
              required: 'Phai nhap input nay',
              minLength: {
                value: 5,
                message: 'So luong ki tu phai lon hon 5'
              },
              maxLength: {
                value: 20,
                message: 'So luong ki tu nho lon hon 20'
              }
            })}
            isInvalid={!!errors?.title}
          />
          <Form.Control.Feedback type='invalid'>{errors?.title?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            as='input'
            {...register('brand', {
              required: 'Phai nhap brand'
            })}
            isInvalid={Boolean(errors?.brand)}
          />
          <Form.Control.Feedback type='invalid'>{errors?.brand?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            as='input'
            {...register('price', {
              required: 'Phai nhap price',
              min: {
                value: 0,
                message: 'Gia phai lon hon 0'
              }
            })}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type='invalid'>{errors?.price?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            {...register('description', {
              required: 'Phai nhap description',
              minLength: {
                value: 20,
                message: 'Toi thieu 20 ki tu'
              }
            })}
            isInvalid={Boolean(errors?.description)}
          />
          <Form.Control.Feedback type='invalid'>{errors?.description?.message}</Form.Control.Feedback>
        </Form.Group>

        <Button type='submit' variant='primary' onClick={() => {}}>
          Save
        </Button>
      </Form>
    </div>
  )
}

export default ProductAddForm
