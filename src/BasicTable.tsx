import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import styles from "./BasicTable.module.scss";

const rows = [
  { id: 1, screenName: "ButtonGuide", path: "/guides/button" },
  { id: 2, screenName: "TextFieldGuide", path: "/guides/textfield" },
  { id: 3, screenName: "AccordionGuide", path: "/guides/accordion" },
  { id: 4, screenName: "CheckboxGuide", path: "/guides/checkbox" },
  { id: 5, screenName: "RadioGroupGuide", path: "/guides/radiogroup" },
  { id: 6, screenName: "ListGuide", path: "/guides/list" },
  { id: 7, screenName: "ModalGuide", path: "/guides/modal" },
  { id: 8, screenName: "IconsGuide", path: "/guides/icon" },
  { id: 9, screenName: "TypographyGuide", path: "/guides/typography" },
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
    <Box sx={{ width: "100%", mt: 2 }} className={styles.wrapper}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          정예린 React 포트폴리오
        </Typography>
        <Typography variant="body2" color="text.secondary">
          퍼블리셔
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          아래 표는 이 포트폴리오에서 작업한 리액트 화면 가이드 목록입니다.
        </Typography>
      </Box>
      <Box sx={{ height: 520, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 100,
              },
            },
          }}
          pageSizeOptions={[100]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
