import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
