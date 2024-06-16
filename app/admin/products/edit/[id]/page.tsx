import ProductForm from '@/components/admin/productForm'
import { useParams } from 'next/navigation';
import React from 'react'

const EditProduct = () => {
  const {id} = useParams<{ id: string}>();
  return (
    <ProductForm edit={id} />
  )
}

export default EditProduct