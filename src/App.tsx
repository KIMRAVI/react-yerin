import { Routes, Route } from "react-router-dom";
import BasicTable from "./BasicTable";
import TypographyGuide from "./guides/TypographyGuide";
import ButtonGuide from "./guides/ButtonGuide";

function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<BasicTable />} />{" "}
      <Route path="/guides/typography" element={<TypographyGuide />} />{" "}
      <Route path="/guides/button" element={<ButtonGuide />} />{" "}
    </Routes>
  );
}
export default App;
