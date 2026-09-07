import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GuideLayout from "./GuideLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import layoutStyles from "./GuideLayout.module.scss";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function BasicButtons() {
  return (
    <GuideLayout title="Button" className={layoutStyles.container}>
      <Stack spacing={2} direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>

      <Typography
        className={layoutStyles.sectionTitle}
        sx={{ marginTop: "30px !important" }}
      >
        Button Size
      </Typography>
      <Box className={layoutStyles.buttonSizeBox} sx={{ "& button": { m: 1 } }}>
        <div>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <div>
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </div>
        <div>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
      </Box>

      <Typography className={layoutStyles.sectionTitle}>Color</Typography>
      <Stack spacing={2} direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <Typography className={layoutStyles.sectionTitle}>Icon Button</Typography>
      <div>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>

      <Typography className={layoutStyles.sectionTitle}>
        Icon Button Sizes
      </Typography>
      <div>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>

      <Typography className={layoutStyles.sectionTitle}>File upload</Typography>
      <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      </div>
    </GuideLayout>
  );
}
