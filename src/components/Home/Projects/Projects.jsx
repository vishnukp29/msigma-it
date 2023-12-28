import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';

const Projects = () => {
  return (
    <Box sx={{ width: '100%', mb:10 }}>
      <Box sx={{ px: 6 }}>
        <Typography variant="h6">PROJECTS</Typography>
        <hr />
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ px: 6 }}>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270, display:"flex", flexDirection:"column", justifyContent:"space-between" }}} style={{backgroundColor: "#F0F7EF"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <CastForEducationOutlinedIcon style={{color: "#4caf50"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}} >
                LMS - Learning Management System
              </Typography>
              <Typography sx={{ fontSize: 13, mt:2 }} color="text.secondary" >
              Our Learning Management System (LMS) is a comprehensive platform
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none", mb:2 }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between" }} style={{backgroundColor: "#F7F0F8"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize:14 }}
                color="text.secondary"
                gutterBottom
              >
                < Diversity3OutlinedIcon style={{color: "#a059e3"}} />
              </Typography>
              <Typography  component="div" sx={{ fontSize:{xs:14, md:18} }}>
              HRMS - Human Resource Management System
              </Typography>
              <Typography sx={{ fontSize: 13, mt:2 }} color="text.secondary" >
              Our Human Resource Management System (HRMS) is a powerful solution              
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none", mb:2 }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between" }} style={{backgroundColor: "#F0F7EF"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <PollOutlinedIcon style={{color: "#e87e38"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}}>
              ERP solutions
              </Typography>
              <Typography sx={{ fontSize: 13, mt:2}} color="text.secondary" >
              Our Enterprise Resource Planning (ERP) solutions provide a holistic approach
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none",mb:2 }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between"}} style={{backgroundColor: "#F7F0F8"}}>
            <CardContent  sx={{ px:3.5, pt:2.9 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <  QueryStatsOutlinedIcon style={{color: "#fc3838"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}}>
              Logistics Operation Software
              </Typography>
              <Typography sx={{ fontSize: 13, mt:2 }} color="text.secondary" >
              Our Logistics Operation Software is a cutting-edge solution designed to optimize            
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none",mb:2  }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between"}} style={{backgroundColor: "#F7F0F8"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                < TrendingUpOutlinedIcon style={{color: "#d1c008"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}}>
              Accounting Software
              </Typography>
              <Typography sx={{ fontSize: 13, mt:3.7 }} color="text.secondary" >
              Our Accounting Software is a robust financial management solution       
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, mt:2.3, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none", mb:2  }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between"}} style={{backgroundColor: "#F0F7EF"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <WarehouseOutlinedIcon style={{color: "#0b929e"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}}>
              Warehouse Management Software
              </Typography>
              <Typography sx={{ fontSize: 13, mt:2 }} color="text.secondary" >
              Our Warehouse Management Software is designed to optimize
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none", mb:2  }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between"}} style={{backgroundColor: "#F7F0F8"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                < SchoolOutlinedIcon style={{color: "#e359e1"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}}>
              School ERP
              </Typography>
              <Typography sx={{ fontSize: 13, mt:3.6 }} color="text.secondary" >
              Our School ERP is a comprehensive solution designed specifically for educational        
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none", mb:2  }} style={{ color: "#000000" }} >Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={6} md={3} sx={{ mt:2 }}>
          <Card sx={{ maxWidth: 300, height:{ xs:320  ,md:270 }, display:"flex", flexDirection:"column", justifyContent:"space-between"}} style={{backgroundColor: "#F0F7EF"}}>
            <CardContent  sx={{ p:3.5 }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <CastForEducationOutlinedIcon style={{color: "#595be3"}}/>
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontSize:{xs:14, md:18}}}>
              Project Management Software
              </Typography>
              <Typography sx={{ fontSize: 13, mt:2 }} color="text.secondary" >
              Our Project Management Software is a robust tool for planning, organizing
              </Typography>
            </CardContent>
            <CardActions sx={{ px:4, display: "flex",
                alignItems: "flex-end",
                flexDirection: "column", }}>
              <Button size="small" sx={{ textTransform:"none", mb:2 }} style={{ color: "#000000" }}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>  
        
      </Grid>
    </Box>
  );
};

export default Projects;


