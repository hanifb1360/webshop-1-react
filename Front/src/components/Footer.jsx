
import { AlternateEmailOutlined, Facebook, Instagram, LinkedIn, LocalPhoneOutlined, MapOutlined, Pinterest } from '@material-ui/icons';
import styled from 'styled-components';
import payment from "../images/payment.png"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
gap: 20%;
align-items: center;
`
const SocialIcon = styled.div`

`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;

align-items: center;

`
const Payment = styled.img`
width: 50%;
`




const Footer = () => {
  return <Container>
  <Left><Logo>MEREX.</Logo>
  <Desc>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora corporis placeat ut veritatis modi, sit suscipit id illo, eos expedita aspernatur fugiat nemo sequi ducimus ipsam deserunt cupiditate explicabo! Temporibus?
  </Desc>
  <SocialContainer>
  <SocialIcon><Facebook/></SocialIcon>
  <SocialIcon><Instagram/></SocialIcon>
  <SocialIcon><LinkedIn/></SocialIcon>
  <SocialIcon><Pinterest/></SocialIcon>
  </SocialContainer>
  </Left>


  <Center>
  <Title></Title>
  <List>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>Men</ListItem>
      <ListItem>Women</ListItem>
      <ListItem>Children</ListItem>
      <ListItem>My Account</ListItem>
      <ListItem>Order Tracking</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Terms</ListItem>
  </List>
  </Center>

  <Right>
      <Title>Contact</Title>
      <ContactItem><MapOutlined style={{marginRight:"10px"}}/>Kungsgatan 27, 111 56 Stockholm</ContactItem>
      <ContactItem><LocalPhoneOutlined style={{marginRight:"10px"}}/>+46 765 760 186</ContactItem>
      <ContactItem><AlternateEmailOutlined style={{marginRight:"10px"}}/>contact@merex.com</ContactItem>
      <Payment src={payment}/>
  </Right>

  </Container>;
};

export default Footer;
