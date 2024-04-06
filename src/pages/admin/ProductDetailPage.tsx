import ProductForm from '@/components/ProductForm'
import { getProduct } from '@/services/product'
import { Product } from '@/types/Product'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage: FC = () => {
  const { id } = useParams()

  const {
    data: product,
    error,
    isLoading
  } = useQuery<Product | undefined, AxiosError>({
    queryKey: ['product'],
    queryFn: () => (id ? getProduct(id) : undefined),
    retry: 0
  })

  console.log(error, 'error')

  return (
    <div
      style={{
        fontSize: 50
      }}
    >
      Product detail page
      {isLoading && <p>Loading....</p>}
      {error?.response?.status === 404 && <p>Product not found!</p>}
      {product && <ProductForm product={product} />}
    </div>
  )
}

export default ProductDetailPage
