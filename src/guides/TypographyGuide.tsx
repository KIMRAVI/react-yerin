import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function TypographyGuide() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">h1. 제목</Typography>
      <Typography variant="h2">h2. 제목</Typography>
      <Typography variant="h3">h3. 제목</Typography>
      <Typography variant="body1">body1. 본문 텍스트입니다.</Typography>
      <Typography variant="body2">body2. 본문 텍스트입니다.</Typography>
      <Typography variant="caption">caption. 캡션 텍스트</Typography>
    </Stack>
  );
}
