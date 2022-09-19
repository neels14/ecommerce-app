import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationCityOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const FooterContainer = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}

`
const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Socials = styled.div`
    display: flex;
`

const SocialsIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`

const RightSection = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fbf5f5" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const CenterSection = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const CenterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const CenterListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Footer = () => {
  return (
      <FooterContainer>
          <LeftSection>
              <Logo>ArtByKhushi</Logo>
              <Desc>Follow for custom art!</Desc>
              <Socials>
                  <SocialsIcon color='3B5999'>
                      <Facebook />
                  </SocialsIcon>
                  <SocialsIcon color='E4405F'>
                      <Instagram />
                  </SocialsIcon>
              </Socials>
              
          </LeftSection>

          <CenterSection>
              <Title>Useful Links</Title>
              <CenterList>
                  <CenterListItem>Home</CenterListItem>
                  <CenterListItem>Cart</CenterListItem>
                  <CenterListItem>Category 1</CenterListItem>
                  <CenterListItem>Category 2</CenterListItem>
                  <CenterListItem>Category 3</CenterListItem>
                  <CenterListItem>My Account</CenterListItem>
                  <CenterListItem>Order Tracking</CenterListItem>
                  <CenterListItem>Wishlist</CenterListItem>
                  <CenterListItem>Terms</CenterListItem>
              </CenterList>
              
          </CenterSection>

          <RightSection>
              <Title>Contact</Title>
              <ContactItem>
                  <LocationCityOutlined style={{ marginRight: "10px" }} /> Address
              </ContactItem>
              <ContactItem>
                  <LocalPhoneOutlined style={{ marginRight: "10px" }} /> +1 999 999 9999
              </ContactItem>
              <ContactItem>
                  <EmailOutlined style={{ marginRight: "10px" }} /> Email
              </ContactItem>
              
          </RightSection>
    </FooterContainer>
  )
}

export default Footer