import { updateProduct } from '@/services/product'
import { Product, ProductFormValue } from '@/types/Product'
import { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

type Props = {
  product: Product
}

const ProductForm: FC<Props> = ({ product }) => {
  const [formValue, setFormValue] = useState<ProductFormValue>({
    title: product.title,
    description: product.description,
    brand: product.brand,
    price: String(product.price)
  })

  const handleFormChange = (newValue: Record<string, string>) => {
    setFormValue({
      ...formValue,
      ...newValue
    })
  }

  const handleSave = () => {
    updateProduct(product.id, formValue)
  }

  return (
    <div>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={formValue.title}
            onChange={(e) => {
              handleFormChange({
                title: e.target.value
              })
            }}
            type='email'
            placeholder='name@example.com'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            as='input'
            value={formValue.brand}
            onChange={(e) => {
              handleFormChange({
                brand: e.target.value
              })
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            as='input'
            value={formValue.price}
            onChange={(e) => {
              handleFormChange({
                price: e.target.value
              })
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={formValue.description}
            onChange={(e) => {
              handleFormChange({
                description: e.target.value
              })
            }}
          />
        </Form.Group>

        <Button
          onClick={() => {
            handleSave()
          }}
        >
          Save
        </Button>
      </Form>
    </div>
  )
}

export default ProductForm
