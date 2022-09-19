import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5), 
    rgba(255,255,255,0.5)
    ),
    url("https://plexcollectionposters.com/images/2021/05/16/background-images-for-login-page3bc68c53b0db224b.jpg") 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}

`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
        <LoginContainer>
        <Wrapper>
            <Title>WELCOME BACK</Title>
            <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
                  <Button>LOGIN</Button>
                  <Link>FORGOT PASSWORD?</Link>
                  <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        </LoginContainer>
  )
}

export default Login