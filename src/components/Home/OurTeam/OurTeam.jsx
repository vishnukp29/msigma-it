import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import gg from "../../../../src/assets/gg.png";
import manu from "../../../../src/assets/manu.png";
import hari from "../../../../src/assets/hari.png";
import ashir from "../../../../src/assets/ashir.png";
import ranjan from "../../../../src/assets/ranjan.png";
import user from "../../../../src/assets/user.png";

const OurTeam = () => {
  return (
    <Box sx={{ width: "100%", my: 10 }}>
      <Box sx={{ px: 6, display: "flex", alignItems: "center", justifyContent: 'space-between', flexDirection:"row" }}>
        <Typography variant="h6">OUR TEAM</Typography>
        <CardActions >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: "20px", textTransform: "none" }}
          >
            About Us
          </Button>
        </CardActions>
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
          flexDirection: "column",
          px: 3,
        }}
      >
        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia component="img"  image={gg} alt="Chairman"  sx={{ height: {xs:240,md:360} }}/>
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Gogukalm Gopalan
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                Chairman
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={manu}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
              
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Manu M Rajan
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                CEO
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={hari}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Harikrishnan
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                COO
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300,height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={user}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Hari Govind
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                CTO
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={ranjan}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Renjen Roy
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                Executive Director
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={user}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Suneesh Thampi
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                L&D Head
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia component="img" height="360" image={user} alt="Chairman" sx={{ height: {xs:240,md:360} }}/>
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Kiran UK
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                Head of Design
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, height: {xs:300,md:440} }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={ashir}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Ashir Ali
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                Head of Engineering
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ maxWidth: 300, maxHeight: 470 }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CardMedia
              component="img"
              height="360"
              image={user}
              alt="Chairman"
              sx={{ height: {xs:240,md:360} }}
            />
            <CardContent>
              <Typography component="div" sx={{ fontSize: 15 }}>
                Atif Hussain
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: 12, color: "#a3a2a2" }}
              >
                Head of Engineering
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurTeam;
