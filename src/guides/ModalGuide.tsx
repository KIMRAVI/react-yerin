import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GuideLayout from "./GuideLayout";
import styles from "./ModalGuide.module.scss";
import layoutStyles from "./GuideLayout.module.scss";

export default function ModalGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GuideLayout title="Modal" className={styles.container}>
        <>
          <Typography className={layoutStyles.sectionTitle}>Alert</Typography>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Alert 열기
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">모달 제목</Typography>
              <Typography sx={{ mt: 2 }}>모달 내용입니다.</Typography>
            </Box>
          </Modal>
        </>
      </GuideLayout>
    </>
  );
}
