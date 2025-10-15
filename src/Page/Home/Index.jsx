import React from 'react'
import Voucher from '../../Pages/Gift_Voucher/Voucher'
import Discover from '../../Pages/Discover-Nalli/Discover'
import Text from '../../Pages/Text/Text'
import Sarees from '../../Pages/@nallisilksarees/Sarees'
import Newsletter from '../../Pages/Newsletter/Newsletter'
import Footer from '../../Pages/Footer /Footer'
import Navbar_Menu from '../../Shared/Navbar_Menu/Navbar_Menu'
import ProductDetail from '../../Components/Detail_pages/ProductDetail'
import ImageCourcel from '../../Pages/ImageCourcel/ImageCourcel'
import Shop from '../../Pages/Shop/Shop'
import Diwali from '../../Pages/Diwali/Diwali'
import FeaturedProducts from '../../Pages/ FeaturedProducts/ FeaturedProducts'
import  Featured from '../../Pages/Featured_Collections/Featured'
import Seller from '../../Pages/Best_Sellers/Seller'
import  Price from '../../Pages/Shop-by-Price/Price'



const Index = () => {
  return (
 <>
   {/* <Navbar/> */}
    {/* <Home/> */}
    <ImageCourcel/>
    <FeaturedProducts/>
    <Shop/>
    <Diwali/>
    <Featured/>
    <Seller/>
    <Price/>
    <Voucher/>
    <Discover/>
    <Text/>
    <Sarees/>
    <Newsletter/>
    <Footer/>
    <Navbar_Menu/>
    {/* <ProductDetail/> */}
 </>
  )
}

export default Index