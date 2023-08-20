import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-vector/hand-drawn-woman-supermarket_23-2148099201.jpg?w=740&t=st=1670232853~exp=1670233453~hmac=5b72644ee90858c4270bd6e144be1e0dd274c2c79cc324e6da7e429dde7e8a2c")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 70%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Chooser = () => {
    const history = useNavigate();
    const adminlogin = () => {
        localStorage.clear();
        history('/login');
    }
    const managerlogin = () => {
        localStorage.clear();
        history('/login');
    }
    const userlogin = () => {
        localStorage.clear();
        history('/login');
    }
    const signup = () => {
        localStorage.clear();
        history('/signup');
    }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Button onClick={adminlogin}>ADMIN</Button>
          <Button onClick={managerlogin}>MANAGER</Button>
          <Button onClick={userlogin}>USER</Button>
          <Link >CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Chooser;