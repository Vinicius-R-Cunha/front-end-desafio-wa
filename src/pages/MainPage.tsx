import { useEffect, useState } from "react";
import Header from "../components/Header";
import Films from "../components/Films";
import Pages from "../components/Pages";
import Loading from "../components/Loading";
import useQuery from "../utils/useQuery";
import * as api from "../services/api";

export default function MainPage() {
  const query = useQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [filmsArray, setFilmsArray] = useState([]);
  const [filmsQuantity, setFilmsQuantity] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.get("page") === null) {
      setCurrentPage(1);
    } else {
      const page = query!.get("page") as string;
      setCurrentPage(+page);
    }

    getFilmsData();

    async function getFilmsData() {
      setLoading(true);
      const response = await api.getPageFilms(currentPage);
      getFilmQuantity();

      setLoading(false);
      console.log(response);
      if (response.status === 200) {
        setFilmsArray(response.data);

        return;
      }
    }

    async function getFilmQuantity() {
      const response = await api.getAllFilms();
      if (response.status === 200) {
        setFilmsQuantity(response.data.length);

        return;
      }
    }
  }, [currentPage, filmsQuantity]);

  if (loading) {
    return (
      <>
        <Header loading={loading} setFilmsQuantity={setFilmsQuantity} />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header loading={loading} setFilmsQuantity={setFilmsQuantity} />
      <Films filmsArray={filmsArray} />
      <Pages filmsQuantity={filmsQuantity} setCurrentPage={setCurrentPage} />
    </>
  );
}
