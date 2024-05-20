import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./img/banner.jpg";
import Footer from "./components/footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/news";
import About from "./components/about";
import Contact from "./components/contact";
import BodyContent from "./components/bodyContent";
import SinglePage from "./components/singlePage";
import Prices from "./components/pricesApi";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar img={Banner}></NavigationBar>
        <Routes>
            <Route path="/" element={<BodyContent></BodyContent>}></Route>
            <Route path="/prices" element={<Prices></Prices>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/articleview" element={<SinglePage></SinglePage>}></Route>
        </Routes>
        </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
