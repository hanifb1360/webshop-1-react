import styled from "styled-components"

import img from '../images/back1.jpg';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
),
url(${img});
background-size: cover;


`
const Wrapper = styled.div`

padding: 20px;
width: 30%;
border-radius: 10px;
background-color: rgba(154, 41, 138, 0.6);
`

const Form = styled.form`
display: flex;
flex-direction: column;

`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
color: white;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 10px;
border: none;
`

const Button = styled.button`
width: 40%;
border: none;
border-radius: 10px;
padding: 15px 20px;
background-color: #BFEAEA;
color: #1A596A;
cursor: pointer;
margin: 15px 0px;
`

const Link = styled.a`

color: white;
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
font-weight: 300;
letter-spacing: 1px;
`


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                
                
                <Button>LOGIN</Button>
                <Link>I forgot my password</Link>
                <Link>Create a new account</Link>

            </Form>

        </Wrapper>
    </Container>
  )
}

export default Login