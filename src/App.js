import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Content from "./components/Layout/Content";
import ContentDetail from "./components/ContentDetail";

function App() {
  //컴포넌트를 만드는 코드
  //아직 완성 아님 수정중입니다...
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          {/* 메인페이지-아직이름몰라서대충넣어놓음 */}
          <Route path="/main" element={<ContentDetail />} />
          {/* 제품상세 페이지 */}
          <Route path="/:productId" element={<ContentDetail />} />
        </Route>
        {/* <NotFoundPage /> */}
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
