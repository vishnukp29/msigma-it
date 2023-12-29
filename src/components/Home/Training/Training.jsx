import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RemoveIcon from "@mui/icons-material/Remove";
const Training = () => {
  return (
    <Box sx={{ width: "100%", my: 10 }}>
      <Box sx={{ px: 6 }}>
        <Typography variant="h6">CORPORATE TRAINING</Typography>
        <hr />
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
              variant="body2"
              gutterBottom
              sx={{ color: "#807e7c", lineHeight: 2 }}
            >
              We at Thoughtware, trains freshers for corporate companies helping
              you significantly reduce your training expenditures and time by
              leveraging our commitment to preparing students for your specific
              technological needs.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ mt: 2, color: "#807e7c", lineHeight: 2 }}
            >
              We offer your company a strategic advantage by providing skilled
              and trained professionals ready for immediate deployment. This
              approach not only saves significant costs in training and salaries
              but also accelerates the project delivery process, enhancing
              overall operational efficiency.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <Typography variant="h6">Ensure Ready-to-Deploy Talent:</Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ mt: 2, color: "#807e7c", lineHeight: 2 }}
            >
              We at Thoughtware, trains freshers for corporate companies helping
              you significantly reduce your training expenditures and time by
              leveraging our commitment to preparing students for your specific
              technological needs.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ mt: 2, color: "#807e7c", lineHeight: 2 }}
            >
              We offer your company a strategic advantage by providing skilled
              and trained professionals ready for immediate deployment. This
              approach not only saves significant costs in training and salaries
              but also accelerates the project delivery process, enhancing
              overall operational efficiency.
            </Typography>
          </Box>
        </Grid>
      </Grid>

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
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: "600",
                backgroundColor: "#FEEEEB",
                px: 1,
                fontStyle: "italic",
              }}
            >
              What We Offer?
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Java based
              Training (Freshers/ Experienced)
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              Node.JS, React/Angular
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              Django, React/Angular
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              .Net Core Training
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> React
              Native/Flutter Training
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Android/ IOS
              native Training
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> UI/UX Training
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ width: "50%", mt: 2, px: 2 }}>
          <Box>
            <Typography variant="h6">
              Access to Training Metrics and Standards:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ mt: 2, color: "#807e7c", lineHeight: 2 }}
            >
              We provide you detailed training and evaluation metrics before the
              placement interviews to ensure that the candidates meet your
              specific standards and expectations
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: "600",
                backgroundColor: "#EBF8F4",
                px: 1,
                fontStyle: "italic",
                mt: 2,
              }}
            >
              Additional Benefits:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <RemoveIcon sx={{ fontSize: 12 }} /> Tailored training programs
              based on your specific needs and technology requirements.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <RemoveIcon sx={{ fontSize: 12 }} /> Experienced trainers with
              industry-relevant knowledge and skills.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <RemoveIcon sx={{ fontSize: 12 }} /> Hands-on training with
              real-world project scenarios.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ px: 6, mt: 4 }}
        xs={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ width: "50%", mt: 2, px: 2, backgroundColor: "#F6FCFA" }}
        >
          <Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Corporate Training
            </Typography>

            <Box sx={{px:4}}>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontStyle: "italic",
                mt: 4,
              }}
            >
              Placement Based Training
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Follow the Training
              Plan Discussed (Web Tech)
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              Perks
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />3 Months Course
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              Course break down
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Course duration
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Faculty
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Fee
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                mt: 2,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontStyle: "italic",
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Assessment criteria
            </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ width: "50%", mt: 2, px: 2, backgroundColor: "#F7F7F7" }}
        >
          <Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Online Training
            </Typography>

            <Box sx={{px:4}}> 
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  fontWeight: "600",
                  fontStyle: "italic",
                  mt: 4,
                }}
              >
                JIVE (Java Interview Victory Engine) (Suggestion: JEL - Java
                Elevate)
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  mt: 2,
                  lineHeight: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontStyle: "italic",
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Course Breakdown
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  mt: 2,
                  lineHeight: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontStyle: "italic",
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                Perks
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  mt: 2,
                  lineHeight: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontStyle: "italic",
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Course duration
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  mt: 2,
                  lineHeight: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontStyle: "italic",
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 8 }} /> Faculty
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Training;
