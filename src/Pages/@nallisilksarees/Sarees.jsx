
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
    src: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPcrr2_-gjNMUmfVeuBaBB-9Eo2uzy7jl5q2Aj3lw4dnV3sr4i9BvMWTmasNb0ZZPVmcjweuD96wqMu9LTXO6NCnYjK0Rudv8mc4YI.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=K4cbYdMS6BYQ7kNvwFpl1b0&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjU4NTU0MzcyMTgxODYwOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2d4ab1dbba24d448&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GNTREMDcwMjI1MDcwMkMzM0M5MTBCQUVDM0ZCMjhCNl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSGF2ZnlGc3FrTVZrZTREQUF3SjF6RF9DUGREYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm4Oe48bnilwkVAigCQzMsF0AtCj1wo9cKGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHjr5iOg-aLaW3BZnH4stt42BMEX1lHAQrvOdTRfn_u1JBhhHonUSddR_9U7pyIiQLc_0ecabIf&oh=00_AfdPe8tfoD_4xUlObTAm1Q8ZIJddf4s6mQ_UonocARYGBg&oe=68EEBB9F",
    title: "NalliSilk Saree - Ira Collection",
    description: `Sandhya Saree from Nalli’s Diwali Collection Ira, captures the brilliant blue of the evening sky in a regal dual color weave. 
     It features a dynamic mayil border depicting peacocks with open wings welcoming the falling rain.
    Designed in-house, crafted with care, shop the collection in store and on www.nalli.com worldwide.`
  },
  {
    id: 2,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMBL6lOiLq2z4p7fuIkCXWKvnbA4S8Z-zqul2nX8l4pY3lwJGGR0CXMMm5m37HiuO8-4o0DuctI6B9013l0IhlZeGImZ7yGJuuwU20.mp4?_nc_cat=104&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=MctV5hSfBWMQ7kNvwEsiTrf&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTE4NTA3MzU0MDE3NjE2NSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI4LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=8d636b77245c7f9f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CQTRCQjc1OTlGOTJFOUQ2MUNERUMxRkQ0QUM5REFBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR001cUNGT3RtUmgtTklEQU9LSnIwRzNRYVV0YnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmyuSo9q30mgQVAigCQzMsF0A8qn752yLRGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEUtMK0mIfB6cPIF1AVfVm47qh6p-v8qCLCpMnphXCdIrSbQprdqiWGpYSXMg79X2wh1vgE11k-&oh=00_AfeAUdI4d84rIgqJZTFaSs_AtcP9LMYqsRxkfOn1ke9uXg&oe=68EED56D",
     title: "Red Banarasi Silk Saree",
    description: `Celebrate elegance with this Red Banarasi Silk Saree. Handwoven with gold zari motifs, perfect for weddings and festive occasions.
    Available online and in-store.`
  },
  {
    id: 3,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNgYzDnVYh7a5X0toQMUPmmQMMcc64vB94_DTgY_BFDDFqM4UJm3L6mpM1CSVRn-XJTz8-aJWRWFMGOq7Gmxqai64mJiI_uHB1mvgY.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=6lrAI-kXm-AQ7kNvwF-k7bc&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTMyNDg5NTMyOTEzMjM3MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2297fe90045136d0&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC84NzRDRTZFOUIzOTRCRTQ1NzExNjRDREQzNkY5NUY5RF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSmlWWWlITDNLQ0ZNQXNFQVAzaHoxT0JISGRoYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmqP2ot4e_2gQVAigCQzMsF0AwR64UeuFIGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQG5B3Gxp1guD9PHCSckU9ZNpL27qTzyFE_z3mfadUtHumQWuupUAbG8WI9_ODSj9JgzZF62pFHC&oh=00_AffExWzWxZSG22kp2FSn8QcFTjzh5gb8DDYFKqt9vcwRMA&oe=68EEB6AA",
     title: "Navy Blue Tussar Saree",
    description: `A lightweight Navy Blue Tussar Saree ideal for casual and formal wear. Features delicate embroidery along the borders.
    Shop now to experience timeless craftsmanship.`
  },
  {
    id: 4,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQP6jFT0wQ9psYRPzPoFZPuijtfOP8goeVo2R0o9-8gEN7OuER7d74AP-6JRviboZJN8nhnIiq8d-zVjBC4ywGg6Gdhkq6_-3Y6NxPY.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=DCbX62L3Z4MQ7kNvwEUtyf5&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzMyNTg4MTc5ODMyNjY0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=fd1cddce8fe1f5cd&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC82MjQ2QUY2MUNFNzgxOUU1RDU1NzE3MzQyNTREQUY5N192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRjdGRXlFZXlJbzVhVE1PQUUzZ2VRTWVjN0E4YnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmsP3No5-SzQIVAigCQzMsF0BApmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGeHBmnSf_0uA3vj0toAWIyTzAmuncA3qo6Ohy4g_8qsQpoz_Jv6nvyBJnKpXmNZRPxNrPD-knp&oh=00_Afcu7zVS7Ya2TTIYGNjkdsW3DiEB-4SJ-ssozKbKbCnn8w&oe=68EED8A4",
     title: "Peach Designer Saree",
    description: `Peach Designer Saree with subtle floral patterns and soft fabric drape. Perfect for daytime events and family gatherings.
    Order online for a seamless shopping experience.`
  },
  {
    id: 5,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPhJauR_gCW46G_e7ohTrjEuMQz-pUXXwSd1ISmsIoI8kcBfgW8lIuv_CJZV46Ko9N_XjQJgGITg6PzrT3Bljhy6ZEPsxUX-LNQsko.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=VHsWC_SJ9qwQ7kNvwEOam27&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTk3NjYxNTM3MzExNjk4NiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=e04aabc500d931cb&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yOTQyMUM4RUU0OUMxNzI1RUY3ODFCMEI4RjQ0NTA4Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRjdhZXlGYnNXdlRhRU1GQUFHZG1Ud0lEc1poYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm9NjgkpTuggcVAigCQzMsF0AtmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFNfGcHJQLskQWT-cgrAfvYK0vc_UF5Mxra0ze53PND3DwKVqQRjaxkNgVJigbUKwErJYb_-Iip&oh=00_AfcCTEnsqzjBkke3i-6n-_a5TBUZPzrdQ2t2mrPziC-g8g&oe=68EEB817",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },

   {
    id: 6,
    src:     "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNHBC7Y97BW_8oBQ6EV5JocDmUGvZkZwMI9h51NLrnWCGKBfas8PT1xL4vMeBwvBwD303YCpfspCIQq5Rpd5og4-K_7YZx2ZyLva3Q.mp4?_nc_cat=100&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=7fhD3qb62HkQ7kNvwHe6GVh&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODI4NjY4MjQ2MzQ0ODkwLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=6152f63a0861b48c&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zNTQ1NzhEQjUwRDE0NjlGQkI5RUQyRTM2N0VGMUJBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT1hXZXlHVVI2Wjk4VnNIQUtmdXF0dUN5OTUyYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm9JKux-vq-AIVAigCQzMsF0A8RBiTdLxqGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQE1jWTh_RGDXJi-XDIVciK57NpCSBGLfp_BUFQxdu7bo-pZusnerRMkKXv2bglIV6Xika8L-nJ3&oh=00_Afd0t877rK7zckQj07Te2TkI6e4UCimDF-LWjZ7PdG9lfw&oe=68EEC875",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 7,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQODkYJNOyIN8W-j8KS3EY1Do1wjMRMF4LtPZEP-0CMF6EV5sGUQGy2do14YGiK5V8Z2iGPJB4w01YADbhZPQAnJZ8YGVMkB1qcgRIk.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=2oPglMbUFBcQ7kNvwEitpG2&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjMxNzMyMDUyMzM2OTkzOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=4fe14f19b73b3b3d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80OTQ0MTk4MzIwQTE2MDRGQTVBQTFDRjk5N0EyODhBRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQlZFVnlGdnZGODhzR3dJQURLWnBaT2RTcDkyYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmpLeCquflnQgVAigCQzMsF0A6iHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGtJw6_ZFGzK8HbJNeSt6JcWo8B3qCRJcxS0JIUOU5XvO-sIew-WUPTD4ipEkKuQGFAHBR6HpZ5&oh=00_AfehHH0ECPu73iMP8e_hiaKU4LxXdHW64OOZwqb0V3QBOA&oe=68EEB63F",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 8,
    src:    "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQODkYJNOyIN8W-j8KS3EY1Do1wjMRMF4LtPZEP-0CMF6EV5sGUQGy2do14YGiK5V8Z2iGPJB4w01YADbhZPQAnJZ8YGVMkB1qcgRIk.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=2oPglMbUFBcQ7kNvwEitpG2&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjMxNzMyMDUyMzM2OTkzOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=4fe14f19b73b3b3d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80OTQ0MTk4MzIwQTE2MDRGQTVBQTFDRjk5N0EyODhBRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQlZFVnlGdnZGODhzR3dJQURLWnBaT2RTcDkyYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmpLeCquflnQgVAigCQzMsF0A6iHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGtJw6_ZFGzK8HbJNeSt6JcWo8B3qCRJcxS0JIUOU5XvO-sIew-WUPTD4ipEkKuQGFAHBR6HpZ5&oh=00_AfehHH0ECPu73iMP8e_hiaKU4LxXdHW64OOZwqb0V3QBOA&oe=68EEB63F",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 9,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQOJqWLcQGAdXE1y58o3qwKfSEXPvwtEB-KJOJvhfiGCRKhHOdqY09Zfj80JoV9dR_MkS7c1uvA0mmPaSBuSOQMQOUQGK81trrsOFUI.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=Uvcndw0CehYQ7kNvwFJ6MUV&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Nzg1NzkzNTU3Njc4MDMzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=d20c94d573e283c&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC85RTQ0MjQ3MzBFMjNBODI3MTI1QzdFNjEyNjBDQzU5NF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR0RnY2lIS1BlXzBlUUVEQUszeURHTmt1ZVpiYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmop_6nZqr5QIVAigCQzMsF0BBqp--dsi0GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHt7BdCtNkqEgpXb_j9Nq07fju_ABIbxPPlQBG_HPMTf_e3e26hKZli654uYAnU-1IMDZgv54Mf&oh=00_Affz16iuoiysNLb3wmj9NcEqgolgKJ32c3tfZFFGV4gyAQ&oe=68EEA118",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
     Available in limited quantities, get yours today!`
  },
   {
    id: 10,
    src:    "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPWB2eFutzoz0grMbSWBDfoeZ-kikciwNFOqlFHos3tA6i7K48gGAWkKae_nkzV__FtDmd6QVQmwvZdCZ1dE-OaqR6plgXwR1E1974.mp4?_nc_cat=104&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=VSpdqyJfWX0Q7kNvwFMM3IB&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzU0NjQ2NjgwODgwMDM4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NDgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=a939bdc9f2dff47f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9ENTQ5NTgyREU3QUZFNEREQjIzMjlFQzExRDg0MDhBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSHFEY2lGQ2dKOFR1eEFFQUtSd25HSFZRZjVsYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzI7C9ZuW1wIVAigCQzMsF0BIWZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGLph8zxQEj1bJiwOzEk8QLDCOdcLOch9US0ceCIJ0bxDuwYUwLXItVMRJger5Y1S1NTZGrM6Lt&oh=00_Affd4-0rgkPxDOAUgo4h7ptOcOI1gslI4ZxmyNsxsx1V8g&oe=68EEBA25",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 11,
    src:    "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPWB2eFutzoz0grMbSWBDfoeZ-kikciwNFOqlFHos3tA6i7K48gGAWkKae_nkzV__FtDmd6QVQmwvZdCZ1dE-OaqR6plgXwR1E1974.mp4?_nc_cat=104&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=VSpdqyJfWX0Q7kNvwFMM3IB&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzU0NjQ2NjgwODgwMDM4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NDgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=a939bdc9f2dff47f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9ENTQ5NTgyREU3QUZFNEREQjIzMjlFQzExRDg0MDhBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSHFEY2lGQ2dKOFR1eEFFQUtSd25HSFZRZjVsYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzI7C9ZuW1wIVAigCQzMsF0BIWZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGLph8zxQEj1bJiwOzEk8QLDCOdcLOch9US0ceCIJ0bxDuwYUwLXItVMRJger5Y1S1NTZGrM6Lt&oh=00_Affd4-0rgkPxDOAUgo4h7ptOcOI1gslI4ZxmyNsxsx1V8g&oe=68EEBA25",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
   Available in limited quantities, get yours today!`
  },
   {
    id: 12,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPWB2eFutzoz0grMbSWBDfoeZ-kikciwNFOqlFHos3tA6i7K48gGAWkKae_nkzV__FtDmd6QVQmwvZdCZ1dE-OaqR6plgXwR1E1974.mp4?_nc_cat=104&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=VSpdqyJfWX0Q7kNvwFMM3IB&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzU0NjQ2NjgwODgwMDM4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NDgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=a939bdc9f2dff47f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9ENTQ5NTgyREU3QUZFNEREQjIzMjlFQzExRDg0MDhBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSHFEY2lGQ2dKOFR1eEFFQUtSd25HSFZRZjVsYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzI7C9ZuW1wIVAigCQzMsF0BIWZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGLph8zxQEj1bJiwOzEk8QLDCOdcLOch9US0ceCIJ0bxDuwYUwLXItVMRJger5Y1S1NTZGrM6Lt&oh=00_Affd4-0rgkPxDOAUgo4h7ptOcOI1gslI4ZxmyNsxsx1V8g&oe=68EEBA25",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 13,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMhIyT_o3N5thSM6D5a5AYAbiWiaLEwzZU0OhQMDB5hqxbWWAUAt4l0GHOClOT_GCmY4TwayQHHis0feubu-Yl862LfpZl3ps5mao4.mp4?_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=snWNELUuyRUQ7kNvwH_tY4o&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjY2Mjg1NDYyNzk0NjYxLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=23ceb65ff1a90d3a&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GQjQ4NjZBOTRCM0ZBOEI0QUVDNzQ0RkVFNDJCQTdCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRVVsWGlGZ1Z3c0p1cndFQUJSV2k4OW42Vk41YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmysahxfX-rgIVAigCQzMsF0A95mZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQFQ9GhurJsL3pb7Cwa4xxJ1tyPFulHKCnE-JJfeCqLANJOV6Ip1rq9s0YmmQlx_L69tqhbjKWGs&oh=00_AfccU4mEFRazvl1AguI8Yxpx3CANoz69GnKRlpcDGtzZ2A&oe=68EEA15C",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 14,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMKUYEtceOsA8uajG8tM1Dz4_mzzBBvssPKMs02YgnDewABwS-PLp78V0IH40HK10Yfl7TgK4JQk5G0yNTnVvVygFaSiLiz8lP57vI.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=y-A6lk5SDUEQ7kNvwEGazhv&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODE1NzUyODk3NTgyMTQ3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=871fa6fe92ca1a98&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80MTRGODY1Q0NBQTgyRDZCMjE4RUVGQjdGM0M5QTdCM192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR0lSWkNGMnlVa0lha1Z3QU5QNV9RcWhDa051YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmhtH62oj78gIVAigCQzMsF0A1kOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHEcuclF6-WN85SIJ-NqeK4kvfKdbCjMWI0Hf9r6kY0Yh8DJvt1tQwAwKzubG-mG8gXAyiU9fuM&oh=00_AffTVRxL8sC7IKBVhzR5NH7b2uVTvszSQYdvPCRsuC1AaA&oe=68EEAC78",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
   Available in limited quantities, get yours today!`
  },
   {
    id: 15,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNNWVzvFnyZhgJGpdgJGGfAKmcXQhuXz6lBz3eL_GoioqbCZV7E9CqTFCR18wQZYU-uGZ0NT4cr2KV6G-3sAHwbd8_B3EYFBZI4tis.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=H6GDYD1B6eIQ7kNvwE5BDlO&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ3ODg1MDg1MzM2OTk3NywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjUzLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=3f9d5716c6e5c506&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9ERjRDMjA3NTE1NUNBQUEzMTk2QUQ4MDMyREQwMUI4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTnRrY1NIUzI0cDZ6WUlGQUptLURLcVN0cHREYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm8uHTvLnAoAUVAigCQzMsF0BKxDlYEGJOGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEc43mAzK5BiJ21H4sGRtHjtqjseqdZ9BuQk5tqwmnXg9Ah-u-mLcn9mJ3F1k5u4kRw6HtSwDTB&oh=00_Afc8zdWZ1afVeCkNbuyIUt4MmCGu4OgXCMAR1lbx9lOKTw&oe=68EEBE24",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 16,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMClIB3NLa-NKRA27cPoZR0-USA8bcYj1-WbIP8hbVfzLMG7U0iat6uBiQLc1ENJiZ9DPpkz2iozLKeSrcCC5i20klSx1U_LeJHQ2g.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=qaZH8IIm8rsQ7kNvwG5DNlm&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Njc2MDA5Mjc4ODcxMzc2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=a59f02b0ee23a475&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xNjQ3NzFBRjYxQzEyNjc5MjE3QzhDMjY4RUZCMzM5N192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSGMyVWlIcXJkVFhZSllFQUVKWTVscFJjQkpCYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmoN30zvW0swIVAigCQzMsF0A_CHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEfg8ejTcJqYlS_Ke7Qbpd5mqvIPZBLYiYAQ2l-REVHvni2PMJ6sR2zPXtHI_rWTNSIW3MInuRO&oh=00_AffTifylRNH3lrSTQbjEXyFAybp27g0Shhu3cTQtTTFbIQ&oe=68EECD2B",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 17,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPNfyYlJR3QM5hH-Q5CC1QNIn9vc16hJ_R7-yZ58a2ag0oBYOBgwgint02iTQatWVt9UPSUl_vpK3IAqMIdCwE-vbbiCpQXGPSJGno.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=l4YfrXfxAPIQ7kNvwFNvPsq&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjAxODM1MDIyNTYyOTc5MywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjMwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=50ea8ed9af96ef1f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yRDRCNDk1QzIzMDE3RjYzMEQxNDdCMzk1OUQ2N0U5MF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTHpHRXlGR2R5WEdQTWdDQVBGbkRkNG9PQ2xIYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmwonZg7nrlQcVAigCQzMsF0A-mNT987ZGGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHAZYUnz5mo61bnclU1gCOfMJ541T-bqXDCANnm3JMYQXOFAguTJGgjGqXSofII5xx7b9sAbrFX&oh=00_AfdMbh3mgrcJcGekPQrltoWCVTkfYTCzLYwP9UDF_5L7Ag&oe=68EEC94B",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 18,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQPAxf9skHCmIFCMNGRX-3daED4SfbgyPpKrVWSj6VR41vP6mgWDiRK3H0RpOP4U0AVLxlCd0BZbl4gGaDw96Fd6y0ZfJCtlwyHrkfY.mp4?_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=-XgfL6o31FoQ7kNvwF9LvIj&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjA1NzU3ODI4MTY0NjYzMywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE3LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=d77e0321e48f9b51&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9EQTQ3Q0I5NzY4RjA2QTREQkEyRjU5QzA2NEM5OEY4Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSGplRXlGUVFUTG1OcVFFQUFqamRUOGl1T0JzYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm0uiZ6ejWpwcVAigCQzMsF0AxCj1wo9cKGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEj6XO_H_-ApIE4PC6n7PjKBTnowi3OO4OinKYeIW8IiYlLVmC4jhHaM9RUObD1Oc7nimYG1ID4&oh=00_AfcRkODfyQnH6tAK3cYwDPho01rIMhzn_2vuUpgQV1bL7w&oe=68EEC373",
     title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 19,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNIHYv2NzAmFMRSZ9YKUWZ1pVgC4uM6-CUKGXSVAzzV8238OitramMdA0c2PNMTt5KlhP9fGhsIqgsfZzXQ2pCnBVEOw3gZOQhH9K8.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=G9uuk7qctBEQ7kNvwHnkKvO&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODE4NjMxODU0MDc5OTg0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=df147abe98fdede1&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BMTQxNjUzNjRGRjVBQzUxNDNCNDM2MEIyOTg5OEQ5Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSnRDU3lGUG5DYzNYR1lDQUlpbmFvc2IxM1pGYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm4P_pzdKi9AIVAigCQzMsF0A9O6XjU_fPGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHu9-2uMtzFl-hm1qLw-_YXe2sjbn-XOuriQR67AlLJX3_V9SYDVMrT4ebDnfV_a1_PUmESCvhm&oh=00_AffUwXUcP0rjo1aDqS8F0DKr7B2MBH0z0lGkLz_LtQ1m5Q&oe=68EEBEAB",
    title: "Golden Festive Saree",
    description: `Golden Festive Saree with intricate zari work, ideal for Diwali celebrations and grand occasions.
    Available in limited quantities, get yours today!`
  },
   {
    id: 20,
    src:   "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQMASb8Tg-fHsAOokB-ySRg1J48p81A26B09kEsV7ZvoeZ3OxPF9sDoNQK-AvQsjtLCWKvpGUmmvT7QJxxpi8vuly64KJRHlPnX4czA.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=VDQ1Nu4-l5gQ7kNvwF5LmND&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTUyMTg4NzA2MjE1NjY5OSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=9cca6658d9eda6e9&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BRDRBMzBDMjQyQzkzNTUwNTcyNDA3QUMzN0QxMzZBOF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSVRaUGlIb0gydjdfeTBIQVBhOEZ3ZUhKN1lqYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmtpbTm76JtAUVAigCQzMsF0A2d0vGp--eGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=eRH7BXX75X9EI0Rs_8oK0g&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHMgT06jb_4aDpiyuOJ9lLH1B2Znrg84aT1Xk_hFXWwo6l1JdDQaV03HmSWb0_-ZkYAX9aMRiFe&oh=00_Afc3mzsLmJ2ykGIm8aor6DcfoQEvrhWe1IegVghkjFwpuw&oe=68EEC15C",
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
