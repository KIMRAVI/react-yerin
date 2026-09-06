import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GuideLayout from "./GuideLayout";
import styles from "./ButtonGuide.module.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function BasicButtons() {
  return (
    <GuideLayout title="Button" className={styles.container}>
      <Stack spacing={2} direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button href="#text-buttons">Link</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} className={styles.sectionTitleWrap}>
        <Typography className={styles.sectionTitle}>Icon Button</Typography>
        <div className={styles.iconBtnWrap}>
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
      </Stack>

      <Stack spacing={2} className={styles.sectionTitleWrap}>
        <Typography className={styles.sectionTitle}>Button Size</Typography>
        <Box className={styles.buttonSizeBox} sx={{ "& button": { m: 1 } }}>
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
      </Stack>
    </GuideLayout>
  );
}
