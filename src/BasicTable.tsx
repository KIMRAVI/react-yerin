import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import styles from "./BasicTable.module.scss";

const rows = [
  { id: 1, screenName: "TypographyGuide", path: "/guides/typography" },
  { id: 2, screenName: "ButtonGuide", path: "/guides/button" },
  { id: 3, screenName: "IconsGuide", path: "/guides/icon" },
  { id: 4, screenName: "TextFieldGuide", path: "/guides/textfield" },
  { id: 5, screenName: "AccordionGuide", path: "/guides/accordion" },
  { id: 6, screenName: "CheckboxGuide", path: "/guides/checkbox" },
  { id: 7, screenName: "RadioGroupGuide", path: "/guides/radiogroup" },
  { id: 8, screenName: "ModalGuide", path: "/guides/modal" },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "순서",
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "screenName",
    headerName: "화면명",
    flex: 1,
    align: "left",
    headerAlign: "center",
  },
  {
    field: "path",
    headerName: "경로",
    flex: 1,
    align: "left",
    headerAlign: "center",
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </a>
    ),
  },
];

export default function BasicTable() {
  return (
    <Box sx={{ height: 550, width: "100%", mt: 2 }} className={styles.wrapper}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
