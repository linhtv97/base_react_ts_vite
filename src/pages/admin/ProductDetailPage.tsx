import ProductForm from '@/components/ProductForm'
import { getProduct } from '@/services/product'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage: FC = () => {
  const { id } = useParams()

  const result = useQuery({
    queryKey: ['product'],
    queryFn: () => (id ? getProduct(id) : undefined)
  })

  const product = result.data

  return (
    <div>
      Product detail page
      {product && <ProductForm product={product} />}
    </div>
  )
}

export default ProductDetailPage
