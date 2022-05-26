import styled from "styled-components"
import img from '../images/back2.jpg';

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
width: 40%;
border-radius: 10px;
background-color: rgba(41, 117, 154, 0.6);
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
align-items: center;
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
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
color: white;

`
const Button = styled.button`
width: 40%;
border: none;
border-radius: 10px;
padding: 15px 20px;
background-color: #BFEAEA;
color: #1A596A;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>

        </Wrapper>
    </Container>
  )
}

export default Register