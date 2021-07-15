import './App.css';
import MyCarousel from './components/carousel/MyCarousel';
import MyNavBar from './components/my-navbar/MyNavBar'
import TitleText from './components/title/TitleText';

const App = () => {
  return (
    <div className="App">
      <MyNavBar />
      <MyCarousel />
      <TitleText />
    </div>
  );
}

export default App;
