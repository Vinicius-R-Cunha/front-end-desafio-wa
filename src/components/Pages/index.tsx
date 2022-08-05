import { useEffect, useState } from "react";
import { Container, InsideContainer, Page } from "./style";
import { useNavigate } from "react-router-dom";

export default function Pages({ filmsQuantity, setCurrentPage }: any) {
  const [pagesQuantity, setPagesQuantity] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    calculatePagesQuantity();

    function calculatePagesQuantity() {
      setPagesQuantity(Math.ceil(filmsQuantity / 10));
    }
  }, [filmsQuantity]);

  function changePage(page: number) {
    setCurrentPage(page);
    navigate({ pathname: "/", search: `?page=${page}` });
  }

  return (
    <Container>
      <InsideContainer>
        {Array.from({ length: pagesQuantity }, (item, index) => (
          <Page key={index} onClick={() => changePage(index + 1)}>
            {index + 1}
          </Page>
        ))}
      </InsideContainer>
    </Container>
  );
}
