import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/services/product'
import { Table, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductListPage() {
  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false)

  const result = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const products = result.data || []

  console.log(products)

  const handleClickBtnDelete = () => {
    setOpenModalConfirm(!openModalConfirm)
  }

  return (
    <div>
      Product list
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>
                  <div className='product_table_action'>
                    <Link to={`/admin/products/${product.id}`}>
                      <Button variant='secondary'>Edit</Button>
                    </Link>
                    <Button variant='danger' onClick={() => handleClickBtnDelete()}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Modal show={openModalConfirm} onHide={() => setOpenModalConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setOpenModalConfirm(false)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => setOpenModalConfirm(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
