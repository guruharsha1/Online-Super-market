import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;


`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    
    <Container>
      <Left>
        <Logo>GROCERYSTOP</Logo>
        <Desc>
        Did you ever think that the freshest fruits and vegetables, high-quality pulses and grains, dairy products, and hundreds of branded items could be hand-picked and delivered to your door at the touch of a button?Well it's possible with our GROCERYSTOP. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
       
          <ListItem 
           onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }} >
             <a style={{textDecoration: 'none'}}  href="/About">
            Home
            </a>
        </ListItem>
        <ListItem>
          <NavLink to="/Cart" style={{textDecoration: 'none'}}  >Cart</NavLink>
          </ListItem>
          <ListItem>
          <a style={{textDecoration: 'none'}}  href="/login">
             Login
          </a>
          </ListItem>
          <ListItem>
          <a style={{textDecoration: 'none'}}  href="/signup">
             Register
          </a>
         
          </ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Vyas 69,Bits Hyderabad,500078
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@GROCERYSTOP.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;