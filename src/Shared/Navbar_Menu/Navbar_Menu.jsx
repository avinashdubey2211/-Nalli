// import React, { forwardRef } from "react";
// import {
//   Dialog,
//   DialogContent,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Box,
//   Slide,
//   IconButton,
// } from "@mui/material";
// import { FaTimes } from "react-icons/fa";

// // Slide Transition top se
// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// const Navbar_Menu = ({ open = false, handleClose = () => {}, menuItems = [] }) => {
//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       fullWidth
//       maxWidth={false} // Full width
//       TransitionComponent={Transition}
//       keepMounted
//       PaperProps={{
//         sx: {
//           m: 0,
//           mt: 0,
//           borderRadius: 0,
//           width: "100vw", // Full width
//           height: "100vh", // Full height
//           maxWidth: "100vw",
//           maxHeight: "100vh",
//         },
//       }}
//     >
//       <DialogContent sx={{ p: 0, height: "100%" }}>
//         <Box sx={{ position: "relative", height: "100%", bgcolor: "white" }}>
//           {/* Close Button */}
//           <IconButton
//             onClick={handleClose}
//             sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
//           >
//             <FaTimes />
//           </IconButton>

//           {/* Menu List */}
//           {menuItems.length > 0 ? (
//             <List
//               sx={{
//                 pt: 10,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 height: "100%",
//                 justifyContent: "center",
//               }}
//             >
//               {menuItems.map((item, index) => (
//                 <ListItem key={index} disablePadding>
//                   <ListItemButton>
//                     <ListItemText
//                       primary={item}
//                       sx={{ textAlign: "center", fontSize: "1.2rem" }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//             <p className="text-center text-gray-500">No menu items found</p>
//           )}
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Navbar_Menu;
import React, { forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Slide,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";

// Slide Transition top se
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Navbar_Menu = ({ open = false, handleClose = () => {}, menuItems = [] }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={false} // Full width
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        sx: {
          m: 0,
          mt: 0,
          borderRadius: 0,
          width: "100vw",
          height: "80vh",
          maxWidth: "100vw",
          maxHeight: "100vh",
        },
      }}
    >
      <DialogContent sx={{ p: 0, height: "100%" }}>
        <Box sx={{ position: "relative", height: "100%", bgcolor: "white" }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <FaTimes />
          </IconButton>

          {/* Menu List */}
          {menuItems.length > 0 ? (
            <List
              sx={{
                pt: 12, // Top padding for spacing from close button
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                justifyContent: "flex-start", // Start from top
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ py: 2 }}>
                    <ListItemText
                      primary={item}
                      sx={{ textAlign: "center", fontSize: "1.2rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          ) : (
            <p className="text-center text-gray-500 mt-20">No menu items found</p>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Navbar_Menu;
