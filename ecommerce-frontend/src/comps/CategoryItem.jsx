import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const ItemContainer = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}

`
const ItemInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ItemTitle = styled.h1`
    color: white;
    margin-bottom: 20px;
`

const ItemButton = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
      <ItemContainer>
          <ItemImage src={item.img} />
          <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemButton>SHOP NOW</ItemButton>
          </ItemInfo>
      </ItemContainer>
  )
}

export default CategoryItem