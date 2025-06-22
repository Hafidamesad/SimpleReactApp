
import {ProductCard} from './Components/ProductCard';
import './App.css';
import { ProductList } from './Components/ProductList';

function App() {

  const product=[
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 999,
      
    },
    {
      imageSrc: "images/airpods.png",
      title: "AirPods Pro 2",
      specification: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Up to 6 hours of listening",
      ],
      price: 249,
    },
    {
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch 9",
      specification: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      price: 399,
    },
  ];
  function handlePurchase(product) {
      alert(`You clicked on ${product.title} wich cost $${product.price}`);}
  return (
    <div className="App">
      <ProductList>
        <ProductCard background='darkolivegreen' product={product[0]} onPurchase={handlePurchase}/>
        <ProductCard product={product[1]} onPurchase={handlePurchase}/>
        <ProductCard background='peru' product={product[2]} onPurchase={handlePurchase}/>
      </ProductList>
    </div>
  );
}
export default App;
