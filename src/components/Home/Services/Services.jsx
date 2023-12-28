import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WestIcon from "@mui/icons-material/West";
import ReactCardFlip from "react-card-flip";

const Services = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedTwo, setIsFlippedTwo] = useState(false);
  const [isFlippedThree, setIsFlippedThree] = useState(false);
  const [isFlippedFour, setIsFlippedFour] = useState(false);
  const [isFlippedFive, setIsFlippedFive] = useState(false);
  const [isFlippedSix, setIsFlippedSix] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const flipCardTwo = () => {
    setIsFlippedTwo(!isFlippedTwo);
  };

  const flipCardThree = () => {
    setIsFlippedThree(!isFlippedThree);
  };

  const flipCardFour = () => {
    setIsFlippedFour(!isFlippedFour);
  };

  const flipCardFive = () => {
    setIsFlippedFive(!isFlippedFive);
  };

  const flipCardSix = () => {
    setIsFlippedSix(!isFlippedSix);
  };

  return (
    <Box sx={{ width: "100%", my: 10 }}>
      <Box sx={{ px: 6 }}>
        <Typography variant="h6">SERVICES</Typography>
        <hr />
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ px: 6 }}
        xs={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <Card
            sx={{ width: 300, height: 380 }}
            style={{ backgroundColor: "#FFEEEB" }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Typography variant="h5" component="div">
                What Service are you looking for?
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: 13, mt: 2 }}
                color="text.secondary"
              >
                We deliver tailored technology solutions that drive efficiency,
                scalability, and success.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 4, mt: 10, mb: 3 }}>
              <Button
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
                style={{ backgroundColor: "#000000" }}
                sx={{ borderRadius: "20px", textTransform: "none" }}
              >
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7EAE0" }}
            >
              <CardContent sx={{ p: 3.5, mt: 24.9 }}>
                <Typography variant="h6" component="div">
                  Java Development
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCard}
                >
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7EAE0" }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h6" component="div">
                  Java Development
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: 13, lineHeight: 2 }}
                >
                  Java is a high-level, class-based, object-oriented programming
                  language that is designed to have as few implementation
                  dependencies as possible. It is a general-purpose programming
                  language intended to let programmers write once, run anywhere
                  meaning that compiled Java code can run on all
                  platforms that support Java without the need to recompile
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCard}
                >
                  <WestIcon />
                </Button>
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>

        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedTwo}>
            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5, mt: 24.9 }}>
                <Typography variant="h6" component="div">
                  Node JS
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardTwo}
                >
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h6" component="div">
                  Node JS
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: 13, lineHeight: 2 }}
                >
                  Harness the power of Node.js for lightweight and fast
                  server-side applications. Our Node.js development services
                  excel in creating real-time applications, APIs, and scalable
                  network applications. Benefit from a JavaScript-based
                  environment that promotes rapid development and seamless
                  integration.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardTwo}
                >
                  <WestIcon />
                </Button>
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>

        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedThree}>
            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5, mt: 24.9 }}>
                <Typography variant="h6" component="div">
                Django
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardThree}
                >
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h6" component="div">
                Django
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: 13, lineHeight: 2 }}
                >
                  Harness the power of Node.js for lightweight and fast
                  server-side applications. Our Node.js development services
                  excel in creating real-time applications, APIs, and scalable
                  network applications. Benefit from a JavaScript-based
                  environment that promotes rapid development and seamless
                  integration.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardThree}
                >
                  <WestIcon />
                </Button>
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>

        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedFour}>
            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5, mt: 24.9 }}>
                <Typography variant="h6" component="div">
                React JS
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardFour}
                >
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h6" component="div">
                React JS
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: 13, lineHeight: 2 }}
                >
                  Harness the power of Node.js for lightweight and fast
                  server-side applications. Our Node.js development services
                  excel in creating real-time applications, APIs, and scalable
                  network applications. Benefit from a JavaScript-based
                  environment that promotes rapid development and seamless
                  integration.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardFour}
                >
                  <WestIcon />
                </Button>
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>

        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedFive}>
            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5, mt: 24.9 }}>
                <Typography variant="h6" component="div">
                Android, iOS, Native
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardFive}
                >
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h6" component="div">
                Android, iOS, Native
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: 13, lineHeight: 2 }}
                >
                  Harness the power of Node.js for lightweight and fast
                  server-side applications. Our Node.js development services
                  excel in creating real-time applications, APIs, and scalable
                  network applications. Benefit from a JavaScript-based
                  environment that promotes rapid development and seamless
                  integration.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardFive}
                >
                  <WestIcon />
                </Button>
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>
        
        <Grid item xs={12} md={3} sx={{ mt: 2 }}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedSix}>
            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5, mt: 24.9 }}>
                <Typography variant="h6" component="div">
                Flutter
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardSix}
                >
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{ width: 300, height: 380 }}
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h6" component="div">
                Flutter
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: 13, lineHeight: 2 }}
                >
                  Harness the power of Node.js for lightweight and fast
                  server-side applications. Our Node.js development services
                  excel in creating real-time applications, APIs, and scalable
                  network applications. Benefit from a JavaScript-based
                  environment that promotes rapid development and seamless
                  integration.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="text"
                  sx={{ borderRadius: "20px" }}
                  style={{ color: "#000000" }}
                  onClick={flipCardSix}
                >
                  <WestIcon />
                </Button>
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Services;
