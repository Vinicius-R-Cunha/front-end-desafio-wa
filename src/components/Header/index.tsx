import { Container, Button, Logo, Pentagon, Title } from "./style";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Header({ loading, setFilmsQuantity }: any) {
  const navigate = useNavigate();

  async function update() {
    const response = await api.updateFilms();
    setFilmsQuantity(0);

    if (response.status === 200) {
      navigate("/");
      return navigate(0);
    }

    return;
  }

  return (
    <Container>
      <Logo
        onClick={() => {
          navigate("/");
          navigate(0);
        }}
      >
        <Pentagon>Wa</Pentagon>
        <Title>
          Challenge<span>.</span>
        </Title>
      </Logo>
      <Button onClick={update} disabled={loading}>
        Update Films
      </Button>
    </Container>
  );
}
