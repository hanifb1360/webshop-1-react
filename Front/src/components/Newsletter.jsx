import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: #CFDAD2;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
letter-spacing: 10px;
font-weight: 500;
`
const Desc = styled.div`
margin-bottom: 5%;
font-size: 18px;
font-weight: 300;
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
border: 1px solid lightgrey;
display: flex;
justify-content: space-between;
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: #54B2DE;
color: #fff;
display: flex;
justify-content: center;
align-items: center;

`

const Newsletter = () => {
  return <Container>
  <Title>Newsletter</Title>
  <Desc>Get incredible offers and updates from your favorite products.</Desc>
  <InputContainer>
  <Input placeholder="Your email"/>
  <Button><Send/></Button>

  </InputContainer>
  


  </Container>;
};

export default Newsletter;
