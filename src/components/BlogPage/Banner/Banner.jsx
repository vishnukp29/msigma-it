import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import blog from "../../../assets/blog.png";
const Banner = () => {
  return (
    <Box sx={{ width: "100%", px: { xs: 3, md: 6 } }}>
      <Grid container marginTop="20px" spacing={3} alignItems="center">
        <Grid item md={12}>
          <img
            style={{ objectFit: "cover" }}
            src={blog}
            alt=""
            width="100%"
            height="400px"
          />
        </Grid>
        <Box sx={{ px: 3, mt: 1, width: { xs: "100%", md: "75%" } }}>
          <Typography variant="h6" sx={{ color: "#FF6A49" }}>
            Technology
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 24, md: 40 }, mt: 1 }}>
            Lorem Ipsum has been the industry's standard dummy text ever
          </Typography>
          <Typography variant="h6" sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
          >
            February 10 | 2023
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Banner;
