import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { MainPage } from "../components/page/MainPage/MainPage";
import { Page } from "../components/page/MainPage/Page";
import "../App/App.scss";

function App() {
  return (
    <div className="App">
      <div className="Apps">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/PageTodo" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
