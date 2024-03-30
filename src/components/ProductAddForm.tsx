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

  console.log(errors, 'errors')

  const onSubmit = (formValue: ProductFormValue) => {
    createProduct(formValue)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            as='input'
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
            isValid={false}
          />
          {errors?.title && <div className='text-red-600'>{errors?.title?.message}</div>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            as='input'
            {...register('brand', {
              required: 'Phai nhap brand'
            })}
          />
          {errors?.brand && <div className='text-red-600'>{errors?.brand?.message}</div>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            as='input'
            {...register('price', {
              required: 'Phai nhap price'
            })}
          />
          {errors?.price && <div className='text-red-600'>{errors?.price?.message}</div>}
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
          />
          {errors?.description && <div className='text-red-600'>{errors?.description?.message}</div>}
        </Form.Group>

        <Button type='submit' variant='primary' onClick={() => {}}>
          Save
        </Button>
      </Form>
    </div>
  )
}

export default ProductAddForm
