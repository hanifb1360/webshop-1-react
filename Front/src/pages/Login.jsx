import styled from "styled-components"


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`

padding: 20px;
width: 40%;
background-color: lightgray;


`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
align-items: center;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;


`
const Link = styled.a`

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