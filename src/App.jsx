import ImageSlider from './components/image-slider';
import { IMAGES } from './components/images'; 

import './background.css';
import HangingSign from './components/hanging-sign';

const albumDetails = {
  title: "A Day at the Vancouver Pumpkin Patch",
  date: "October 8, 2023"
}

const App = () => (
  <div className="background">
    <HangingSign albumDetails={albumDetails}/>
    {/* <section style={{ maxWidth: "600px", width: '100%', aspectRatio: '1', margin: "0 auto" }}>
      <ImageSlider images={IMAGES} />
    </section> */}
  </div>
);

export default App