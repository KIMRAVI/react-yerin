import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  { screenName: "TypographyGuide", path: "/guides/typography" },
  { screenName: "ButtonGuide", path: "/guides/button" },
  { screenName: "ButtonGuide", path: "/guides/button" },
  { screenName: "ButtonGuide", path: "/guides/button" },
  { screenName: "ButtonGuide", path: "/guides/button" },
  { screenName: "ButtonGuide", path: "/guides/button" },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">화면 ID</TableCell>
            <TableCell align="right">화면명</TableCell>
            <TableCell align="right">경로</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.screenName}>
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">{row.screenName}</TableCell>
              <TableCell align="right">
                <a href={row.path} target="_blank" rel="noopener noreferrer">
                  {row.path}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
