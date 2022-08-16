import RenderList from './components/RenderList'
import ShopItemFunc from './components/ShopItemFunc'
import './styles/shop.scss'
import './styles/reset.scss'
import './styles/style.scss'
import Form from "./components/Form";

function App() {
  const imageList = [{ image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png", name: "bridge" }, { image: "https://html5css.ru/css/img_forest.jpg", name: "forest" }]
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  return (
    <div className="App">
      <RenderList list={imageList} />
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item ={item} />
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default App;
