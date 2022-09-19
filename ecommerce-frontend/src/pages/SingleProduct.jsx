import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Banner from '../comps/Banner'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`
const ProductImage = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const ProductInfo = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const ProductFilters = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const SizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid purple;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const AddButton = styled.button`
    padding: 15px;
    border: 2px solid purple;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s;

    &:hover{
        background-color: #f8f4f4;
    }
`




const SingleProduct = () => {
  return (
      <Container>
          <Navbar />
          <Banner />
          <Wrapper>
              <ProductImage>
                  <Image src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/travis-scott-album-cover-2016_omwibv/travis-scott-album-cover-2016" />
              </ProductImage>
              <ProductInfo>
                  <Title>Album Cover</Title>
                  <Desc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod esse, nam quas sint reprehenderit
                      corrupti recusandae? Et impedit delectus laudantium quia quos? Enim fugit excepturi dicta consequuntur ipsa natus velit.
                  </Desc>
                  <Price>$100</Price>
                  <ProductFilters>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color="black" />
                          <FilterColor color="darkblue" />
                          <FilterColor color="gray" />
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                              <SizeOption>XS</SizeOption>
                              <SizeOption>S</SizeOption>
                              <SizeOption>M</SizeOption>
                              <SizeOption>L</SizeOption>
                              <SizeOption>XL</SizeOption>
                          </FilterSize>
                      </Filter>
                  </ProductFilters>
                  <AddContainer>
                      <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add/>
                      </AmountContainer>
                      <AddButton>ADD TO CART</AddButton>
                  </AddContainer>
              </ProductInfo>
          </Wrapper>
          <Footer />
        
    </Container>
  )
}

export default SingleProduct