import sign from '../assets/hanging-sign.png';
import './hanging-sign.css';

const HangingSign = ({ albumDetails }) => (
  <div className="container">
    <img className="sign" src={sign} />
    <div className="text"><h1>{albumDetails.title}</h1></div>
    <div className="date">{albumDetails.date}</div>
  </div>
);

export default HangingSign;