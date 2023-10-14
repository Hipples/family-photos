import Header from './components/header';
import ImageSlider from './components/image-slider';
import { IMAGES } from './components/images'; 

const App = () => (
  <div style={{ backgroundColor: 'orange' }}>
    <Header />
    <section style={{ maxWidth: "600px", width: '100%', aspectRatio: '1', margin: "0 auto" }}>
      <ImageSlider images={IMAGES} />
    </section>
  </div>
);

export default App