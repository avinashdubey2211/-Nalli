
import './App.css'
import FeaturedProducts from './Pages/ FeaturedProducts/ FeaturedProducts'
import Seller from './Pages/Best_Sellers/Seller'
import Discover from './Pages/Discover-Nalli/Discover'
import Diwali from './Pages/Diwali/Diwali'
import Featured from './Pages/Featured_Collections/Featured'
import Voucher from './Pages/Gift_Voucher/Voucher'
import Home from './Pages/Home/Home'
import Price from './Pages/Shop-by-Price/Price'
import Shop from './Pages/Shop.jsx/Shop'
import Navbar from './Shared/Navbar/Navbar'
import Text from './Pages/Text/Text'
import Sarees from './Pages/@nallisilksarees/Sarees'
import Newsletter from './Pages/Newsletter/Newsletter'
import Footer from './Pages/Footer /Footer'
import Navbar_Menu from './Shared/Navbar_Menu/Navbar_Menu'


function App() {
 

  return (
  <>
    <Navbar/>
    <Home/>
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
  
  </>
  )
}

export default App
