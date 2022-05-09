import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
opacity: 0;
z-index: 3;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
transition: all 0.7s ease;
display: flex;
justify-content: center;
align-items: center;


`




const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
&:hover ${Info} {
  opacity: 1;
}


`

const Image = styled.img`

height: 100%;
object-fit: cover;
position: absolute;
z-index: 2;

`

const Icon = styled.div`
color: #fff;
height: 40px;
width: 40px;
background-color: rgba(0,0,0,0.6);
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
transition: all 0.6s ease;


&:hover{
background-color: #AED6F1;
transform: scale(1.1);
color: black;
}

`;
const Product = ({item}) => {
  return <Container>
   
   
   <Image src={item.img}/>
   <Info>
       <Icon><ShoppingCartOutlined/></Icon>
       <Icon><SearchOutlined/></Icon>
       <Icon><FavoriteBorderOutlined/></Icon>
   </Info>

  </Container>;
};

export default Product;
