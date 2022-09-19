import React from 'react'
import styled from 'styled-components'
import { bestSellers } from "../data"
import ProductItem from './ProductItem'

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

const Products = () => {
  return (
      <ProductsContainer>
          {bestSellers.map(item => (
              <ProductItem item={item} key={item.id} />
          ))}
    </ProductsContainer>
  )
}

export default Products