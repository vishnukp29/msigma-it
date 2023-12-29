import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import demoVideo from "../../assets/demo.mp4";

const VideoPlayers = () => {
  return (
    <Box sx={{ width: "100%", my: 10 }}>
      <Box sx={{ px: 6 }}>
        <Typography
          variant="h6"
          sx={{ color: "#FF6A49", fontSize: 15, fontWeight: "medium" }}
        >
          L&D
        </Typography>
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ px: 6 }}
        xs={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <Typography
              gutterBottom
              sx={{ fontSize: 22, fontWeight: "medium" }}
            >
              Lorem Ipsum is not <br /> simply random text
            </Typography>
            <Box sx={{ mt: { xs: -10, md: 1 } }}>
              <ReactPlayer width="90%" url={demoVideo} controls={true} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, p: 2 }}>
          <Box>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontSize: 12, lineHeight: 2 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it.
            </Typography>
            <Box sx={{ mt: { xs: -10, md: 3.2 } }}>
              <ReactPlayer width="90%" url={demoVideo} controls={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoPlayers;
