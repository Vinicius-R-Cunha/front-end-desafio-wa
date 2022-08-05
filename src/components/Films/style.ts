import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  box-sizing: border-box;
  padding: 60px 50px;

  background: rgb(249, 249, 249);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding: 60px 0;
  }
`;

export const CentralizedDiv = styled.div`
  min-width: 1400px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-column-gap: 25px;
  grid-row-gap: 40px;

  justify-content: center;

  @media (max-width: 1400px) {
    min-width: auto;
    width: fit-content;

    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const Film = styled.div`
  width: 650px;
  height: 380px;

  display: flex;
  gap: 15px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(249, 249, 249);
  }

  :hover {
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(
          120deg,
          rgba(77, 129, 213, 0.8) 0%,
          rgb(0, 71, 186) 100%
        )
        0% 0% no-repeat padding-box padding-box transparent;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;

    flex-direction: column;
  }
`;

export const Banner = styled.img`
  width: 270px;

  position: sticky;
  top: 0;

  object-fit: cover;

  @media (max-width: 700px) {
    width: 100%;

    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 15px;
  gap: 10px;
`;

export const Title = styled.p`
  font-size: 30px;

  @media (max-width: 499px) {
    font-size: 20px;
  }
`;

export const Director = styled.p``;

export const Description = styled.p`
  line-height: 22px;
  letter-spacing: 0.5px;

  text-align: justify;

  margin-top: 40px;

  @media (max-width: 499px) {
    margin-top: 20px;
  }
`;
