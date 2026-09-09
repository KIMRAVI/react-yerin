import { Routes, Route } from "react-router-dom";
import BasicTable from "./BasicTable";
import Landing from "./landing/Landing";
import TypographyGuide from "./guides/TypographyGuide";
import ButtonGuide from "./guides/ButtonGuide";
import IconGuide from "./guides/IconGuide";
import ModalGuide from "./guides/ModalGuide";
import TextFieldGuide from "./guides/TextFieldGuide";
import AccordionGuide from "./guides/AccordionGuide";
import CheckboxGuide from "./guides/CheckboxGuide";
import RadioGroupGuide from "./guides/RadioGroupGuide";
import ListGuide from "./guides/ListGuide";
import SelectGuide from "./guides/SelectGuide";

function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<BasicTable />} />{" "}
      <Route path="/landing" element={<Landing />} />{" "}
      <Route path="/guides/typography" element={<TypographyGuide />} />{" "}
      <Route path="/guides/button" element={<ButtonGuide />} />{" "}
      <Route path="/guides/icon" element={<IconGuide />} />{" "}
      <Route path="/guides/modal" element={<ModalGuide />} />{" "}
      <Route path="/guides/textfield" element={<TextFieldGuide />} />{" "}
      <Route path="/guides/accordion" element={<AccordionGuide />} />{" "}
      <Route path="/guides/checkbox" element={<CheckboxGuide />} />{" "}
      <Route path="/guides/radiogroup" element={<RadioGroupGuide />} />{" "}
      <Route path="/guides/list" element={<ListGuide />} />{" "}
      <Route path="/guides/select" element={<SelectGuide />} />{" "}
    </Routes>
  );
}
export default App;
