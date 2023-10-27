import Main from "../sections/Main";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
