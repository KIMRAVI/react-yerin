import { Routes, Route } from "react-router-dom";
import BasicTable from "./BasicTable";
import TypographyGuide from "./guides/TypographyGuide";
import ButtonGuide from "./guides/ButtonGuide";
import ColorsGuide from "./guides/ColorsGuide";
import IconGuide from "./guides/IconGuide";
import ModalGuide from "./guides/ModalGuide";

function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<BasicTable />} />{" "}
      <Route path="/guides/typography" element={<TypographyGuide />} />{" "}
      <Route path="/guides/button" element={<ButtonGuide />} />{" "}
      <Route path="/guides/colors" element={<ColorsGuide />} />{" "}
      <Route path="/guides/icon" element={<IconGuide />} />{" "}
      <Route path="/guides/modal" element={<ModalGuide />} />{" "}
    </Routes>
  );
}
export default App;
