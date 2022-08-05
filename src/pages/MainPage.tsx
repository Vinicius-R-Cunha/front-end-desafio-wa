import useQuery from "../utils/useQuery";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  // navigate({ pathname: "/", search: "?page=2" })

  const query = useQuery();

  console.log(query.get("page"));

  return <h1>main page</h1>;
}
