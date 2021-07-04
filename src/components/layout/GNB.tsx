import styled from "styled-components";

const GNB = () => {
  return (
    <StyledGNBWrapper>
      <StyledLogo>OFC</StyledLogo>
      <StyledProfile></StyledProfile>
    </StyledGNBWrapper>
  );
};

const StyledGNBWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: linear-gradient(to right, #1c7d74, #624198, #c1008f);
  align-items: center;
  padding: 0 15px;
`;

const StyledLogo = styled.div`
  color: white;
  font-weight: bold;
`;

const StyledProfile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: gray;
`;

export default GNB;
