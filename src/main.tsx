import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetailPage from '@/pages/admin/ProductDetailPage'
import ProductListPage from '@/pages/admin/ProductListPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/products',
    element: <div>Products</div>
  },
  {
    path: '/products/:id',
    element: <div>Product detail</div>
  },
  {
    path: '/admin/products',
    element: <ProductListPage />
  },
  {
    path: '/admin/products/:id',
    element: <ProductDetailPage />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
