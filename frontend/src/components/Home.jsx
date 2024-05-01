import React from 'react';
import styled from 'styled-components';
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";

const lorem = new LoremIpsum();

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f3f3f3;
  color: black;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin-right: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const GuestButton = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SchoolInfo = styled.div`
  margin-top: 20px;
`;

const SchoolImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px; /* Add margin to move image slightly below the text */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Home = () => {
  const loremText = lorem.generateParagraphs(1);

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton>Login</LoginButton>
          <GuestButton>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>Hospital Management System</Title>
          <p>{loremText}</p>
        </SchoolInfo>
        <SchoolImage src={bg} alt="Hospital" />
      </HomeContainer>
    </>
  );
};

export default Home;
