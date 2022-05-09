import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import P1 from '../images/p1.jpg';
import { Add, Remove } from "@material-ui/icons";




const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`;
const ImageContainer= styled.div`
flex: 1;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 300;
`;
const Desc = styled.p`
font-weight: 300;
margin: 20px 0px;
`;
const Price = styled.span`
font-size: 40px;
font-weight: 100;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 14px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;

`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: 700;


`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
`;
const Button = styled.button`
padding: 10px 25px;
border: none;
background-color: #54B2DE;
color: white;
cursor: pointer;
transition: all 0.5s ease ;

&:hover {
  padding: 10px 26px;
  background-color: white;
  color: #54B2DE;
  border: 1px solid #54B2DE;
  letter-spacing: 2px;

}
`;

function Product() {
  return <Container>
  <Navbar/>
  <Announcement/>
  <Wrapper>
  <ImageContainer>
    <img src={P1}/>
  </ImageContainer>
  <InfoContainer>
  <Title>Kango Jacket</Title>
  <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere natus amet necessitatibus temporibus sequi accusamus consequatur. Sunt asperiores error eveniet, culpa quam magnam distinctio, ipsa doloremque aliquid voluptatibus amet!</Desc>
  <Price>$ 200</Price>
  <FilterContainer>
  <Filter>
     <FilterTitle>Color</FilterTitle>
     <FilterColor color="black"/>
     <FilterColor color="#40A9D6"/>
     <FilterColor color="#BBBBBB"/>
   </Filter>

   <Filter>
     <FilterTitle>Size</FilterTitle>
     <FilterSize>
       <FilterSizeOption>XS</FilterSizeOption>
       <FilterSizeOption>S</FilterSizeOption>
       <FilterSizeOption>M</FilterSizeOption>
       <FilterSizeOption>L</FilterSizeOption>
       <FilterSizeOption>XL</FilterSizeOption>
       <FilterSizeOption>XXL</FilterSizeOption>
     </FilterSize>
   </Filter>
  </FilterContainer>

  <AddContainer>
  <AmountContainer>
    <Remove/>
    <Amount>1</Amount>
    <Add/>
  </AmountContainer>
  <Button>ADD to CART</Button>
  </AddContainer>

   

  </InfoContainer>

  </Wrapper>
  <Newsletter/>
  <Footer/>


      
  </Container>;
}

export default Product;
