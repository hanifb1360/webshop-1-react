import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 3px;
padding: 1%;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 90%;
top: 0;
left: 0;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
font-size: 1.5rem;
margin-bottom: 30px;



`
const Title = styled.h1`
color: #fff;
letter-spacing: 5px;
margin-bottom: 20px;

`
const Button = styled.button`
border: none;
padding: 10px 40px;
color: grey;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
transition: all 0.5s ease;

&:hover{
  background-color: #AED6F1;
  padding: 10px 50px;
  letter-spacing: 4px;
}
`


const CategoryItem = ({item}) => {
  return (
  <Container>
      <Image src={item.img}/>
      <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
      </Info>
  </Container>
  )
}

export default CategoryItem;
