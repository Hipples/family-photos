import ImageSlider from './components/image-slider';
import { IMAGES } from './components/images'; 

import './background.css';
import HangingSign from './components/hanging-sign';

const albumDetails = {
  title: "A Day at the Vancouver Pumpkin Patch",
  date: "October 8, 2023"
}

const App = () => (
  <div>
    <HangingSign albumDetails={albumDetails}/>
    <section>
      <ImageSlider images={IMAGES} />
    </section>
  </div>
);

export default App