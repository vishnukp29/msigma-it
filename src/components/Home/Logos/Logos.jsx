import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import logo from "../../../assets/logos.png";

const useStyles = styled({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    image: {
      width: '100%',
      maxHeight: '100%',
      
    },
  });

const Logos = () => {

    const classes = useStyles();

  return (
    <Box className={classes.container}  sx={{ mt: 4, mb: 6, px:6 }}>
      <img
        className={classes.image}
        src={logo}
        alt="LOGO"
      />
    </Box>
  );
};

export default Logos;





// import React from "react";
// import { styled } from "@mui/system";
// import { Box } from "@mui/material";
// import logo from "../../../assets/logos.png";

// const useStyles = styled({
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       width: '90%'
//     },
//     image: {
//       width: '100%',
//       maxHeight: '100%',
      
//     },
//   });

// const Logos = () => {

//     const classes = useStyles();

//   return (
//     <Box className={classes.container}  sx={{ mt: 4, mb: 6, px:6 }}>
//       <img
//         className={classes.image}
//         src={logo}
//         alt="LOGO"
//       />
//     </Box>
//   );
// };

// export default Logos;



