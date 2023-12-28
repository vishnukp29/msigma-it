import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BackgroundContainer = styled(Box)({
  backgroundImage: 'url("../../../assets/bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#000",
  minHeight: "100vh",
});

const Background = () => {
  return (
    <BackgroundContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        pl: 8,
      }}
    >
      <OutboundOutlinedIcon sx={{ fontSize: 48, fontWeight: "light" }} />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography variant="h4">Next Level</Typography>
        <Typography variant="h4" sx={{ backgroundColor: "#FF6A49", px: 1, color:"#ffffff" }}>
          Innovation
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4">In Technology</Typography>
      </Box>
      <Box sx={{ width: "30%", mt: 2 }}>
        <Typography variant="h4" sx={{ fontSize: 12, lineHeight: 2 }}>
          Lorem Ipsum has been the industry's standard dummy text ever when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </Typography>
      </Box>
      <Button
        variant="contained"
        endIcon={<ArrowRightAltIcon />}
        style={{ backgroundColor: "#FF6A49" }}
        sx={{ borderRadius: "20px", textTransform: "none", mt: 4 }}
      >
        Let's Connect
      </Button>
    </BackgroundContainer>
  );
};

export default Background;
