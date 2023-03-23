import './App.css';
import Header from './components/Header/Header';
import HeaderImage from './components/ImageList/HeaderImage';
import Mydata from './components/Mydata/Mydata';
// import Checkout from './components/Checkout/Checkout';
import BuyProduct from './components/BuyProduct/BuyProduct';


function App() {
  return (
    <div >
      <Header />
      <HeaderImage />
      <Mydata />
      {/* <BuyProduct/> */}
     
    </div>
  );
}

export default App;
