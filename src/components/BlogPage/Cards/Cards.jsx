import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";
import blog4 from "../../../assets/blog4.png";
import blog5 from "../../../assets/blog5.png";
import blog6 from "../../../assets/blog6.png";

const Cards = () => {
  return (
    <Box sx={{ width: "100%", px: { xs: 3, md: 6 }, mt:4 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        xs={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              src={blog2}
              alt=""
              width="100%"
              height="300px"
            />

            <Typography variant="h6" sx={{ color: "#FF6A49" }}>
              Technology
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 18, md: 28 }, mt: 1 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
            >
              February 10 | 2023
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              src={blog3}
              alt=""
              width="100%"
              height="300px"
            />

            <Typography variant="h6" sx={{ color: "#FF6A49" }}>
              Technology
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 18, md: 28 }, mt: 1 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
            >
              February 10 | 2023
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              src={blog4}
              alt=""
              width="100%"
              height="300px"
            />

            <Typography variant="h6" sx={{ color: "#FF6A49" }}>
              Technology
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 18, md: 28 }, mt: 1 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
            >
              February 10 | 2023
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              src={blog1}
              alt=""
              width="100%"
              height="300px"
            />

            <Typography variant="h6" sx={{ color: "#FF6A49" }}>
              Technology
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 18, md: 28 }, mt: 1 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
            >
              February 10 | 2023
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              src={blog5}
              alt=""
              width="100%"
              height="300px"
            />

            <Typography variant="h6" sx={{ color: "#FF6A49" }}>
              Technology
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 18, md: 28 }, mt: 1 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
            >
              February 10 | 2023
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              src={blog6}
              alt=""
              width="100%"
              height="300px"
            />

            <Typography variant="h6" sx={{ color: "#FF6A49" }}>
              Technology
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 18, md: 28 }, mt: 1 }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 10, md: 12 }, mt: 1, color: "#898989" }}
            >
              February 10 | 2023
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
