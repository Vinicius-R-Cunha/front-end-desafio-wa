import {
  Container,
  CentralizedDiv,
  Film,
  Banner,
  Info,
  Title,
  Director,
  Description,
} from "./style";

export default function Films({ filmsArray }: any) {
  console.log(filmsArray);

  if (!filmsArray) return <></>;

  return (
    <Container>
      <CentralizedDiv>
        {filmsArray.map((film: any) => {
          return (
            <Film key={film.id}>
              <Banner src={film.movie_banner} alt="" />
              <Info>
                <Title>{film.title}</Title>
                <Director>{`Director: ${film.director}`}</Director>
                <Description>{film.description}</Description>
              </Info>
            </Film>
          );
        })}
      </CentralizedDiv>
    </Container>
  );
}
