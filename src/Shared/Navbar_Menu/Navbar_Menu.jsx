

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
  Typography,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";

// Slide Transition from top
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// Data for each menu
const menuData = {
  KANCHIPURAM: {
    left: ["Shop by Category", "Shop by Price"],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Pure_Gold_Zari.jpg?v=1756850891", name: "Pure Gold Zari" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Half_fine__without_Zari.jpg?v=1756850891", name: "Half Fine" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Pure_Silk.jpg?v=1756850891", name: "Pure Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Blended_Silk.jpg?v=1756850891", name: "Blended Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Brocade.jpg?v=1757510254", name: "Brocade" },
    ],
  },
  BANARASI: {
    left: ["Shop by Category", "Shop by Price"],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Pure_Silk_50e149f9-6faa-42e1-8b2f-5cccf3b5dcc5.jpg?v=1756853740", name: "Pure Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Banarasi_Georgette.jpg?v=1756853739", name: "Georgette" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Banarasi_KataN_Silk.jpg?v=1756853740", name: "Katan Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Banarasi_Silk_Cotton.jpg?v=1756853740", name: "Silk Cotton" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Banarasi_Kora_Silk.jpg?v=1756853740", name: "Kora Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Tanchoi.jpg?v=1756853740", name: "Tanchoi" },
    ],
  },
  OCCASIONS: {
    left: ["Wedding", "Festive", "Events", "Everyday", "Seasonal"],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/bridal.jpg?v=1756854096", name: "Bridal" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Engagement.jpg?v=1756854096", name: "Engagement" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Haldi.jpg?v=1756854096", name: "Haldi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Mehendi.jpg?v=1756854096", name: "Mehendi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Sangeet.jpg?v=1756854096", name: "Sangeet" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Reception.jpg?v=1756854096", name: "Reception" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Bridesmaid.jpg?v=1756854097", name: "Bridesmaid" },
    ],
  },
  "NALLI EXCLUSIVE": {
    left: ["Featured", "Designed by Nalli Lookbook", "All Collections"],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Ira_Diwali-Collection-2025.jpg?v=1758205233", name: "Ira Diwali" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/taalam.jpg?v=1758621112", name: "Taalam" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Mangalyam_2_1.jpg?v=1757672315", name: "Mangalyam" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Wildflower_1.jpg?v=1757672315", name: "Wildflower" },
    ],
  },
  "SHOP ALL": {
    left: ["Shop by Category", "Best Sellers", "Regional Weaves", "Shop by Price", "Shop by Colours", "Shop by Technique", "Other Collections", "Gift Vouchers"],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Kanchipuram.jpg?v=1756797613", name: "Kanchipuram" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Banarasi.jpg?v=1756797613", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Tussar_silk.jpg?v=1756797613", name: "Tussar Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Soft_silk.jpg?v=1756797612", name: "Soft Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Chiffon.jpg?v=1756797613", name: "Chiffon" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Organza.jpg?v=1756797613", name: "Organza" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Geoegette.jpg?v=1756797612", name: "Georgette" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Silk_Cotton.jpg?v=1756797613", name: "Silk Cotton" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Art_silk.jpg?v=1756797613", name: "Art Silk" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Linen_Jute.jpg?v=1756797613", name: "Linen Jute" },
    ],
  },
   "FABRICS": {
    left: ["Shop by Materials", "Shop by Colours",],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Silk.jpg?v=1756858825", name: "Kanchipuram" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Georgette.jpg?v=1756858825", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/White_f621d9a8-432a-45a9-a8d1-603dc2ff0356.jpg?v=1756859539", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Black_391b23e5-7cae-4256-a234-e064cc28713a.jpg?v=1756859540", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Orange_c84ed33c-3975-4132-b1e0-e09faef6cdb0.jpg?v=1756859539", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Purple_fe178e6b-5c22-471b-b515-a1c0f8642546.jpg?v=1756859540", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Green_b4573abd-745d-4f77-8e8a-81374d1bfcc2.jpg?v=1756859539", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Brown_d8b262b3-0e7b-4401-af3f-1a68b8b087ea.jpg?v=1756859540", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Red_8830f6b8-04ea-46a0-a4b3-59ee82b9c9dd.jpg?v=1756859540", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Blue_69cb9156-aa55-440d-a31f-ff4450eff313.jpg?v=1756859540", name: "Banarasi" },
            { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Tussar.jpg?v=1756858825", name: "Banarasi" },
                  { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Yellow_69c422d6-ac5a-4ec1-b392-f9f07f4e96c1.jpg?v=1756859540", name: "Banarasi" },


    ],
  },
    "OUR STORY": {
    left: ["Our History", "Nalli's Promise","The Media"],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Our-History-_About-us.png", name: "Kanchipuram" },
     

    ],
  },
   "STORES": {
    left: ["India "," USA" ,"UK","Canada","Australia"," Singapore","UAE", "Shop by Colours",],
    right: [
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/CHENNAI.jpg?v=1756892667", name: "Kanchipuram" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/BANGALORE.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/DELHI.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/MUMBAI.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/HYDERABAD.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Ahmedabad.jpg?v=1756892666", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Vijaywada.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Coimbatore.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Madurai.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Trichy.jpg?v=1756892668", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Kanchipuram_67c9f337-5b1c-40ab-94f1-fd1811c21857.jpg?v=1756892667", name: "Banarasi" },
      { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/KOCHI.jpg?v=1756892667", name: "Banarasi" },
     { src: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Kolkata.jpg?v=1756892666", name: "Banarasi" },



    ],
  },
  // Add more categories if needed
};

const Navbar_Menu = ({ open = false, handleClose = () => {}, menuItems = [], selectedMenu = "" }) => {
  const data = menuData[selectedMenu];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={false}
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
        <Box sx={{ position: "relative", height: "100%", bgcolor: "white", display: "flex" }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <FaTimes />
          </IconButton>

          {data ? (
            <>
              {/* Left Section */}
              {data.left.length > 0 && (
                <Box sx={{ width: "20%", borderRight: "1px solid #ddd", p: 2 }}>
                  {data.left.map((text, i) => (
                    <Typography key={i} variant="subtitle1" sx={{ color: "red", mb: 1 }}>
                      {text}
                    </Typography>
                  ))}
                </Box>
              )}

   {/* Right Section */}<Box
  sx={{
    flex: 1,
    p: 1,
    display: data.right.length === 1 ? "flex" : "grid",
    gridTemplateColumns: data.right.length === 1 ? "none" : "repeat(5, 1fr)",
    columnGap: "1px", // smaller column gap
    rowGap: "2px",    // smaller row gap
    justifyContent: "center",
    justifyItems: "center",
    overflowY: "auto",
  }}
>
  {data.right.map((img, i) => (
    <Box key={i} sx={{ textAlign: "center", maxWidth: data.right.length === 1 ? "80%" : "85%" }}>
      <img src={img.src} alt={img.name} style={{ width: "100%", borderRadius: 4 }} />
      <Typography variant="caption" sx={{ mt: 1 }}>{img.name}</Typography>
    </Box>
  ))}
</Box>





            </>
          ) : (
            // Default vertical menu
            <List
              sx={{
                pt: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "flex-start",
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
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Navbar_Menu;
