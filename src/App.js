import logo from "./logo.svg";
import "./styles/main.css";
// import Main from "./component/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/header";
import { About } from "./component/about";
import { Apply } from "./component/apply/Apply";
import { Guideline } from "./component/guideline/Guideline";
import Timeline from "./component/timeline"
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "./assets/videos/videoBg.mp4";
import { Info } from "./component/info/Info";
import{FAQ} from "./component/faq"

function App() {
  return (
  
     <div className="App"> 
      {/* <Main/> */}
      <video className="background-video" src={videoBg} autoPlay loop muted/>
      <div className="content">
        <Header/>
        <About/>
        <Apply/>
        <Guideline/>
        <Timeline/>
        <FAQ/>
        <Info/>
      </div>
    
  
    </div>
   
  );
}

export default App;
