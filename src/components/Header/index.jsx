import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0px 20px;
  height: 125px;
  border-bottom: 2px solid #5b5d61;

  box-shadow: rgba(140, 90, 201, 0.8) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const Logo = styled.img`
  height: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 35px;
  border: ${({ $primary }) => ($primary ? '2px solid #7c7f82' : '3px solid #fff')};
  background-color: ${({ $primary }) => ($primary ? '#000' : 'transparent')};
  color: ${({ $primary }) => ($primary ? '#7d22d1' : '#a9a1a1')};
  border-radius: 45px;
  cursor: pointer;
  transition: all 0.6s;
  font-size: 1.2em;
  font-weight: 520;
  box-shadow: ${({ $primary }) => ($primary ? 'inset 0 0 15px rgba(209, 228, 248, 0.8)' : 'none')};

  &:hover {
    background-color: ${({ $primary }) => ($primary ? '#333' : '#a9a1a1')};
    color: ${({ $primary }) => ($primary ? '#a9a1a1' : '#000')};
  }
`;

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

    return (
      <HeaderContainer>
        <Logo src="../../img/logo.png" alt="Logo" />
        <ButtonsContainer>
          <StyledButton $primary={location.pathname === "/"} onClick={() => handleNavigation("/")}>HOME</StyledButton>
          <StyledButton $primary={location.pathname === "/nuevo-video"} onClick={() => handleNavigation("/nuevo-video")}>NUEVO VIDEO</StyledButton>
        </ButtonsContainer>
      </HeaderContainer>
    );
  };
  

export default Header;