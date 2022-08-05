import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  background: rgb(249, 249, 249);
`;

export const InsideContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Page = styled.div`
  width: 35px;
  height: 35px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
      120deg,
      rgba(77, 129, 213, 0.8) 0%,
      rgb(0, 71, 186) 100%
    )
    0% 0% no-repeat padding-box padding-box transparent;

  border-radius: 12px;

  cursor: pointer;
`;
