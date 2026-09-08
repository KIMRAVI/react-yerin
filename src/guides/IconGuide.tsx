import Stack from "@mui/material/Stack";
import styles from "./IconGuide.module.scss";
import GuideLayout from "./GuideLayout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import layoutStyles from "./GuideLayout.module.scss";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function IconGuide() {
  return (
    <GuideLayout title="Icon" className={layoutStyles.container}>
      <div className={styles.inner_wrap}>
        <Stack spacing={2} direction="row">
          <HomeIcon />
          <FavoriteIcon color="error" />
          <DeleteIcon color="action" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <HomeIcon />
          <HomeIcon color="primary" />
          <HomeIcon color="secondary" />
          <HomeIcon color="success" />
          <HomeIcon color="action" />
          <HomeIcon color="disabled" />
          <HomeIcon sx={{ color: pink[500] }} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Icon>add_circle</Icon>
          <Icon color="primary">add_circle</Icon>
          <Icon sx={{ color: green[500] }}>add_circle</Icon>
          <Icon fontSize="small">add_circle</Icon>
          <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ alignItems: "flex-end" }}>
          <Icon baseClassName="fas" className="fa-plus-circle" />
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            color="primary"
          />
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            sx={{ color: green[500] }}
          />
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            fontSize="small"
          />
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            sx={{ fontSize: 30 }}
          />
        </Stack>
      </div>
    </GuideLayout>
  );
}
