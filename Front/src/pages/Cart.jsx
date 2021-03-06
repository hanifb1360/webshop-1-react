import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img from "../images/nike.png";


const Container = styled.div`

`;
const Wrapper= styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info= styled.div`
flex: 3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const ImageContainer= styled.div`

width: 200px;
height: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;
const ProductSize = styled.span`


`;
const PriceDetail = styled.div`
flex: 1;
`;
const Summary = styled.div`
flex: 1;
`;
function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
          <Wrapper>
              <Title>Your Bag</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      <Product>
                      
                          <ProductDetail>
                          <ImageContainer><img src={img}/></ImageContainer>
                              <Details>
                                  <ProductName><b>Product:</b>Alter Shoe 25</ProductName>
                                  <ProductId><b>ID:</b>762534426</ProductId>
                                  <ProductColor color="black"/>
                                  <ProductSize><b>Size:</b>37.5</ProductSize>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              Price
                          </PriceDetail>
                      </Product>
                  </Info>
                  <Summary>Summary</Summary>
              </Bottom>
          </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart