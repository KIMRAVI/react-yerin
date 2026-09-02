import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

export default function IconGuide() {
  return (
    <Stack direction="row" spacing={2}>
      <HomeIcon />
      <FavoriteIcon color="error" />
      <DeleteIcon color="action" />
    </Stack>
  );
}
