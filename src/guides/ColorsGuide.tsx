import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const colors = [
  { name: "Primary", value: "#1976d2" },
  { name: "Secondary", value: "#9c27b0" },
  { name: "Error", value: "#d32f2f" },
  { name: "Warning", value: "#ed6c02" },
  { name: "Success", value: "#2e7d32" },
];

export default function ColorsGuide() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      {colors.map((color) => (
        <Box key={color.name} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              backgroundColor: color.value,
              borderRadius: 1,
              mb: 1,
            }}
          />
          <Typography variant="caption">{color.name}</Typography>
        </Box>
      ))}
    </Stack>
  );
}
