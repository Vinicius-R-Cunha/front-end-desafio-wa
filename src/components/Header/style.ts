import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  box-sizing: border-box;
  padding: 22px 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;

  @media (max-width: 880px) {
    padding: 22px 25px;
  }

  @media (max-width: 419px) {
    padding: 15px 10px;
  }
`;

export const Button = styled.button`
  all: unset;

  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #ffffff;

  padding: 20px 25px;

  background: linear-gradient(
      120deg,
      rgba(77, 129, 213, 0.8) 0%,
      rgb(0, 71, 186) 100%
    )
    0% 0% no-repeat padding-box padding-box transparent;

  border-radius: 15px;

  cursor: pointer;

  :hover {
    background: linear-gradient(
        10deg,
        rgba(77, 129, 213, 0.8) 0%,
        rgb(0, 71, 186) 100%
      )
      0% 0% no-repeat padding-box padding-box transparent;
  }

  @media (max-width: 550px) {
    font-size: 15px;
  }

  @media (max-width: 419px) {
    font-size: 12px;
    text-align: center;
    line-height: 15px;

    padding: 8px 15px;
  }

  @media (max-width: 280px) {
    padding: 4px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  cursor: pointer;
`;

export const Pentagon = styled.div`
  width: 70px;
  height: 70px;

  font-size: 33px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #ffffff;

  box-sizing: border-box;
  padding-left: 16px;
  padding-top: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(46% 100%, 100% 72%, 95% 28%, 40% 0, 11% 67%);

  background-color: #2b67c9;

  @media (max-width: 550px) {
    width: 50px;
    height: 50px;

    font-size: 22px;
    padding-left: 12px;
  }

  @media (max-width: 419px) {
    width: 40px;
    height: 40px;

    font-size: 18px;
    padding-top: 2px;
    padding-left: 8px;
  }
`;

export const Title = styled.p`
  font-size: 33px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #1f1f1f;

  padding-top: 5px;

  span {
    color: #2b67c9;
  }

  @media (max-width: 550px) {
    font-size: 22px;
  }

  @media (max-width: 419px) {
    font-size: 18px;
    padding-top: 2px;
  }
`;
