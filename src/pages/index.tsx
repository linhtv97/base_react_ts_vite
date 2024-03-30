import Layout from '@/layouts/Layout'
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/services/product'
import { Link } from 'react-router-dom'

type Props = {}

const Home: FC<Props> = () => {
  const result = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const products = result.data || []

  return (
    <Layout>
      <ul className='flex flex-wrap gap-x-3 gap-y-3 justify-center align-middle'>
        {products.map((product) => (
          <Link to={'/products/' + product.id}>
            <div className='w-[220px] bg-white border rounded-sm text-black'>
              <img className='h-[100px] w-full' src={product.thumbnail} alt={product.title} />

              <span className='text-xs text-black'>{product.title}</span>
              <br />
              <span className='text-xs'>
                Từ: <span className='text-red-600'>{product.price} đ</span>
              </span>
              <br />

              <span className='text-sm'>Brand: {product.brand}</span>
            </div>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export default Home
