import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TypographyGuide from "./guides/TypographyGuide";
import ColorsGuide from "./guides/ColorsGuide";
import IconGuide from "./guides/IconGuide";
import ButtonGuide from "./guides/ButtonGuide";
import ModalGuide from "./guides/ModalGuide";

const tabItems = [
  { label: "Typography", component: <TypographyGuide /> },
  { label: "Colors", component: <ColorsGuide /> },
  { label: "Icon", component: <IconGuide /> },
  { label: "Button", component: <ButtonGuide /> },
  { label: "Modal", component: <ModalGuide /> },
];

export default function StyleGuide() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabItems.map((item, index) => (
          <Tab key={index} label={item.label} />
        ))}
      </Tabs>

      <Box sx={{ p: 3 }}>{tabItems[value].component}</Box>
    </Box>
  );
}
