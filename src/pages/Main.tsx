import styled from "styled-components";

const Main = () => {
  return (
    <>
      <StyledTitleWrapper>
        <StyledTitle>My Review,</StyledTitle>
        <StyledDate>July 2021</StyledDate>
      </StyledTitleWrapper>
      <StyledGoalWrapper>
        <StyledSubTitle>나의 기대치</StyledSubTitle>
        <StyledGoal>
          <tbody>
            <tr>
              <td>이런 걸 잘 해요</td>
              <td>친절한 정보 공유, 프로젝트 기획 이슈 파악</td>
            </tr>
            <tr>
              <td>이런 것을 발전시키고 싶어요</td>
              <td>자유로운 코드 리뷰</td>
            </tr>
            <tr>
              <td>이런 역할을 하고 싶어요</td>
              <td>함께 일하면 좋은 동료</td>
            </tr>
          </tbody>
        </StyledGoal>
      </StyledGoalWrapper>
      <div>
        <StyledSubTitle>나의 이번 달</StyledSubTitle>
        <StyledSubDescription>서로 돕고 함께 성장합니다.</StyledSubDescription>
        <StyledDescription>
          <p>혼자서는 우리의 비즈니스 목표를 달성할 수가 없습니다.</p>
          <p>
            일이 흘러가는 큰 흐름 안에서 제품을 만드는 모두의 노력이 한 데에
            어우러져야만 합니다.
          </p>
          <p>그래서 분업이 아닌, 협업을 합니다.</p>
          <p>
            혼자가 아닌 함께 해야 하는 일이기에 내가 아는 것을 동료와 나눌 때,
            그래서 함께 성장할 때, 전체의 힘이 더 빠르게 강해질 수 있다고
            믿습니다.
          </p>
          <p>
            우리는 배운 것을 동료와 기꺼이 나눠 함께 성장하고, 일의 완성을
            향해서 조건과 경계 없이서로 돕습니다.
          </p>
        </StyledDescription>
        <StyledStatusWrapper>
          <StyledStatus>분발할게요</StyledStatus>
          <StyledStatus isActive>잘했어요</StyledStatus>
          <StyledStatus>쩔었어요</StyledStatus>
        </StyledStatusWrapper>
      </div>
    </>
  );
};

const StyledTitleWrapper = styled.div`
  color: #007268;
  display: flex;
`;

const StyledTitle = styled.h1`
  font-weight: bold;
  margin-right: 15px;
`;

const StyledDate = styled.h1`
  font-weight: normal;
`;

const StyledGoalWrapper = styled.div`
  margin-bottom: 50px;
`;

const StyledSubTitle = styled.h2`
  color: #4c4f8f;
`;

const StyledSubDescription = styled.h3`
  color: #4c4f8f;
`;

const StyledGoal = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 1px 2px 4px #c1c1c1;
  font-size: 13px;
  tr {
    height: 50px;
    border-bottom: 1px solid #edeef8;
    &:last-child {
      border: none;
    }
  }
  td {
    padding: 15px;
    background-color: white;
    color: #5e5e5e;
    &:first-child {
      background-color: #4c4f8f;
      color: white;
      width: 150px;
    }
  }
`;

const StyledDescription = styled.div`
  color: #4e4e4e;
  font-size: 12px;
  p {
    margin: 5px 0;
    &:last-child {
      margin-top: 25px;
      margin-bottom: 10px;
    }
  }
`;

const StyledStatusWrapper = styled.div`
  background-color: white;
  box-shadow: 1px 2px 4px #c1c1c1;
  /* FIXME: 일단 모양만 */
  display: flex;
  justify-content: space-between;
  border-radius: 1em;
  height: 90px;
  align-items: center;
  padding: 0 20px;
`;

const StyledStatus = styled.div<{ isActive?: boolean }>`
  color: ${({ isActive }) => (isActive ? "#b6008f" : "#9e9e9e")};
  font-size: 11px;
  font-weight: bold;
`;

export default Main;
