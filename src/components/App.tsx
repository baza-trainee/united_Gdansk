import { Routes, Route } from "react-router-dom";


import Main from "../sections/Main";
import ErrorPage from "./ErrorPage/ErrorPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
