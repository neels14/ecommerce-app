import { FavoriteBorderOutlined, LocalMallOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const ItemInfo = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const ItemContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${ItemInfo}{
        opacity: 1;
    }
`
const ItemCircle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const ItemImage = styled.img`
    height: 75%;
    z-index: 2;
`
const ItemIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const ProductItem = ({item}) => {
  return (
      <ItemContainer>
          <ItemCircle />
          <ItemImage src={item.img} />
          <ItemInfo>
              <ItemIcon>
                  <LocalMallOutlined/>
              </ItemIcon>
              <ItemIcon>
                  <Search/>
              </ItemIcon>
              <ItemIcon>
                  <FavoriteBorderOutlined/>
              </ItemIcon>
          </ItemInfo>
    </ItemContainer>
  )
}

export default ProductItem