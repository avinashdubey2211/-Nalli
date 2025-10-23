
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const videoData = [
  {
    id: 1,

     src: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQM2fVmHolVrkg6N6XGSARpFKrFGtZr_3q_TTB20Bh5yCfqeUx1b7NlXr6HLOwzVKp6ep3kFpQa0JwFzVpG7-uTd7sY0Q2QKYWbMU1A.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=UgGOERVz_vwQ7kNvwEOiOMK&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzkwMjYyMTMzODM5Mjg5LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NDcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=2544625989a9672&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zRDRCRUFFNUREMkEyQjZEQUIyNjc4REJBRDYyNEY5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTHotN1NHZGVNZ21jRndGQUdCSWRMcW94NmNKYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm8tai3Kev5wIVAigCQzMsF0BHzMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=oapQ9vxi8V1qTsPYNTWbkw&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHuDENWKe3nHLCrXKXHML1Ikb4GCcfr70Aw2grME96Y2orNQcbNqDe-_JNw5itaGOlrfYAMzgFt&oh=00_AfePuUA51Cv0__BGNqhgCloWfTHX4tu0ykVs7GPO962pqA&oe=68FB7D83",
    title: "NalliSilk Saree - Ira Collection",
    description: `Sandhya Saree from Nalli’s Diwali Collection Ira, captures the brilliant blue of the evening sky in a regal dual color weave. 
     It features a dynamic mayil border depicting peacocks with open wings welcoming the falling rain.
    Designed in-house, crafted with care, shop the collection in store and on www.nalli.com worldwide.`
  },
  {
    id: 2,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMuYDvGii2aba15YQbJA6iBCh7gAb-k658YOSLn7ZX8hs1kvMKhM0OD1o7sWd1Lzi1yMHppLo208yqQMHtpy1TWCqH86nio0dBhLr0.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=sLbA51loHaoQ7kNvwEJWC9e&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTMxODg0NTEyNjAxMDA4OSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=173d2c678d57043a&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80QzRFNkVGODQ5MTMyQTg2QzM4NDAyMjJEODJBM0JCNV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSERGclNGWHpSQWZFTGtFQUNkWXM4Z3hVUFVSYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm0pP_8_He1wQVAigCQzMsF0A0kOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEFeqFJQdAgVfz8e0WUOjsfmYAIu1G2QDAcFsAC9F0Ooyx_aZMkhQ7tszvCWaZ30mLjbNz98Ktg&oh=00_Afc105v3VujXPkiiWgt2GrTz--lf-oSxc1wRf9VTouU6Cw&oe=68FB8063",
     title: "Red Banarasi Silk Saree",
    description: `Celebrate elegance with this Red Banarasi Silk Saree. Handwoven with gold zari motifs, perfect for weddings and festive occasions.
    Available online and in-store.`
  },
  {
    id: 3,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMgz0H65D034GCuHpYzqdRhYfHHNGi0dGfgSSnWrI2ZJ3yxqfscqGeXFjNTwJ7FXicEn36wkkrMnDwTPGcx1Csid3krx-qrLnm5tec.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=SHozC3_ynOkQ7kNvwE2Fpwk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTU3MDEwODg1NzMwODE0MywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=492a0cf1051320ea&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BNTRFQTdEMERCNkMzNkQyM0IyMDU4OURCRDQxMkE5Ql92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT2NlM3lGMVVDcE5abEFGQUw1YkRnRl9VVHB1YnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm3s-Wy66AygUVAigCQzMsF0A0ZmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFo1TUi_00RtxxQoRKyoQQzkyLf5o1k-pesqOqPH9sIjaVxOSGYhPo03r5PXHZcigd6WNDpKPUe&oh=00_Aff8-bTYpSaSWd1nVvZZnE2Nz3oFNonWyfvG33oCZHZpZw&oe=68FB807E",
     title: "Navy Blue Tussar Saree",
    description: `A lightweight Navy Blue Tussar Saree ideal for casual and formal wear. Features delicate embroidery along the borders.
    Shop now to experience timeless craftsmanship.`
  },
  {
    id: 4,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQN6GiwJPaJ5j4_d4TTDyNyH275RKlfg3CzLYrPdJ-ea5jhx5tCjqeMd2bb0DDgAFV5cTsOo1p0BNHQyMexJWOJLehCYYigbqED3F6s.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=F2D_3te2q4cQ7kNvwGuGVgw&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTI3Ni5kYXNoX2Jhc2VsaW5lXzFfdjEiLCJ4cHZfYXNzZXRfaWQiOjgyOTA1MTI0MjkwMzAxMCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=e7e353d74505d56d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DODQyMEM5RENERTE1NzMzMTg0QThCNTg1QTExRUE5Q192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ0w4cGlGd2xCQ1BLcW9EQUxPcnUtSGJXWWNiYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmxNerjZGB-QIVAigCQzMsF0BNij1wo9cKGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHmZW-c7MZzHHY9fGYbT957USNzW7okLfUs5wQyi6GkxcjhezJE59DXOBS5nWZ-l8_ChJTB0_EP&oh=00_AffWDoDeHkRnjLBhWhskz4SWtLQk0eOF0Ax0Vn23wF6gvg&oe=68FB8ECE",
    description: `Peach Designer Saree with subtle floral patterns and soft fabric drape. Perfect for daytime events and family gatherings.
    Order online for a seamless shopping experience.`
  },
  {
    id: 5,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMldRLgKys5fmwE50a-GDIKtB37S1a1oAoMbAaNUGwYvy6LtIq2ynC9LpaR66N8Io1hfH9fs4K2aGnxVDMg52asCOZbf_Bah5YNmVc.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=3L4LzFKC5msQ7kNvwGiOkrl&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjcwMjE3NDg5MTQyNzUzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=d8f3494227c77b14&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FOTRFMjc1NTdDNDEyQTcxNkNBOUI3MjczNTZEOUJBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSlFQeGlFQVBUR0I5U3NFQVBpRGFhZ3F4dXdPYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmws_mteXjsAIVAigCQzMsF0AzzMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFj5owPECmc3jnotbhyyBr5xJ_pKdw6Vo2g_korg3su4jFmX2s6exmnRCfvuFo_ZfRHF8Dc_IV_&oh=00_Affj2AhyOclCR9LQk1kMbOr-8Dql8HgufepmWnG6TSJNDQ&oe=68FBB1FA",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },

   {
    id: 6,
    src: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNbCcWUZT1Ej4YeVYg2CvLfFuwP2J4DuwHiM9xMDgHfWI9XnggSKccHZUmr22HIrZiv24UXUVqiUkkOLiv_qi62lkD08GuQptlDtFY.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=I54L0Je-98oQ7kNvwEJg-0u&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzE2LmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Nzc1NjAyNDg4ODAyNDcwLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=f76f2c4a127b43c7&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GMzQzNDQ2MkRCRTRBODFFQTg3NDFFRkREMzFDMDk5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR3pEMVNHQnFNUENZa01GQVB5MzFlYnhYZ2ROYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzPKn7YDa4AIVAigCQzMsF0AYJ--dsi0OGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFBz33-8zX8npp_hNBtZNl6iWBoa5QOCBWpa7BCastHGpDpdYZwc9GcL1pDDK9ljkwsYb1zpzTq&oh=00_AffzSOkMkbd6EmBAlc4Bv9Zi9_JHIhEgcSYcJprOvJRniQ&oe=68FB981F",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 7,
    src:   "AQMiLsdWMPxT4zKkHhlIgrPo9R54RNQV96RyJCuoTo6Y5IY8LPYTAER4U2RvwpuhM14G0GasurawsdnVmfL7t8POpgdtnBkTzDrX4SA",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 8,
    src:   "AQNtu6rCcjy_OdWvnVNHVN9sLoXKLYpsqQuGLfEn3r4WOundB5js2Y5wengp6iNbvoxd6Wy44JtqIH4uwp0sLWi1sbcW6ywTkNoVL1g",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 9,
    src:   "AQORsCEePeR2wlvfjO3Ymssmvx3vPtMyGyCqIP0UamDvm9sTk2IGkT8gqTwkY3SjzuGPvHMrNRaTTuFQ_lH8jPsMB9qY_hEK",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
     Available in limited quantities, get yours today!`
  },
   {
    id: 10,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQOFsEmU3JqCShh5rt3jnVLn87A7fTZiCPlSGy67riOTd248o2jpT4mRhPAITrZQaIFQvppcc6JziotSGPtzYD3c8pAv34F_1sGu0Tw.mp4?_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=0QX5OvZWTtwQ7kNvwGpOwUe&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjU0Mjk1ODgyMzY2MzM4OTksInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjo2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=180623cb419ba2d0&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zNzQ0RjMxQjNGRDE4OTkzNzkxOENENUMxRDYyRDk4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQm9aeGlISURFWVdTOFpYQUhqT1lCZ21jY1VoYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm1pyI2uyErFoVAigCQzMsF0AYAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQE-3Bk76cyjINTBuz1uZGL790gyD45ecHsqEd8nmBLahuB7EuLFgRT2JJBZU3PQT0vd7x52WMJS&oh=00_AffoWwDjYgfcmdTdtFEQ2SX8cnHy0st7JIV3nbDmecKJiA&oe=68FB8A38",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 11,
    src:   "AQO7ddfiQapAp4ngApmQNb6d0Ao7bBuuAomyUT2cGtPAYUTiNtiY4HJNJKl_pwXVrNOWfzhsNFzRUgZ3vfbylNQDwjEGL7cNs4READ0",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
   Available in limited quantities, get yours today!`
  },
   {
    id: 12,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMxWSzKYhx3libjYzzjsE0P6gO5O8TdvEIftfdhsxEuO_OcMGJN6rfGSLESxD6OnOvpX4na8mBvaQSDXRkFIKdC8jnmnbsZ5wUP5IA.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=9_TVQtX3V4MQ7kNvwEPTQil&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODE2MDU3NDQ0NzEzNjU5LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=ef9e27f0ddcee3ca&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81NDQyMTJCMkE2QUQzMzAwQzBFQjdENDU2RkRCMjY4Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSkx5bFNIYy1rNHppOUlDQUpPWS04Ukt3Yk1oYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm9pLe4eWM8wIVAigCQzMsF0BDkQYk3S8bGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFYIf85QGhiHT3v05kEq2UzgJ2fOU1wvOuQTRBOStvZbJB7AH-gBiX3EJSGqrFhzVD35v_UYSlZ&oh=00_AfdlQJXecCmLVpcuV383T9-C8GDES2y5MnRLu8h9ilxhrg&oe=68FB9BA6",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 13,
    src:   "AQM5ezNsbBoyiAHGPPjDiey8DT0VpX_AmHp3mrjMjSYYnbDo_vucGDALxxS4TYxLS_c7lnUhhyHsiivjZrEf3pXGe5IO5eYzOwkhqH0",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 14,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNkUFlWRya8DEeaRY9vEr3M4fosRBZmcLlppp8x7-S4jHgozSLpGwNRkOLk5t6jOVAJr3Xp4KiY8rZDb-y0-VnPrJ5ABDDcN4Hropo.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=7PAznmJuNJ8Q7kNvwHTFHP_&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzAwNzAzODc5MTA1MzExLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=83f2c310f3ca15a&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xQjRDRkYxQzUzMUNDRUY3QjZCRUVGQUM1QjAyQTQ4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRDlJdFNIbG8zZEJLNkVHQUVpSkwzTUtVMVVCYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmvqz03KrSvgIVAigCQzMsF0A9szMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHdQgHmiz48BemTbu3wjfpPQxQx22n8g1ME8vmCFUf2pod_B-oX4ZhbHbFepjOgXR3ZuvQcDyUl&oh=00_Afc5lc5rGRmJ0m9ntwjgrMCWtwmR1d8zOpxIkKuz1SsobA&oe=68FB8202",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
   Available in limited quantities, get yours today!`
  },
   {
    id: 15,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNgCyz3Va4EOvAo6Haf4MYImFe6QQPe2rU55xDXO5-OttP5PXM6wheYQl24W9Iq-618yuzLsbZWu5wPGH-leqWxM_f_NQ8MZz1F0xU.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=kzGICMVd69oQ7kNvwGObiU2&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA4OTcxMjc3Mjk5ODM3NSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=86a5ad5597aa5e0a&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83ODRCNDUxQ0QyMTVCMjUyNjlGMkQ1RjkzNEJGODRCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSlpCcHlIcnMxdDVjN0lDQU1iMGxUN25rMk1jYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzpPv69DF7wMVAigCQzMsF0A9zMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=jV01Ez5m28mYz36_2TQ5Wg&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFvrdpifScvO54Evb3j7qpaqM4p595IFcO9ur_VRcDYZF-gC5igThv4Z17tGpk1s4996dZBDwE5&oh=00_AfdPP2jyoDLvoQij6vA_QHxFme-yOXpNABGQdWmpbA_zIQ&oe=68FB9460",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
  
];
export default function VideoDialog() {
  const [open, setOpen] = React.useState(false);
  const [currentVideo, setCurrentVideo] = React.useState(videoData[0]);
  const scrollRef = React.useRef(null);

  const handleOpen = (video) => {
    setCurrentVideo(video);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1.2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className="font-bold  ">
     <h2 className="text-xl  text-start  px-6 sm:text-2xl md:text-3xl font-bold text-gray-800">
    
@nallisilksarees
  </h2>
    <Box sx={{ position: "relative", p: 2 }}>
      {/* Scroll Left Button */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "45%",
          left: 5,
          zIndex: 2,
          bgcolor: "white",
          boxShadow: 2,
          "&:hover": { bgcolor: "#f5f5f5" },
        }}
      >
        <FaArrowLeft />
      </IconButton>

      {/* --- Scrollable Row (1 Row) --- */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          p: 1,
        }}
      >
        {videoData.map((video) => (
          <Box
            key={video.id}
            sx={{
              flex: {
                xs: "0 0 100%", // 1 video on small
                sm: "0 0 100%",
                md: "0 0 48%",  // 2 videos on medium
                lg: "0 0 19%",  // 5 videos on large
              },
              position: "relative",
              cursor: "pointer",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.03)", transition: "0.3s" },
            }}
            onClick={() => handleOpen(video)}
          >
            <video
              src={video.src}
              muted
              loop
              autoPlay
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                color: "white",
                textAlign: "center",
                py: 1,
                fontWeight: "bold",
              }}
            >
              {video.title}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Scroll Right Button */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "45%",
          right: 5,
          zIndex: 2,
          bgcolor: "white",
          boxShadow: 2,
          "&:hover": { bgcolor: "#f5f5f5" },
        }}
      >
        <FaArrowRight />
      </IconButton>

      {/* Dialog */}
      <BootstrapDialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: "bold" }}>
          {currentVideo.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8, color: "grey.500" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
            <Box flex={1}>
              <video
                src={currentVideo.src}
                controls
                autoPlay
                style={{
                  width: "100%",
                  borderRadius: 8,
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
            <Box flex={1} sx={{ p: 1 }}>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {currentVideo.description}
              </Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
    </Box>
  );
}
