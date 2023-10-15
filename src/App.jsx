import Header from './components/header';
import ImageSlider from './components/image-slider';
import { IMAGES } from './components/images'; 

import sign from './assets/hanging-sign.png';
import './background.css';

const App = () => (
  <div className="background">
    <div className="sign-container">
      <img className="sign" src={sign} />
      <div className="sign-text">
          <h1>A Day at the<br/>Vancouver<br/>Pumpkin Patch</h1></div>
      <div className="sign-date">October 8, 2023</div>
    </div>
    {/* <Header /> */}
    {/* <section style={{ maxWidth: "600px", width: '100%', aspectRatio: '1', margin: "0 auto" }}>
      <ImageSlider images={IMAGES} />
    </section> */}
  </div>
);

export default App