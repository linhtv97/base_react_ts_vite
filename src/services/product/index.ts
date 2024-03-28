import axiosInstance from '@/config/axiosInstance.ts'
import { Product, ProductFormValue } from '@/types/Product'

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/products')

  return response.data
}

const getProduct = async (id: string): Promise<Product> => {
  const response = await axiosInstance.get('/products/' + id)
  return response.data
}

const updateProduct =  (id: string, newValue: ProductFormValue): Promise<Product> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      axiosInstance.put(`/products/${id}`, newValue).then(res => {
        resolve( res.data)
       })
       .catch(e => {
        throw e
       })
    }, 200)
  })

}

export { getProducts, getProduct, updateProduct }
