import { Badge } from '@material-ui/core'
import { LocalMallOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

// Styled Components
const NavContainer = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    
`
const NavWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
    
`
const LeftSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const RightSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: 2 })}
`
const CenterSection = styled.div`
    flex: 1;
    text-align: center;
`
const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchBox = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "5px", marginRight: "10px", fontSize: "10px"})}

`
const SearchInput = styled.input`
    border: none;
    ${mobile({ width: "50px", fontSize: "10px"})}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
`

const NavItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "5px" })}
`

const Navbar = () => {
    return (
        <NavContainer>
            <NavWrapper>
                <LeftSection>
                    <Lang>EN</Lang>
                    <SearchBox>
                        <SearchInput placeholder="Search..." />
                        <Search style={{color:"blue", fontSize:16}} />
                    </SearchBox>
                </LeftSection>

                <CenterSection>
                    <Logo>ArtByKhushi</Logo>
                </CenterSection>

                <RightSection>
                    <NavItem>Register</NavItem>
                    <NavItem>Sign In</NavItem>
                    <NavItem>
                        <Badge badgeContent={4} color="primary">
                            <LocalMallOutlined />
                        </Badge>
                    </NavItem>
                </RightSection>
            </NavWrapper>
        </NavContainer>
    )
}

export default Navbar