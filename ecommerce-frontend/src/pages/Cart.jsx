import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Banner from '../comps/Banner'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import { mobile } from '../responsive'

const CartContainer = styled.div`
    
`

const CartWrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductInfo = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const ProductImage = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Amount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 5px 0px;
`

const ProductSummary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;

`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const ItemText = styled.span`
    
`

const ItemPrice = styled.span`
    
`

const CheckoutButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {
  return (
      <CartContainer>
          <Navbar />
          <Banner />
          <CartWrapper>
              <Title>YOUR CART</Title>
              <TopSection>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag (2)</TopText>
                      <TopText>Your Wishlist (0)</TopText>
                  </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
              </TopSection>
              <BottomSection>
                  <ProductInfo>
                      <Product>
                          <ProductDetail>
                              <ProductImage src="https://static.vecteezy.com/system/resources/previews/005/265/429/original/exotic-betta-fish-halfmoon-beautiful-color-artwork-illustration-isolated-on-water-background-design-can-for-drawing-book-or-element-for-product-vector.jpg" />
                              <Details>
                                  <ProductName><b>Product: </b>ALBUM COVER ARTWORK</ProductName>
                                  <ProductId><b>ID: </b>9393939393</ProductId>
                                  <ProductColor color="black"/>
                                  <ProductSize><b>Size: </b>20.5</ProductSize>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmount>
                                  <Add />
                                  <Amount>2</Amount>
                                  <Remove />
                              </ProductAmount>
                              <ProductPrice>
                                  $20
                              </ProductPrice>
                          </PriceDetail>
                      </Product>
                      <Hr />
                      <Product>
                          <ProductDetail>
                              <ProductImage src="https://static.vecteezy.com/system/resources/previews/005/265/429/original/exotic-betta-fish-halfmoon-beautiful-color-artwork-illustration-isolated-on-water-background-design-can-for-drawing-book-or-element-for-product-vector.jpg" />
                              <Details>
                                  <ProductName><b>Product: </b>ALBUM COVER ARTWORK</ProductName>
                                  <ProductId><b>ID: </b>9393939393</ProductId>
                                  <ProductColor color="black"/>
                                  <ProductSize><b>Size: </b>20.5</ProductSize>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmount>
                                  <Add />
                                  <Amount>2</Amount>
                                  <Remove />
                              </ProductAmount>
                              <ProductPrice>
                                  $ 20
                              </ProductPrice>
                          </PriceDetail>
                      </Product>
                  </ProductInfo>
                  <ProductSummary>
                      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryItem>
                          <ItemText>Subtotal</ItemText>
                          <ItemPrice>$ 20</ItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <ItemText>Estimated Shipping</ItemText>
                          <ItemPrice>$ 5</ItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <ItemText>Shipping Discount</ItemText>
                          <ItemPrice>$ -5</ItemPrice>
                      </SummaryItem>
                      <SummaryItem type="total">
                          <ItemText>Total</ItemText>
                          <ItemPrice>$ 20</ItemPrice>
                      </SummaryItem>
                      <CheckoutButton>CHECKOUT NOW</CheckoutButton>
                  </ProductSummary>
              </BottomSection>
          </CartWrapper>
          <Footer/>
    </CartContainer>
  )
}

export default Cart