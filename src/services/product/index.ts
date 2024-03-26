import axiosInstance from '@/config/axiosInstance.ts'

const getProducts = async () => {
  const response = await axiosInstance.get('/products')

  return response.data
}

export { getProducts }
