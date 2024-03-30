import { updateProduct } from '@/services/product'
import { Product, ProductFormValue } from '@/types/Product'
import { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

  const [saving, setSaving] = useState<boolean>(false)

  const handleFormChange = (newValue: Record<string, string>) => {
    setFormValue({
      ...formValue,
      ...newValue
    })
  }

  const handleSave = () => {
    // khi người nhấn submit

    if (!formValue.title) {
      alert('Khong duoc de trong name')
      return
    }

    setSaving(true)
    updateProduct(product.id, formValue)
      .then(function () {
        setSaving(false)
        navigate('/admin/products')
      })
      .catch((e: unknown) => {
        setSaving(false)
        console.log(e)
      })
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
          disabled={saving}
          variant='primary'
          onClick={() => {
            handleSave()
          }}
        >
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </Form>
    </div>
  )
}

export default ProductForm
